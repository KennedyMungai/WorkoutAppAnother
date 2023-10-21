import { NativeStackHeaderProps } from '@react-navigation/native-stack'
import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const PlannerScreen = ({ navigation }: NativeStackHeaderProps) => {
	return (
		<View style={styles.plannerScreenView}>
			<Text>PlannerScreen</Text>
		</View>
	)
}

export default PlannerScreen

const styles = StyleSheet.create({
	plannerScreenView: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		gap: 10
	}
})
