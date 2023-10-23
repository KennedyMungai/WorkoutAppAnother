import { NativeStackHeaderProps } from '@react-navigation/native-stack'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const WorkoutDetailScreen = ({ navigation, route }: NativeStackHeaderProps) => {
	return (
		<View style={styles.homeScreenView}>
			<Text>Workout Detail</Text>
		</View>
	)
}

export default WorkoutDetailScreen

const styles = StyleSheet.create({
	homeScreenView: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		gap: 10,
		padding: 20,
		backgroundColor: '#5B6057'
	}
})
