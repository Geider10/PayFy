import {FlatList, View} from 'react-native';
import {ThemedText} from '@/components/ThemedText';
import {ColorsBase} from '@/constants/Colors';
import React from 'react';
import {Card} from '@/types/types';
import {CardId} from './Card';

export const CardsClient = ( {cardList} : {cardList:Array<Card>}) => {
    return (
        <FlatList
            data = {cardList}
            keyExtractor={(card)=> card.cardId }
            ItemSeparatorComponent={()=> <View style={{marginBottom : 10}}></View>}
            renderItem={({item})=> 
                <CardId userId={item.userId} cardId={item.cardId} lastFord={item.lastFord} brand={item.brand}/>
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