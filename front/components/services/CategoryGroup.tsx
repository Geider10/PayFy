import { apiGetServicesByCategory } from "@/api/providers.service";
import { useEffect, useState } from "react";
import { ThemedText } from "../ThemedText";
import { ColorsBase, Colors } from "@/constants/Colors";
import { CompanySkeleton } from "./ServicesListSkeleton";
import { ScrollView, TouchableOpacity, View, StyleSheet } from "react-native";
import { router } from "expo-router";
import IconCategorySelector from './IconCategorySelector';
export type ServiceCategoryT = {
  name: string;
  id: string;
};

export type ApiCompanyT = {
  serviceId: string;
  name: string;
};

export default function CategoryGroup({category}: {category: ServiceCategoryT}) {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCompanies();
  }, []);

  const getCompanies = async () => {
    const { ok, data } = await apiGetServicesByCategory(category.id);
    if (ok) {
      setCompanies(data);
      setLoading(false);
    }
  };
  return (
    <View >
        <View style={{flexDirection:"row", gap:8}}>
            <IconCategorySelector catName={category.name}/>
            <ThemedText
              lightColor={Colors.light.text}
              type="defaultSemiBold" 
            >
              {category.name}
            </ThemedText>
        </View>
      {loading ? (
        <View style={{ flexDirection: "row", gap: 12 }}>
          <CompanySkeleton />
          <CompanySkeleton />
          <CompanySkeleton />
        </View>
      ) : (
        <ScrollView
          horizontal
          style={{ paddingVertical: 20}}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ flexDirection: "row"}}
        >
          {companies.map((comp: ApiCompanyT) => {
            return <CompanyBadge key={comp.serviceId} company={comp} />;
          })}
        </ScrollView>
      )}
    </View>
  );
}

function CompanyBadge({ company }: { company: ApiCompanyT }) {
  return (
    <TouchableOpacity onPress={()=>router.push(`/dashboard/home/services/add/${company.serviceId}?servName=${company.name}`)}
      style={styles.contentCompany}
    >
      <View
        style={styles.imgCompany}
      ></View>
      <ThemedText type="default" lightColor={Colors.light.text}>{company.name}</ThemedText>
    </TouchableOpacity>
  );
}



const styles = StyleSheet.create({
  contentCompany:{
    alignItems: "center",
    gap: 5,
    paddingHorizontal: 16,
    maxWidth: 120,
  },
  imgCompany:{
    width: 30,
    height: 30,
    backgroundColor: ColorsBase.neutral200,
    borderRadius: 999,
  }
})