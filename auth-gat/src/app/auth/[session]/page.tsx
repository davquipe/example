'use client'
import { useAuthContext } from '@/contexts/authContext'
import { useRouter, useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import styles from '../../page.module.css'

export default function Page() {
	const [message, setMessage] = useState('')
	const searchParams = useSearchParams()
	const router = useRouter()
	const { login } = useAuthContext()

	const token = searchParams.get('token')

	useEffect(() => {
		const response = fetch(
			'https://gestion.apuestatotal.dev/oauth/api/validarCodigoAccesoCajero',
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${token}`,
				},
				body: JSON.stringify({
					codigo_acceso:
						'XHLzMqPbQUv2YbnELbJ4I1q6bcExHLx3GZOVySqKyHqOFLrgtrR0fysm0NuT',
					id_cajero: 7214,
				}),
			},
		)
			.then((response) => response.json())
			.then(
				(data) => {
					if (data?.result?.token_sesion) {
						login(data?.result?.token_sesion)
						router.push('/user')
					} else {
						setMessage(data?.status)
					}
				},
				(error) => {
					console.log(error)
				},
			)
			.catch((error) => {
				console.log(error)
			})
	}, [login, router, token])

	return (
		<main className={styles.main}>
			<div className={styles.grid}>
				<h4>Autentificacion...</h4>
				{message && <p>{message}</p>}
			</div>
		</main>
	)
}
