import React from 'react'
import { Alert, Button, Text, View } from 'react-native'

type Props = {}

const HomeScreen = (props: Props) => {
	return (
		<View>
			<Text>HomeScreen</Text>
			<Button
				title='Go to Planner'
				onPress={() => Alert.alert('Planner')}
			/>
		</View>
	)
}

export default HomeScreen
