import { NativeStackHeaderProps } from '@react-navigation/native-stack'
import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import WorkoutItem from '../components/WorkoutItem'
import data from '../data.json'
import { WorkOut } from '../types/data'

const HomeScreen = ({ navigation }: NativeStackHeaderProps) => {
	return (
		<View style={styles.homeScreenView}>
			<FlatList
				data={data as WorkOut[]}
				keyExtractor={(itemData) => itemData.slug}
				renderItem={WorkoutItem}
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
