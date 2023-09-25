'use client'

import { ReactNode } from 'react'

function Layout({ children }: { children: ReactNode }) {
	return (
		<div>
			User Layout
			{children}
		</div>
	)
}

export default Layout
