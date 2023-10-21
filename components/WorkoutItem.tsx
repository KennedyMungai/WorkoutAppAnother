import { View, Text } from 'react-native'
import { WorkOut } from '../types/data'

type Props = {
	item: WorkOut
}

const WorkoutItem = ({ item }: Props) => {
	return (
		<View>
			<Text>Name: {item.name}</Text>
			<Text>Duration: {item.duration}</Text>
			<Text>Difficulty: {item.difficulty}</Text>
		</View>
	)
}

export default WorkoutItem
