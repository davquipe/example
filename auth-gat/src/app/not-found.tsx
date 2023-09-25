import Link from 'next/link'
import styles from './page.module.css'

export default function NotFound() {
	return (
		<main className={styles.main}>
			<div className={styles.grid}>
				<h2>Pagina no encontrada</h2>
				<Link href="/">Return Home</Link>
			</div>
		</main>
	)
}
