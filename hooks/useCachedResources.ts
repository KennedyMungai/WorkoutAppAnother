import { useEffect, useState } from 'react'
import * as Font from 'expo-font'

const useCachedResources = () => {
    const [isLoadingComplete, setIsLoadingComplete] = useState(false)

    useEffect(() => {
        const loadResourcesAndDataAsync = async () => {
            try {
                await Font.loadAsync({
                    'montserrat': require('../assets/fonts/Montserrat-Regular'),
                    'montserrat-bold': require('../assets/fonts/Montserrat-Bold')
                })
            } catch (error) {
                console.warn(error)
            } finally {
                setIsLoadingComplete(true)
            }
        }

        loadResourcesAndDataAsync()
    }, [])

    return isLoadingComplete
}

export default useCachedResources
