import { useContext, createContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { postData } from "./login"

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [token, setToken] = useState(localStorage.getItem("site") || "")
  const navigate = useNavigate()

      const login = async (username, password) => {
        const response = await postData({ username, password })
        console.log(response)
        if (response.status === 200) {
          setUser(true)
          setToken(response.body.token)
          localStorage.setItem("site", response.body.token)
          console.log("test", localStorage)
          navigate("/profile")
          return true
        } else {
          console.log('Login failed')
          navigate("/login")
          return false
        }
      }
    
      return (
        <AuthContext.Provider value={{ token, user, login }}>
          {children}
        </AuthContext.Provider>
      )
    }
    
    export default AuthProvider
    
    export const useAuth = () => {
      return useContext(AuthContext)
    }

    export const logout = () => {
      localStorage.removeItem("site")
      localStorage.removeItem("authenticated")
    }
