import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen'
import PlannerScreen from '../screens/PlannerScreen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

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
				// options={{ unmountOnBlur: true }}
			/>
			<BottomTab.Screen
				name='Planner'
				component={PlannerScreen}
				// options={{ unmountOnBlur: true }}
			/>
		</BottomTab.Navigator>
	)
}
