import styles from './page.module.css'

export default function Home() {
	console.log('MAIN', process.env.API_BASE_URL)

	return (
		<main className={styles.main}>
			<div className={styles.grid}>
				<p>No session</p>
			</div>
		</main>
	)
}
