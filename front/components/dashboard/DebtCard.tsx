import {Card, Button} from 'react-native-paper';
import {ThemedText} from '../ThemedText';
import {ThemedView} from '../ThemedView';
import {View} from 'react-native';
import { Colors, ColorsBase } from '@/constants/Colors'
import { router } from 'expo-router'
import { useColorScheme } from '@/hooks/useColorScheme.web'
import {Debt, CreateDebt} from '@/types/types';
import {payInvoice, apiPostPayment} from '@/api/payment.service';
import {openBrowserAsync} from 'expo-web-browser';
import { useAuthStore } from '@/hooks/useAuthStore';

const DebtCard : React.FunctionComponent<Debt> =  (DebtProp) => {
    const theme = useColorScheme() ?? 'light'
    const {user} = useAuthStore()
    const handlePayInvoice = async () => {
        const {ok, data} = await payInvoice(DebtProp)
        if (ok){
            handleCreatePayment()
            openBrowserAsync(data.url)
            // console.log(DebtProp, user);
        }
    }
     const handleCreatePayment = async () => {
        const createDebt : CreateDebt = {
            userId : String(user._id),
            invoiceId : DebtProp.invoice_id,
            paymentStatus : 'approved'
          }

        const {data} = await apiPostPayment(createDebt) 
        if(!data) return console.log('No se pudo crear el pago');
        console.log('se realizo el pago',  data.message);
      }
    return (
        <Card
        mode='contained'
        style={{
            borderWidth: 0.2,
            borderColor: 'black',
            backgroundColor:
                theme === 'light'
                    ? Colors.light.background
                    : Colors.dark.background,
            marginBottom: 16,
        }}
        >
        <Card.Content style={{ gap: 5 }}>
            <ThemedView
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }}
            >
            <View
                style={{
                    flexDirection: 'row',
                }} 
            >
            <ThemedView>
                <ThemedText
                    type='default'
                    style={{
                        color: ColorsBase.cyan500,
                        fontWeight : 'bold'
                    }}
                >
                    {DebtProp.company.name}
                </ThemedText>
            </ThemedView>
        </View>
    </ThemedView>
    <View
        style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
        }}
    >
        <ThemedText>Vencimiento</ThemedText>
        <ThemedText>{DebtProp.due_date}</ThemedText>
    </View>
    <View
        style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
        }}
    >
        <ThemedText>Total a pagar</ThemedText>
        <ThemedText>$ {DebtProp.amount}</ThemedText>
    </View>
    <View
        style={{
            justifyContent: 'center',
            gap: 10,
            alignSelf: 'center',
            width: '98%',
            marginTop: 10,
        }}
    >
        <Button
            mode='outlined'
            textColor={ColorsBase.cyan500}
            style={{
                borderColor: ColorsBase.cyan500,
            }}
            onPress={() =>
                router.push(`/dashboard/home/invoice/${DebtProp.invoice_id}`)
            }
        >
            <ThemedText
                type='default'
                style={{ color: ColorsBase.cyan500 }}
            >
                Ver detalles
            </ThemedText>
        </Button>
        <Button
            mode='contained'
            buttonColor={ColorsBase.cyan500}
            onPress={()=> handlePayInvoice()}
        >
            <ThemedText
                type='default'
                style={{ color: Colors.light.background }}
            >
                Pagar ahora
            </ThemedText>
        </Button>
    </View>
    </Card.Content>
</Card>					
)}
export default DebtCard