import { AUTH_STATUS } from '@/constants/enums/AuthStatus';
import { useAuthStore } from '@/hooks/useAuthStore';
import {Stack} from 'expo-router';
import { useEffect } from 'react';
import { Modal, View } from 'react-native';
import LoadingScreen from '../../loading';

export default function PaymentMethodLayout() {
  const { checkAuthToken, status } = useAuthStore();
  
  useEffect(() => {
      checkAuthToken();
  }, []);
  return (
    <View style={{flex:1}}>
      <Modal
              animationType="slide"
              transparent={true}
              visible={status == AUTH_STATUS.checking}
            >
              <LoadingScreen />
            </Modal>
    <Stack screenOptions={{headerShown: false}}>
        <Stack.Screen name="index"  options={{title: "index" }}/>
        <Stack.Screen name="add" options={{ title: "add"}}/> 
        <Stack.Screen name="[card]" options={{ title: "Detalles de Tarjeta" }} />
    </Stack>

    </View>
  );
}