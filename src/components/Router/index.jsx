import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "../../sass/main.scss"
import Nav from "../../components/Nav"
import SignIn from "../../pages/SignIn/"
import Home from "../../pages/Home/"
import User from "../../pages/User/"
import Error from "../Error"
import PrivateRoute from "../PrivateRoute"
import AuthRoute from "../AuthRoute"
import AuthProvider from "../../services/auth"

//Creation of the router with authentication and private routes
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
          <Route path="*" element={<Error />} />
        </Routes>
      </AuthProvider>
    </Router>
  )
}