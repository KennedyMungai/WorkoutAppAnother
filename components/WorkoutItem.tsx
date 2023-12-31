import { StyleSheet, Text, View } from 'react-native'
import { WorkOut } from '../types/data'
import { formatSec } from '../utils/time'

type Props = {
	item: WorkOut
}

const WorkoutItem = ({ item }: Props) => {
	return (
		<View style={styles.workoutItemView}>
			<Text style={{ color: 'white', fontWeight: 'bold' }}>
				Name: {item.name}
			</Text>
			<Text style={{ color: 'white' }}>
				Duration: {formatSec(item.duration)}
			</Text>
			<Text style={{ color: 'white' }}>
				Difficulty: {item.difficulty}
			</Text>
		</View>
	)
}

export default WorkoutItem

const styles = StyleSheet.create({
	workoutItemView: {
		padding: 10,
		marginVertical: 10,
		borderRadius: 5,
		backgroundColor: '#6E9075',
		borderColor: '#563635',
		borderWidth: 1
	}
})
