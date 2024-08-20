import { createSlice } from "@reduxjs/toolkit"
import userImage from "../../Assets/user-image.png"

const storedAvatar = localStorage.getItem("UPLOAD_AVATAR")
const initialState = {
  avatarImage: storedAvatar ? JSON.parse(storedAvatar) : userImage
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
