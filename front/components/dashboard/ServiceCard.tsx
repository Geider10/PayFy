import {View, Text, Image, StyleSheet} from 'react-native';

type servicePros = {
    name : string,
    picture_url? : string
}
export const ServiceCard = ( {name, picture_url}: servicePros) => {
    return (
        <View style={styles.card}>
            <Image
                style={styles.img}
                source={picture_url === 'string' ? require('../../assets/images/icon-service.png') :  { uri: picture_url }}
            />
            <Text style={styles.text}>{name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',

    },
    img: {
        width: 60,
        height: 60,
        borderRadius: 100
    },
    text: {
        fontSize: 16,
    }
})