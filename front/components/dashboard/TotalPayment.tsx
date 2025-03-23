import { Colors, ColorsBase } from '@/constants/Colors'
import React, { memo } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button, Card, Divider, ProgressBar } from 'react-native-paper'
import { useColorScheme } from '@/hooks/useColorScheme.web'
import { ThemedText } from '../ThemedText'
import { ThemedView } from '../ThemedView'
import {router} from 'expo-router';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

//Based on /components/TotalPayment by GioPati

interface PaymentProps {
	progress: number
}
const TotalPayment: React.FC<PaymentProps> = ({ progress}) => {
	const theme = useColorScheme() ?? 'light'
	return (
		<>
			<Card
				mode='contained'
				style={[
					styles.container,
					{
						backgroundColor:
							theme === 'light'
								? Colors.light.background
								: Colors.dark.background,
					},
				]}
			>
				<Card.Content style={{ gap: 8, flex:1 }}>
					<ThemedText
						type='subtitle'
						style={{ lineHeight:20, color: ColorsBase.cyan400 }}
					>
						Total Restante
					</ThemedText>
					<ThemedView style={styles.priceRestante}>
						<ThemedText
							type='title'
							style={{ fontSize: 40, lineHeight: 40 }}
						>
							$ {185.013}
						</ThemedText>
						<ThemedText style={{ fontSize: 20 }}> ARS</ThemedText>
					</ThemedView>
					<View style={{height:6}}>
						<ProgressBar
							style={{height:"100%", borderRadius:24, maxHeight:6}}
							fillStyle={{borderRadius:24,}}
							progress={progress}
							color={ColorsBase.neutral600}
						/>
						
					</View>
					<ThemedView
						style={{
							flexDirection: 'row',
							justifyContent: 'space-between',
							alignItems: 'flex-end'
						}}
					>
						<ThemedView style={{ flexDirection: 'row', gap: 5 }}>
							<ThemedText
								type='defaultSemiBold'
								style={{
									color: ColorsBase.neutral700,
								}}
							>
								{progress * 100}%
							</ThemedText>
							<ThemedText
								style={{ color: ColorsBase.neutral700 }}
							>
								Pagado
							</ThemedText>
						</ThemedView>
						<ThemedView
							style={{
								flexDirection: 'row',
								gap: 5,
								borderWidth: 1,
								borderRadius: 4,
								paddingHorizontal: 8,
								paddingVertical: 2,
								borderColor: ColorsBase.neutral500,
							}}
						>
							<ThemedText
								type='defaultSemiBold'
								style={{ color: ColorsBase.neutral700 }}
							>
								$ 205.587
							</ThemedText>
							<ThemedText
								type='default'
								style={{ color: ColorsBase.neutral700 }}
							>
								Pagado
							</ThemedText>
						</ThemedView>
					</ThemedView>
				</Card.Content>
			</Card>
			<Button
				mode='contained'
				buttonColor='#333333'
				style={{borderRadius : 32}}
				onPress={()=> router.push("/dashboard/home/services/list")}
			>
				<View style={styles.btnServiceContent}>
					<MaterialCommunityIcons name="plus" size={24} color="white" />
					<ThemedText type='default' style={{color : Colors.dark.text}}>
						Agregar Servicio
					</ThemedText>
				</View>
			</Button>
			<Divider
				style={{ backgroundColor: ColorsBase.cyan400, height: 1 }}
			/>
		</>
	)
}

const styles = StyleSheet.create({
	container: {
		marginVertical: 10,
		backgroundColor: Colors.light.background,
		borderWidth: 0.5,
		borderColor: ColorsBase.cyan500,
	},
	priceRestante: {
		flexDirection: 'row',
		alignItems: 'baseline',
		alignSelf: 'flex-start',
		paddingBottom: 16,
	},
	btnServiceContent : {
		flexDirection : 'row',
		justifyContent : 'center',
		alignItems : 'center',
		gap : 5
	}
})

export default memo(TotalPayment)
