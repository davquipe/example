import { useEffect, useState } from 'react'
import { fetchDataApi } from '../utils/api'

const useFetch = (url) => {
	const [data, setData] = useState(null)
	const [loading, setLoading] = useState(null)
	const [error, setError] = useState(null)

	useEffect(() => {
		setLoading('Cargando...')
		setData(null)
		setError(null)

		fetchDataApi(url)
			.then((res) => {
				setLoading(false)
				setData(res)
			})
			.catch((err) => {
				console.error(err)
				setLoading(false)
				setError('Something went wrong!')
			})
	}, [url])

	return { data, loading, error }
}

export default useFetch
