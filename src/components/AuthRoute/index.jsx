import React from "react"
import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "../../services/auth"

export default function AuthRoute() {
  const user = useAuth()
  if (user.token) return <Navigate to="/profile" />
  return <Outlet />
}
