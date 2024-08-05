import { useEffect } from 'react'
import Form from '../../components/SignIn/Form'

export default function SignIn() {
	useEffect(() => 
        { document.title="Argent Bank - Sign in" }
    )

	return (
		<main className="main bg-dark">
			<section className="sign-in-content">
			<i className="fa fa-user-circle sign-in-icon"></i>
			<h1>Sign In</h1>
				<Form />
			</section>
		</main>
	)
}