import React from 'react'
import { Alert, Button, Text, View, StyleSheet } from 'react-native'

type Props = {
	navigation: any
}

const HomeScreen = ({ navigation }: Props) => {
	return (
		<View style={styles.homeScreenView}>
			<Text>HomeScreen</Text>
			<Button
				title='Go to Planner'
				onPress={() => navigation.navigate('Planner')}
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
