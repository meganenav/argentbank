import { useEffect, useState } from "react"
import Header from "../../components/User/Header"
import Accounts from "../../components/User/Accounts"
import { getUser } from "../../services/user.js"
import { useDispatch, useSelector } from "react-redux"
import { setFirstName, setLastName } from "../../redux/userSlice.js"

export default function User() {
  const [token, setToken] = useState('')

  const dispatch = useDispatch()

  const storedFirstName = useSelector((state) => state.user.firstName)
  const storedLastName = useSelector((state) => state.user.lastName)

  useEffect(() => {
    document.title = "Argent Bank - Compte utilisateur"
    setToken(localStorage.site)

    const fetchUser = async () => {
      if (storedFirstName && storedLastName) {
        return
      }
      
      if (!token) return

      try {
        const response = await getUser(token)
        if (response && response.body) {
          dispatch(setFirstName(response.body.firstName))
          dispatch(setLastName(response.body.lastName))
        } else {
          console.error('Le corps de la réponse est undefined ou null')
        }
      } catch (error) {
        console.error('Erreur lors de la récupération de l\'utilisateur:', error)
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