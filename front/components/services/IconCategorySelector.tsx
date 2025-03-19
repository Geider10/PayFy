import IconElectricitySimple from "@/assets/svgs/icon-electricity-simple";
import IconFlameSimple from "@/assets/svgs/icon-flame-simple";
import IconWaterSimple from "@/assets/svgs/icon-water-simple";
import { MaterialIcons } from "@expo/vector-icons";
import { ColorsBase, Colors } from "@/constants/Colors";

function IconCategorySelector({catName}:{catName:string}) {
    if(catName === "Telefonía e Internet") return (<MaterialIcons name="phone" size={24} color={ColorsBase.cyan200}/>)
    if(catName === "Luz") return <IconElectricitySimple size={24} color={ColorsBase.cyan200}/>
    if(catName === "Gas") return <IconFlameSimple size={24} color={ColorsBase.cyan200}/>
    if(catName === "Agua") return <IconWaterSimple size={24} color={ColorsBase.cyan200}/>
    if(catName === "Medicina Prepaga") return <MaterialIcons name="medical-information" size={24} color={ColorsBase.cyan200}/>

}
export default IconCategorySelector