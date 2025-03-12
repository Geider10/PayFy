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

export const DebtCard = () => {
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
<Card.Content style={{ gap: 10 }}>
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
            {item.category.name === 'Agua' ? (
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
            )}

            <ThemedView style={{ marginLeft: 10 }}>
                <ThemedText type='defaultSemiBold'>
                    {item.category.name}
                </ThemedText>
                <ThemedText
                    type='default'
                    style={{
                        color:
                            item.category.name == 'Agua'
                                ? ColorsBase.blue400
                                : item.type === 'Gas'
                                ? ColorsBase.red400
                                : item.type === 'Internet'
                                ? '#834E9C'
                                : ColorsBase.yellow400,
                    }}
                >
                    {item.name}
                </ThemedText>
            </ThemedView>
        </View>
        <IconStatus status={item.status} />
    </ThemedView>

    <ThemedText
        type='default'
        style={{
            color: ColorsBase.cyan500,
            backgroundColor: ColorsBase.cyan100
        }}
    >
        N° Cliente{' '}
        <ThemedText
            type='defaultSemiBold'
            style={{ color: ColorsBase.cyan500 }}
        >
            {item.registeredUsers[0].clienteId}
        </ThemedText>
        <MaterialCommunityIcons
            name='content-copy'
            size={18}
            color={ColorsBase.cyan500}
        />
    </ThemedText>
    {/* </ThemedView> */}
    <View
        style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
        }}
    >
        <ThemedText>Vencimiento</ThemedText>
        <ThemedText>{item.fechVen?item.fechVen:"30/02/2025"}</ThemedText>
    </View>
    <View
        style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
        }}
    >
        <ThemedText>Total a pagar</ThemedText>
        <ThemedText> ARS $ {item.totalPagar?item.totalPagar:"75.900"}</ThemedText>
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
                marginEnd: 10,
            }}
            onPress={() =>
                router.push(
                    `/dashboard/home/payment/${item.Client}`
                )
            }
        >
            <ThemedText
                type='default'
                style={{ color: ColorsBase.cyan500 }}
            >
                Ver Detalles
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