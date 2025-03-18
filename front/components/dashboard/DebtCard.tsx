import {Card, Button} from 'react-native-paper';
import {ThemedText} from '../ThemedText';
import {ThemedView} from '../ThemedView';
import {View} from 'react-native';
import { Colors, ColorsBase } from '@/constants/Colors'
import { router } from 'expo-router'
import { useColorScheme } from '@/hooks/useColorScheme.web'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import {Debt} from '@/types/types';

const DebtCard : React.FunctionComponent<Debt> =  ({due_date, invoice_id, amount, company }) => {
    const theme = useColorScheme() ?? 'light'
    const insets = useSafeAreaInsets()
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
                    {company.name}
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
        <ThemedText>{due_date}</ThemedText>
    </View>
    <View
        style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
        }}
    >
        <ThemedText>Total a pagar</ThemedText>
        <ThemedText>$ {amount}</ThemedText>
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
                router.push(`/dashboard/home/invoice/${invoice_id}`)
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