import {View} from 'react-native';
import {Link, RelativePathString} from 'expo-router';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { ThemedText } from "@/components/ThemedText";
import { ColorsBase, Colors } from "@/constants/Colors";


type HeaderProp = {
    url : RelativePathString,
    title : string
  }

export  const HeaderToBack  = ({url, title} : HeaderProp) => {
    return(
      <View style= {{ justifyContent : 'flex-start', gap : 5, marginBottom : 15}}>
          <Link href={url} asChild>
            <MaterialCommunityIcons name="arrow-left" size={28} color={ColorsBase.neutral600} /> 
          </Link>
          <ThemedText type="subtitle" style={{color : ColorsBase.cyan400}}>
            {title}
          </ThemedText>
        </View>
      
    )
  }