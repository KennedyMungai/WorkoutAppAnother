import { NativeStackHeaderProps } from '@react-navigation/native-stack'
import React from 'react'
import { Alert, FlatList, Pressable, StyleSheet, View } from 'react-native'
import WorkoutItem from '../components/WorkoutItem'
import data from '../data.json'
import { WorkOut } from '../types/data'

const WorkoutDetailScreen = ({ navigation }: NativeStackHeaderProps) => {
	return (
		<View style={styles.homeScreenView}>
			<FlatList
				data={data as WorkOut[]}
				keyExtractor={(itemData) => itemData.slug}
				renderItem={({ item }) => {
					return (
						<Pressable
							onPress={() =>
								Alert.alert(`I am pressed - ${item.name}`)
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

export default WorkoutDetailScreen

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
