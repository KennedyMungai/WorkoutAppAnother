import { NativeStackHeaderProps } from '@react-navigation/native-stack'
import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import data from '../data.json'

const HomeScreen = ({ navigation }: NativeStackHeaderProps) => {
	return (
		<View style={styles.homeScreenView}>
			<FlatList
				data={data}
				keyExtractor={(itemData) => itemData.slug}
				renderItem={({ item }) => (
					<View>
						<Text>{item.name}</Text>
					</View>
				)}
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
		gap: 10,
		padding: 20
	}
})
