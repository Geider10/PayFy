import {View,Text, StyleSheet, Pressable} from 'react-native';
import {Link, useLocalSearchParams} from 'expo-router';  
import {CardDetail} from '@/components/paymentMethod/CardDetail';
const CardDetails = () => {
    const  {card} = useLocalSearchParams();
    const data = {
        id : '001',
        number : '3456',
        brand : 'Visa'
    }
    return (
        <View style = {styles.container}>
            <View style = {styles.headerContainer}>
                <Link href = "/paymentMethod" > Back</Link>
                <Text style = {styles.headerText}> Tarjeta</Text>
            </View>
            <CardDetail number = {data.number} brand = {data.brand}/>
            <Pressable style={({pressed})=> [ styles.btn ,pressed && styles.pressed]} >
                <Text style={styles.text}> Eliminar tarjeta</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#CCEDEB',
        alignItems: 'center',
        padding: 20,
    },
    headerContainer : {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
        marginBottom: 20
    },
    headerText: {
        color : '#080808',
        fontWeight: 'bold',
        fontSize: 20
    },
    btn: {
        backgroundColor: "#33B7AD",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
        alignItems: "center",
        marginTop: 20
      },
    pressed: {
        opacity: 0.8, 
      },
    text: {
        color: "#fff",
      },
})

export default CardDetails; 