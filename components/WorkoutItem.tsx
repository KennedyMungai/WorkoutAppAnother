import { View, Text } from 'react-native'
import { WorkOut } from '../types/data'

type Props = {
	item: WorkOut
}

const WorkoutItem = ({ item }: Props) => {
	return (
		<View>
			<Text>
				<Text>{item.name}</Text> - <Text>{item.difficulty}</Text>
			</Text>
		</View>
	)
}

export default WorkoutItem
