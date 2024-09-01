import { useContext, createContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { postData } from "./login"
import { useDispatch } from "react-redux"
import { resetStore } from "../redux/userSlice"

const AuthContext = createContext()

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [token, setToken] = useState(localStorage.getItem("site") || "")
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const login = async (username, password) => {
    try {
      const response = await postData({ username, password })

      if (response.status === 200) {
        setUser(true)
        setToken(response.body.token)
        localStorage.setItem("site", response.body.token)

        navigate("/profile")
        return true
      } else {
        console.log("Login failed")
        navigate("/login")
        return false
      }
    } catch (error) {
      console.error("An error occurred during login:", error)
      navigate("/login")
      return false
    }
  }

  const logout = () => {
    localStorage.removeItem("site")
    localStorage.removeItem("authenticated")
    dispatch(resetStore())
    setUser(null)
    setToken("")
    navigate("/login")
  }

  return (
    <AuthContext.Provider value={{ token, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)