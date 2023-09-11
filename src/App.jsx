/* eslint-disable no-undef */
import { useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch } from 'react-redux'
import { fetchDataApi } from './utils/api'
import { closeSession, getApiConfiguration } from './store/slice/homeSlice'
import useFetch from './hooks/useFetch'

function App() {
	const dispatch = useDispatch()

	const { data, loading } = useFetch('/movie/popular')

	useEffect(() => {
		const fetchApiConfig = () => {
			fetchDataApi('/configuration').then((res) => {
				const url = {
					backdrop: res.images.secure_base_url + 'original',
					poster: res.images.secure_base_url + 'w500',
					profile: res.images.secure_base_url + 'w185',
				}
				dispatch(getApiConfiguration(url))
			})
		}
		fetchApiConfig()
	}, [dispatch])

	const closeSessionUser = () => {
		dispatch(closeSession())
		localStorage.removeItem('token')
	}

	return (
		<>
			<div>
				<a href="https://vitejs.dev" target="_blank" rel="noreferrer">
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
				<a href="https://react.dev" target="_blank" rel="noreferrer">
					<img
						src={reactLogo}
						className="logo react"
						alt="React logo"
					/>
				</a>
			</div>
			<div className="card">
				{data && (
					<button onClick={() => closeSessionUser()}>
						Cerrar session
					</button>
				)}
				<p>Ejemplo</p>
			</div>
			<div className="content-images">
				{data?.results.map((item) => (
					<div key={item.id}>
						<img
							src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
							alt={item.title}
							height="200"
						/>
						<p>{item.title}</p>
					</div>
				))}

				{!loading && !data && <p>No hay datos para mostrar</p>}

				{loading && <p>{loading}</p>}
			</div>
		</>
	)
}

export default App
