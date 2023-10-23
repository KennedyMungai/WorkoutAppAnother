import { useEffect, useState } from 'react'

const useCachedResources = () => {
	const [isLoadingComplete, setIsLoadingComplete] = useState(false)

	useEffect(() => {
		const loadResourcesAndDataAsync = async () => {
			setTimeout(() => {
				setIsLoadingComplete(true)
			}, 3000)
		}

		loadResourcesAndDataAsync()
	}, [isLoadingComplete])
}

export default useCachedResources
