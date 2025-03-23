import {View, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import {useLocalSearchParams} from 'expo-router';  
import { HeaderToBack } from '@/components/HeaderToBack';
import {ThemedText} from '@/components/ThemedText';
import {Colors, ColorsBase} from '@/constants/Colors';
import {router} from 'expo-router';
import {Button} from 'react-native-paper';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import {ThemedView} from '@/components/ThemedView';
const CardDetails = () => {
    const  {card} = useLocalSearchParams();
    //get card by id in DB
    const data = {
        id : '01',
        lastFord : '1122',
        brand : 'VISA'
    }
    const handleDelete = ()=> {
        //fetch api deleteCardById
        router.push("/dashboard/paymentMethod")
    }
    return (
        <ThemedView style={styles.contentScroll}>
                <HeaderToBack url={"../"} title="Tarjeta"/>
                <View style={{gap : 20}}>
                    <View style={styles.container} >
                        <ThemedText type='default' style = {styles.numberText}> **** {data.lastFord} </ThemedText>
                        <ThemedText type="subtitle" style={{color : Colors.dark.text}}> {data.brand} </ThemedText>
                    </View>
                    <Button  mode='contained' onPress={handleDelete} buttonColor= "#333333" style={{borderRadius : 32}}>
                        <View  style={styles.btnAddCard}>
                            <MaterialIcons name="delete-outline" size={24} color={Colors.dark.text} />
                            <ThemedText type='default' style={{color : Colors.dark.text}}> Eliminar tarjeta</ThemedText>
                        </View>
                    </Button >
                </View>
        </ThemedView>
    )
}

const styles = StyleSheet.create({
    contentScroll: {
        padding: 15,
        flex : 1
    },
    container : {
        borderRadius : 10,
        padding: 10,
        backgroundColor: '#e6713c',
        height :200,
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        flexDirection: 'row',
    },
    numberText : {
        padding: 5,
        color : Colors.dark.text,
        backgroundColor : "rgba(211, 211, 211, 0.4)",
        borderRadius: 5,
        textAlign: 'center',
        
    },
    btnAddCard:{
		flexDirection : 'row',
		justifyContent : 'center',
		alignItems : 'center',
		gap : 5,
    }
})

export default CardDetails; 