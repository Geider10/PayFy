import { View, Text, StyleSheet, Pressable} from 'react-native';
import { useState, useEffect } from 'react';
import { Card } from '@/components/paymentMethod/Card';
import {Link} from 'expo-router';

const indexView = () => {

    const [cards, setCards] = useState( [
        {
            id : '001',
            number : '3456',
            brand : 'Visa'
        },
        {
            id : '002',
            number : '3456',
            brand : 'Mastercard'
        }
    ]); 
    const token = "";

    useEffect(() => {
        const fetchCards = async () => {
            try {
                const response = await fetch('http://localhost:3000/cards', {
                    method: 'GET',
                    headers: {
                        'Authorization': 'Bearer ' + token
                    }
                });
                const json = await response.json();
                setCards(json);
            } catch (error) {
                console.log(error);
            }
        };

        fetchCards();
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Link href = "/" asChild>
                    <Text>Back</Text>
                </Link>
                <Text style={styles.headerText}>Metodos de pago</Text>
            </View>
            <View style={styles.cardContainer}>
            {cards.length > 0 ? (
                cards.map((c) => (
                    <Card key={c.id} number={c.number} brand = {c.brand} id = {c.id}/> 
                ))
            ) : (
                <Text>The are no cards registered</Text>
            )}
            </View>
            <Link href="/paymentMethod/add" asChild > 
               <View style={styles.btn}>
                    <Pressable  style = {({pressed}) => [pressed && styles.pressed]} >
                        <Text style = {styles.text}>+ Agregar una nueva tarjeta</Text>
                    </Pressable>
               </View>
            </Link>
          
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#CCEDEB'
    },
    headerContainer : {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
        marginBottom: 20
    },
    cardContainer : {
        gap: 10,
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
      },
    pressed: {
        opacity: 0.8,
      },
    text: {
        color: "#fff",
      },
});

export default indexView;
