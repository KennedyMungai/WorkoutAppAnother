import AsyncStorage from '@react-native-async-storage/async-storage'

type Props = {}

export const storeData = async (key: string, value: any) => {
	try {
		const stringValue = JSON.stringify(value)
		await AsyncStorage.setItem(key, stringValue)
	} catch (error: any) {
		console.error(error.message)
	}
}

export const getData = async () => {}
