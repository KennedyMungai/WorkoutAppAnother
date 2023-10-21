import { NativeStackHeaderProps } from '@react-navigation/native-stack'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import data from '../data.json'

const HomeScreen = ({ navigation }: NativeStackHeaderProps) => {
	return (
		<View style={styles.homeScreenView}>
			<Text>HomeScreen</Text>
			<Text>{JSON.stringify(data)}</Text>
		</View>
	)
}

export default HomeScreen

const styles = StyleSheet.create({
	homeScreenView: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		gap: 10,
		padding: 20
	}
})
