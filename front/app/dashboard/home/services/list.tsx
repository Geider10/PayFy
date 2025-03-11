import {
  apiGetServicesCategories,
} from "@/api/providers.service";
import HeaderApp from "@/components/dashboard/HeaderApp";
import CategoryGroup, { ServiceCategoryT } from "@/components/services/CategoryGroup";
import CategorySkeleton from "@/components/services/ServicesListSkeleton";
import { ThemedText } from "@/components/ThemedText";
import { useEffect, useState } from "react";
import {
  ScrollView,
  View,
} from "react-native";
import {useServiceStore} from '@/hooks/useServiceStore';

export default function ServicesList() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // getCategories();
  }, []);

  const getCategories = async () => {
    const { ok, data } = await apiGetServicesCategories();
    if (ok) {
      console.log(data);
      setCategories(data);
      setLoading(false);
    }
  };
  return (
    <ScrollView
      style={{ height: "100%" }}
      contentContainerStyle={{ flex: 1, gap: 15 }}
    >
      <HeaderApp />
      <ThemedText type="subtitle">Selecciona tu Proveedor</ThemedText>
      {loading ? (
        <View>
          <CategorySkeleton />
          <CategorySkeleton />
        </View>
      ) : (
        <View style={{ gap: 25 }}>
          {categories.map((cat: ServiceCategoryT) => {
            return <CategoryGroup key={cat.id} category={cat} />;
          })}
        </View>
      )}
    </ScrollView>
  );
}
