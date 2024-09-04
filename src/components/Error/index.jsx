import { NavLink } from 'react-router-dom'

//Component error to display a 404 page with link to the homepage
function Error() {
    return (
        <main>
            <h1>404</h1>
            <p>Page not found.</p>
            <NavLink to="/">Go to the homepage</NavLink>
        </main>
    )
}
 
export default Error