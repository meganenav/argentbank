import React from "react"
import ReactDOM from "react-dom/client"
import Router from "./components/Router"
import Footer from "./components/Footer"
import { Provider } from "react-redux"
import createStore from "./app/store"
import { PersistGate } from "redux-persist/integration/react"

//Provider for the store and data persistence implementation
const root = ReactDOM.createRoot(document.getElementById('root'))
const { store, persistor } = createStore()
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router />
      <Footer />
    </PersistGate>
  </Provider>
)