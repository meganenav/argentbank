import { createSlice } from "@reduxjs/toolkit"

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