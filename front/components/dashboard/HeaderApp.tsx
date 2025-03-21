import { Colors, ColorsBase } from '@/constants/Colors'
import React, { memo } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Avatar, Card } from 'react-native-paper'
import { useColorScheme } from '@/hooks/useColorScheme.web'
import IconNotifications from '@/assets/svgs/icon-notifications'
import { useRouter } from 'expo-router'
import { ThemedText } from '../ThemedText'
import { useAuthStore } from '@/hooks/useAuthStore'

// based on /components/HeaderApp by GioPati

const HeaderApp = () => {
	const router = useRouter()
	const theme = useColorScheme() ?? 'light';
	const { user } = useAuthStore();
	
	return (
		<Card.Title
			title={<ThemedText style={{fontSize:16, lineHeight:30 }} type='subtitle'>{`${user.userName} ${user.userLastName}`}</ThemedText>}
			subtitle={
				<TouchableOpacity
					onPress={() =>
						router.push('/dashboard/user')
					}
				>
					<Text style={{ fontSize:12, lineHeight:14,color: ColorsBase.cyan600 }}>
						Ver perfil
					</Text>
				</TouchableOpacity>
			}
			style={[
				style.header_Container,
				{
					backgroundColor:
						theme === 'light' ? '#e4f5f4' : Colors.dark.background,
				},
			]}
			left={(props) => (
				<Avatar.Image
					{...props}
					size={32}
					source={require('../../assets/images/IconPayFy.png')}
				/>
			)}
			right={(props) => (
				<TouchableOpacity
					onPress={() =>
						router.navigate(
							'/dashboard/home/notifications'
						)
					}
				>
					<IconNotifications size={20} color={ColorsBase.cyan600} />

					<View style={style.badge} />
				</TouchableOpacity>
			)}
		/>
	)
}

const style = StyleSheet.create({
	header_Container: {
		borderRadius: 32,
		paddingHorizontal: 16,
		borderWidth: 0.5,
		borderColor: ColorsBase.cyan400,
		maxHeight:56,
		minHeight:56,
	},
	badge: {
		position: 'absolute',
		top: -4,
		right: 2,
		backgroundColor: 'red',
		width: 10,
		height: 10,
		borderRadius: 5,
	},
})

export default memo(HeaderApp)
