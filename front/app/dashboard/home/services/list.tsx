import { apiGetServicesCategories } from "@/api/providers.service";
import CategoryGroup, { ServiceCategoryT } from "@/components/services/CategoryGroup";
import CategorySkeleton from "@/components/services/ServicesListSkeleton";
import { useEffect, useState } from "react";
import {
  ScrollView,
  View,
} from "react-native";
import {useServiceStore} from '@/hooks/useServiceStore';
import { HeaderToBack } from "@/components/HeaderToBack";
import {RelativePathString} from 'expo-router';
import {ThemedView} from '@/components/ThemedView';
export default function ServicesList() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  const getCategories = async () => {
    const { ok, data } = await apiGetServicesCategories();
    if (ok) {
      setCategories(data);
      setLoading(false);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);
  return (
    <ThemedView style={{flex : 1}}>
      <HeaderToBack url={"/dashboard/home" as RelativePathString} title={"Elegí tu proveedor"}/>
      {loading ? (
        <View>
          <CategorySkeleton />
        </View>
      ) : (
        <ScrollView 
          scrollEnabled={true}
          showsVerticalScrollIndicator={false}
        >
          {categories.map((cat: ServiceCategoryT) => {
            return <CategoryGroup key={cat.id} category={cat} />;
          })}
        </ScrollView>
      )}
    </ThemedView>
  );
}
