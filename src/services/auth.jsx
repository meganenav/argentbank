import { useContext, createContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { postData } from "./login"
import { useDispatch } from "react-redux"
import { resetStore } from "../redux/userSlice"

//Authentication context implementation
const AuthContext = createContext()

//Authentication provider in order to handle authentication everywhere in the application
export default function AuthProvider({ children }) {
  //User state initialization, if connected or not
  const [user, setUser] = useState(null)
  //If token found in the local storage, assignment to the token variable, otherwise, leave empty token variable
  const [token, setToken] = useState(localStorage.getItem("site") || "")

  //Allows to navigate 
  const navigate = useNavigate()

  //Allows to use actions from the store
  const dispatch = useDispatch()

  //Try to connect to the API with username and password in order to login
  const login = async (username, password) => {
    try {
      const response = await postData({ username, password })

      /*
        If successful response, set user variable to true which means connected.
        Set token variable to API token response and store it in the local storage.
      */
      if (response.status === 200) {
        setUser(true)
        setToken(response.body.token)
        localStorage.setItem("site", response.body.token)

        //Redirect to the profile page
        navigate("/profile")
        return true
      } 
      //If not successful response, redirect to login page
      else {
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

  /*
  Log out function, removing token and authentication from the local storage.
  Call the action resetStore from the store, remove token from the token variable, set user variable to null.
  Redirect to login page.
  */
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