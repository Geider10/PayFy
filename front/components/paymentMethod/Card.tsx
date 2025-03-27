import {View, StyleSheet, Pressable} from 'react-native';
import {router} from 'expo-router';
import {Card} from '@/types/types';
import {ThemedText} from '@/components/ThemedText';
import {Colors, ColorsBase} from '@/constants/Colors';

export function CardId(prop: Card){
    const {cardId, lastFord, brand} = prop
    return (
        <Pressable onPress={()=> router.push(`/dashboard/paymentMethod/add/${cardId}`)}>
            <View style={styles.container} >
                <ThemedText type='default' style = {styles.numberText}> **** {lastFord} </ThemedText>
                <ThemedText type="subtitle" style={{color : Colors.dark.text}}> {brand ? brand : "Mastercard"} </ThemedText>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container : {
        borderRadius : 10,
        padding: 10,
        backgroundColor: '#e6713c',
        minHeight :80,
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

})