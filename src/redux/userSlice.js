import { createSlice } from "@reduxjs/toolkit"

/*
  Implementation of the initial state and reducers.
  Reducers can handle first name and last name states and allows to reset store.
*/
const userSlice = createSlice({
  name: "user",
  initialState: {
    firstName: "",
    lastName: "",
  },
  reducers: {
    setFirstName: (state, action) => {
      state.firstName = action.payload
    },
    setLastName: (state, action) => {
      state.lastName = action.payload
    },
    resetStore: (state) => {
      state.firstName = ""
      state.lastName = ""
    },
  },
})

export const { setFirstName, setLastName, resetStore } = userSlice.actions
export default userSlice.reducer