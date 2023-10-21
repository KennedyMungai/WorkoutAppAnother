import { NativeStackHeaderProps } from '@react-navigation/native-stack'
import React from 'react'
import { Button, Text, View, StyleSheet } from 'react-native'

const HomeScreen = ({ navigation }: NativeStackHeaderProps) => {
	return (
		<View style={styles.homeScreenView}>
			<Text>HomeScreen</Text>
		</View>
	)
}

export default HomeScreen

const styles = StyleSheet.create({
	homeScreenView: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		gap: 10
	}
})
