import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import '../../sass/main.scss'
import Nav from '../../components/Nav'
import SignIn from '../../pages/SignIn/'
import Home from '../../pages/Home/'
import User from '../../pages/User/'

//Création du routeur pour la page d'accueil permettant de personnaliser l'URL avec un id passé en paramètre
export default function Routing() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<User />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  )
}