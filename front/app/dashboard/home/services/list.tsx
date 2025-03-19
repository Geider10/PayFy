import { apiGetServicesCategories } from "@/api/providers.service";
import CategoryGroup, { ServiceCategoryT } from "@/components/services/CategoryGroup";
import CategorySkeleton from "@/components/services/ServicesListSkeleton";
import { useEffect, useState } from "react";
import {
  ScrollView,
  View,
} from "react-native";
import {useServiceStore} from '@/hooks/useServiceStore';

export default function ServicesList() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  const getCategories = async () => {
    const { ok, data } = await apiGetServicesCategories();
    if (ok) {
      console.log(data);
      setCategories(data);
      setLoading(false);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);
  return (
    <ScrollView
      style={{ height: "100%" }}
      contentContainerStyle={{ flex: 1}}
    >
      {loading ? (
        <View>
          <CategorySkeleton />
        </View>
      ) : (
        <View >
          {categories.map((cat: ServiceCategoryT) => {
            return <CategoryGroup key={cat.id} category={cat} />;
          })}
        </View>
      )}
    </ScrollView>
  );
}
