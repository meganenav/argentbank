import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "../../sass/main.scss"
import Nav from "../../components/Nav"
import SignIn from "../../pages/SignIn/"
import Home from "../../pages/Home/"
import User from "../../pages/User/"
import PrivateRoute from "../PrivateRoute"
import AuthRoute from "../AuthRoute"
import AuthProvider from "../../services/auth"

//Création du routeur pour la page d'accueil permettant de personnaliser l'URL avec un id passé en paramètre
export default function Routing() {
  return (
    <Router>
      <AuthProvider>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<AuthRoute />}>
            <Route path="/login" element={<SignIn />} />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path="/profile" element={<User />} />
          </Route>
          <Route path="*" element={<Home />} />
        </Routes>
      </AuthProvider>
    </Router>
  )
}