import React from "react"
import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "../../services/auth"

//Authentication verification, if no token is found, redirect to the login page
export default function PrivateRoute() {
  const user = useAuth()
  if (!user.token) return <Navigate to="/login" />
  return <Outlet />
}