import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen'
import PlannerScreen from '../screens/PlannerScreen'

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
		<Stack.Navigator initialRouteName='Home'>
			<Stack.Screen name='Home' component={HomeScreen} />
			<Stack.Screen name='Planner' component={PlannerScreen} />
		</Stack.Navigator>
	)
}
