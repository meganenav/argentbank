import { useEffect, useState } from "react"
import Header from "../../components/User/Header"
import Accounts from "../../components/User/Accounts"
import { getUser } from "../../services/user.js"

export default function User() {
  const [token, setToken] = useState('')
  const [name, setName] = useState('')

  useEffect(() => {
    document.title = "Argent Bank - Compte utilisateur"

    setToken(localStorage.site)

    const fetchUser = async () => {
      if (!token) return

      try {
        const response = await getUser(token)

        if (response && response.body) {
          setName(response.body.firstName + ' ' + response.body.lastName)
        } else {
          console.error('Le corps de la réponse est undefined ou null')
        }
      } catch (error) {
        console.error('Erreur lors de la récupération de l\'utilisateur:', error)
      }
    }

    fetchUser()
  }, [token])

  return (
    <main className="main bg-dark">
      <Header name={name} />
      <Accounts />
    </main>
  )
}