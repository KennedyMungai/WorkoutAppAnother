import { NativeStackHeaderProps } from '@react-navigation/native-stack'
import { StyleSheet, Text, View } from 'react-native'

type DetailParams = {
	route: {
		params: {
			slug: string
		}
	}
}

type Navigation = NativeStackHeaderProps & DetailParams

const WorkoutDetailScreen = ({ route }: Navigation) => {
	return (
		<View style={styles.homeScreenView}>
			<Text style={styles.homeScreenText}>
				Slug - {route.params.slug}
			</Text>
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
	},
	homeScreenText: {
		color: 'white',
		fontSize: 20,
		fontWeight: 'bold'
	}
})
