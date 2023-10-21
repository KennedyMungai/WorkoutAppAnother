import { NativeStackHeaderProps } from '@react-navigation/native-stack'
import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import data from '../data.json'
import { WorkOut } from '../types/data'
import WorkoutItem from '../components/WorkoutItem'

const HomeScreen = ({ navigation }: NativeStackHeaderProps) => {
	const renderStuff = ({ item }: { item: WorkOut }) => (
		<WorkoutItem item={item} />
	)

	return (
		<View style={styles.homeScreenView}>
			<FlatList
				data={data as WorkOut[]}
				keyExtractor={(itemData) => itemData.slug}
				renderItem={renderStuff}
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
