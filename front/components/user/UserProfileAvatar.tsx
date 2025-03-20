import { ColorsBase } from "@/constants/Colors";
import { StyleSheet, View, Image } from "react-native";

export default function UserProfileAvatar() {
  return (
    <View style={baseStyle.avatarContainer}>
      <View style={[baseStyle.photoContainer]}>
          <Image style={baseStyle.img} source={require('../../assets/images/IconPayFy.png')}></Image>
      </View>
    
    </View>
  );
}

const baseStyle = StyleSheet.create({
  avatarContainer: {
    alignItems: "center",
  },
  photoContainer: {
    borderColor: ColorsBase.cyan200,
    borderWidth: 5,
    width: 81,
    height: 81,
    borderRadius: "100%",
    alignItems: "center",
    justifyContent:"center"
  },
  img : {
    width : 70,
    height : 70
  }
});
