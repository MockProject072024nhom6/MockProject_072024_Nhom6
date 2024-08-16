import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  avatarImage: "123"
}

const dashboardSlice = createSlice({
  name: "dashboardSlice",
  initialState,
  reducers: {
    setAvatarImage: (state, action) => {
      state.avatarImage = action.payload
    }
  }
})

export const { setAvatarImage } = dashboardSlice.actions
export default dashboardSlice.reducer
