import { NavLink } from "react-router-dom"
import { useAuth } from "../../services/auth"
import { useSelector } from "react-redux"
import logo from "../../img/argentBankLogo.png"

export default function Nav() {
	const firstName = useSelector((state) => state.user.firstName)
	const { logout } = useAuth()

	return (
		<nav className="main-nav">
			<a className="main-nav-logo" href="/">
			<img
				className="main-nav-logo-image"
				src={ logo }
				alt="Argent Bank Logo"
			/>
			<h1 className="sr-only">Argent Bank</h1>
			</a>
			<div>	
				<a className="main-nav-item" href="/login">
					<i className="fa fa-user-circle"></i>
					{ firstName ? firstName : "Sign In" }
				</a>
				{ firstName &&
					<NavLink to="/" className="main-nav-item" onClick={logout}>
						<i className="fa fa-sign-out"></i>
						Sign Out
					</NavLink>
				}
			</div>
		</nav>
	)
}