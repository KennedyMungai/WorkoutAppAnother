import React from 'react'
import { Button, Text, View, Alert, StyleSheet } from 'react-native'

type Props = {
	navigation: any
}

const PlannerScreen = ({ navigation }: Props) => {
	return (
		<View style={styles.plannerScreenView}>
			<Text>PlannerScreen</Text>
			<Button
				title='Go to Home'
				onPress={() => navigation.navigate('Home')}
			/>
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
