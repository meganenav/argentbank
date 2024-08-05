import { useEffect } from 'react'
import Header from '../../components/User/Header'
import Accounts from '../../components/User/Accounts'

export default function User() {
	useEffect(() => 
        { document.title="Argent Bank - Compte utilisateur" }
    )

	return (
		<main className="main bg-dark">
			<Header />
			<Accounts />
		</main>
	)
}