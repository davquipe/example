'use client'

import { useAuthContext } from '@/contexts/authContext'
import { useRouter } from 'next/navigation'
import styles from '../page.module.css'
import Cookies from 'js-cookie'

function Page() {
	const { logout } = useAuthContext()
	const router = useRouter()

	const user = Cookies.get('authTokens')
	console.log(user ? JSON.parse(user) : null)

	const handleLogout = () => {
		logout()
		router.push('/auth/session?token=')
	}

	return (
		<main className={styles.main}>
			<div className={styles.grid}>
				<h1>Session iniciada</h1>
				<p>😎</p>
				<button className={styles.btn} onClick={handleLogout}>
					Cerrar session
				</button>
			</div>
		</main>
	)
}

export default Page
