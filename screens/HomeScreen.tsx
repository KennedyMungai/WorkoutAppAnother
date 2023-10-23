import { NativeStackHeaderProps } from '@react-navigation/native-stack'
import React, { useEffect } from 'react'
import { Alert, FlatList, Pressable, StyleSheet, View } from 'react-native'
import WorkoutItem from '../components/WorkoutItem'
import data from '../data.json'
import { WorkOut } from '../types/data'
import { storeData } from '../storage'

const HomeScreen = ({ navigation }: NativeStackHeaderProps) => {
	useEffect(() => {
		const dataStorage = async () => {
			await storeData('workout-data', data)
		}

		dataStorage()
	}, [])

	return (
		<View style={styles.homeScreenView}>
			<FlatList
				data={data as WorkOut[]}
				keyExtractor={(itemData) => itemData.slug}
				renderItem={({ item }) => {
					return (
						<Pressable
							onPress={() =>
								navigation.navigate('WorkoutDetail', {
									slug: item.slug
								})
							}
						>
							<WorkoutItem item={item} />
						</Pressable>
					)
				}}
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
		padding: 20,
		backgroundColor: '#5B6057'
	}
})
