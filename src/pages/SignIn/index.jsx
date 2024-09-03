import { useEffect, useState } from "react"
import { useAuth } from "../../services/auth.jsx"

export default function SignIn() {
  //States initialization
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  //Call login function
  const { login } = useAuth()

  useEffect(() => {
    document.title = "Argent Bank - Sign in"
  }, [])

  //Submit login form
  const handleSubmit = async (e) => {
    e.preventDefault()
    //Try to login with username and password with API call
    const success = await login(username, password)
    if (success) {
      console.log("Login successful")
    }
  }

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button className="sign-in-button">Sign In</button>
        </form>
      </section>
    </main>
  )
}