import React, { memo } from 'react'
import { Colors, ColorsBase } from '@/constants/Colors'
import { Text, View } from 'react-native'
import { Button, Card, Icon } from 'react-native-paper'
import Animated, { FadeInUp, FadeOutUp } from 'react-native-reanimated'

import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import { ThemedView } from '../ThemedView'
import { ThemedText } from '../ThemedText'
import IconStatus from '../IconStatus'
import {ServiceCard} from './ServiceCard';
//  const data = [
// 	{
// 		type: 'Electricidad',
// 		Empresa: 'EDENOR',
// 		Client: '88698235',
// 		status: 'Atrasado',
// 		fechVen: '01/01/2025',
// 		totalPagar: '75.900',
// 	},
// 	{
// 		type: 'Agua',
// 		Empresa: 'EDENOR',
// 		Client: '88698235',
// 		status: 'Pendiente',
// 		fechVen: '01/01/2025',
// 		totalPagar: '75.900',
// 	},
// 	{
// 		type: 'Gas',
// 		Empresa: 'MetroGas',
// 		Client: '88698235',
// 		status: 'Pagado',
// 		fechVen: '01/01/2025',
// 		totalPagar: '75.900',
// 	},
// 	{
// 		type: 'Internet',
// 		Empresa: 'Movistar',
// 		Client: '88698235',
// 		status: 'Pagado',
// 		fechVen: '01/01/2025',
// 		totalPagar: '75.900',
// 	},
// ]
const servicesUser = [
	{
		serviceId : '0001',
		name : 'Movistar',
		picture_url : ''
	},
	{
		serviceId : '0002',
		name : 'MetroGas',
		picture_url : ''
	},
	{
		serviceId : '0003',
		name : 'Edenor',
		picture_url : ''
	},
	{
		serviceId : '0004',
		name : 'Swiss Medical',
		picture_url : ''
	}
]

const ServicesClient = ({servicesList}:{servicesList?:any[]}) => {
	return (
		<Animated.FlatList
			style={{flexDirection: 'row' , gap: 20}}
			data={servicesList?.length !== 0 ? servicesList : servicesUser}
			ListEmptyComponent={() => (
				<ThemedView
					style={{
						backgroundColor: 'transparent',
						alignItems: 'center',
						gap: 10,
					}}
				>
					<Icon
						source={'check-decagram-outline'}
						size={40}
						color={'#75C975'}
					/>
					<ThemedText
						type='title'
						style={{ color: ColorsBase.cyan400 }}
					>
						¡Oops, no hay servicios!
					</ThemedText>
					<ThemedText
						type='default'
						style={{ color: ColorsBase.cyan400 }}
					>
						Necesita agregar servicios para verlos aca.
					</ThemedText>
				</ThemedView>
			)}
			scrollEnabled
			keyboardShouldPersistTaps='handled'
			keyExtractor={(item) => item.serviceId}
			renderItem={({ item }) => (
				<ServiceCard name = {item.name} picture_url= {item.picture_url}/>
			)}
		/>
	)
}

export default memo(ServicesClient)
