import {Card, Button} from 'react-native-paper';
import {ThemedText} from '../ThemedText';
import {ThemedView} from '../ThemedView';
import {View} from 'react-native';
import IconWater from '@/assets/svgs/icon-water'
import IconElectricity from '@/assets/svgs/icon-electricity'
import IconFlame from '@/assets/svgs/icon-flame'
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import IconStatus from '../IconStatus'
import { Colors, ColorsBase } from '@/constants/Colors'
import { router } from 'expo-router'
import { useColorScheme } from '@/hooks/useColorScheme.web'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

type DebtProps = {
    invoice_id : string,
    empresa : string,
    amount : string,
    due_date : string
}
const DebtCard = ({invoice_id, empresa, amount, due_date}:  DebtProps) => {
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
             {/* {item.category.name === 'Agua' ? (
                <IconWater
                    bgColor={ColorsBase.blue50}
                    color={ColorsBase.blue400}
                    size={32}
                    scale={1.4}
                />
            ) : item.category.name === 'Luz' ? (
                <IconElectricity
                    scale={1.4}
                    size={32}
                    color={ColorsBase.yellow400}
                    bgColor={ColorsBase.yellow50}
                />
            ) : item.category.name === 'Gas' ? (
                <IconFlame
                    bgColor={ColorsBase.red50}
                    color={ColorsBase.red400}
                    size={32}
                    scale={1.5}
                />
            ) : (
                <MaterialIcons
                    name='wifi'
                    color={'#834E9C'}
                    size={30}
                    style={{
                        backgroundColor: '#e2cced',
                        padding: 8,
                        borderRadius: 10,
                    }}
                />
            )}    */}

            <ThemedView>
                <ThemedText
                    type='default'
                    style={{
                        color: ColorsBase.cyan500,
                        fontWeight : 'bold'
                    }}
                >
                    {empresa}
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