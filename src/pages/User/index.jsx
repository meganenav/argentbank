import { useEffect, useState } from "react"
import Header from "../../components/User/Header"
import Accounts from "../../components/User/Accounts"
import { getUser } from "../../services/user.js"
import { useDispatch, useSelector } from "react-redux"
import { setFirstName, setLastName } from "../../redux/userSlice.js"

export default function User() {
  //Token state initialization
  const [token, setToken] = useState("")

  //Allows to use actions from the store
  const dispatch = useDispatch()
  
  //Stored name initialization if found in the store
  const storedFirstName = useSelector((state) => state.user.firstName)
  const storedLastName = useSelector((state) => state.user.lastName)

  useEffect(() => {
    //Token assignment value from the local storage
    setToken(localStorage.getItem("site"))
  }, [])

  useEffect(() => {
    const fetchUser = async () => {
      //If the name is found in the store
      if (storedFirstName && storedLastName) {
        return
      }
      
      //If the token is not found
      if (!token) return

      //If the name is not found in the store, call the API with token in parameter
      try {
        const response = await getUser(token)
        /*
          If we get a response, value assignment in the store with the actions setFirstName and setLastName.
          Values from the data adapter.
        */
        if (response) {
          dispatch(setFirstName(response.firstName))
          dispatch(setLastName(response.lastName))
        } else {
          console.error("Response is undefined or null")
        }
      } catch (error) {
        console.error("Error when the user retrieval:", error)
      }
    }

    fetchUser()
  }, [token, dispatch, storedFirstName, storedLastName])

  return (
    <main className="main bg-dark">
      <Header firstName={storedFirstName} lastName={storedLastName} />
      <Accounts />
    </main>
  )
}