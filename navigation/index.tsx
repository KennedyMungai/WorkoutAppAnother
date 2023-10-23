import { FontAwesome5 } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen'
import PlannerScreen from '../screens/PlannerScreen'
import WorkoutDetailScreen from '../screens/WorkoutDetailScreen'

type Props = {}

const Navigation = (props: Props) => {
	return (
		<NavigationContainer>
			<RootNavigator />
		</NavigationContainer>
	)
}

export default Navigation

const Stack = createNativeStackNavigator()

const RootNavigator = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name='Root'
				component={BottomTabNavigator}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name='WorkoutDetails'
				component={WorkoutDetailScreen}
				options={{ headerShown: false, animation: 'slide_from_bottom' }}
			/>
		</Stack.Navigator>
	)
}

const BottomTab = createBottomTabNavigator()

const BottomTabNavigator = () => {
	return (
		<BottomTab.Navigator initialRouteName='Home'>
			<BottomTab.Screen
				name='Home'
				component={HomeScreen}
				options={{
					unmountOnBlur: true,
					tabBarIcon: () => (
						<FontAwesome5 name='home' size={24} color='black' />
					)
				}}
			/>
			<BottomTab.Screen
				name='Planner'
				component={PlannerScreen}
				options={{
					unmountOnBlur: true,
					tabBarIcon: () => (
						<FontAwesome5
							name='calendar-alt'
							size={24}
							color='black'
						/>
					)
				}}
			/>
		</BottomTab.Navigator>
	)
}
