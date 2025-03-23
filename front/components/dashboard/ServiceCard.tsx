import {View, Image, StyleSheet} from 'react-native';
import {ThemedText} from '@/components/ThemedText';
import {Colors,ColorsBase} from '@/constants/Colors';

type servicePros = {
    name : string,
    picture_url? : string
}
export const ServiceCard = ( {name, picture_url}: servicePros) => {
    return (
        <View style={styles.card}>
            {
                picture_url == "string" ? (
                    <View style={styles.imgCompany}></View> 
                ):(
                    <Image
                        style={styles.img}
                        source={picture_url === 'string' ? require('../../assets/images/icon-service.png') :  { uri: picture_url }}
                    />
                )
            }
            <ThemedText type="default" style={{color : Colors.light.text}}>{name}</ThemedText>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        width: 100,
        height: 100,
        alignItems: 'center',

    },
    img: {
        width: 60,
        height: 60,
        borderRadius: 100
    },
    text: {
        fontSize: 16,
    },
    imgCompany:{
        width: 30,
        height: 30,
        backgroundColor: ColorsBase.neutral200,
        borderRadius: 999,
      }
})