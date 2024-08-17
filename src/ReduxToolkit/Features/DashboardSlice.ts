import { createSlice } from "@reduxjs/toolkit"
import userImage from "../../Assets/user-image.png"

const initialState = {
  avatarImage: userImage,
  uploadAvatar: ""
}

const dashboardSlice = createSlice({
  name: "dashboardSlice",
  initialState,
  reducers: {
    setAvatarImage: (state, action) => {
      state.avatarImage = action.payload
    },
    setUploadAvatar: (state, action) => {
      state.uploadAvatar = action.payload
    }
  }
})

export const { setAvatarImage, setUploadAvatar } = dashboardSlice.actions
export default dashboardSlice.reducer
