import {FlatList, View} from 'react-native';
import {ThemedText} from '@/components/ThemedText';
import {ColorsBase} from '@/constants/Colors';
import React from 'react';
import {Card} from '@/types/types';
import {CardId} from './Card';
const cardData = [
    {
        id : '01',
        lastFord : '1122',
        brand : 'VISA'
    },
    {
        id : '02',
        lastFord : '3344',
        brand : 'MasterCard'
    },
    {
        id : '03',
        lastFord : '5566',
        brand : 'VISA'
    }
]
export const CardsClient = ( {cardList} : {cardList:Array<Card>}) => {
    return (
        <FlatList
            style= {{marginBottom : 20}}
            data = {cardList.length != 0 ? cardList : cardData }
            keyExtractor={( item)=> item.id}
            ItemSeparatorComponent={()=> <View style={{marginBottom : 10}}></View>}
            renderItem={({item})=> 
                <CardId id={item.id} lastFord={item.lastFord} brand={item.brand}/>
            }  
            ListEmptyComponent={()=> (
                <View style={{alignItems: 'center', marginVertical: 10}}>
                    <ThemedText type='default' style={{color: ColorsBase.cyan400 }}>
                        ¡No hay tarjetas!
                    </ThemedText>
                </View>
            )}
        />
    )
}