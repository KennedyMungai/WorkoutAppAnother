import React from 'react'
import { Button, Text, View, Alert, StyleSheet } from 'react-native'

type Props = {}

const PlannerScreen = (props: Props) => {
	return (
		<View style={styles.plannerScreenView}>
			<Text>PlannerScreen</Text>
			<Button
				title='Go to Home'
				onPress={() => Alert.alert('Go to Home')}
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
