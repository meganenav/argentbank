import { NavLink } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import logo from '../../img/argentBankLogo.png'

export default function Nav() {
	let location = useLocation()
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
				<a className="main-nav-item" href="/sign-in">
					<i className="fa fa-user-circle"></i>
					Sign In
				</a>
				{ location.pathname === "/user" &&
					<NavLink to="/" className="main-nav-item">
						<i className="fa fa-sign-out"></i>
						Sign Out
					</NavLink>
				}
			</div>
		</nav>
	)
}