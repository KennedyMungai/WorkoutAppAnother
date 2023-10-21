import React from 'react'
import { Alert, Button, Text, View, StyleSheet } from 'react-native'

type Props = {}

const HomeScreen = (props: Props) => {
	return (
		<View style={styles.homeScreenView}>
			<Text>HomeScreen</Text>
			<Button
				title='Go to Planner'
				onPress={() => Alert.alert('Planner')}
			/>
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
