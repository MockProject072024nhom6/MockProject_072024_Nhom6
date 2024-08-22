import { createSlice } from "@reduxjs/toolkit"
import userImage from "../../Assets/user-image.png"
import { billingAddressObjects, profileObject } from "../../Objects/Objects"

const storedAvatar = localStorage.getItem("UPLOAD_AVATAR")
const savedProfileInfo = localStorage.getItem("SAVE_PROFILE_INFO")
const initialState = {
  avatarImage: storedAvatar ? JSON.parse(storedAvatar) : userImage,
  profileData: savedProfileInfo ? JSON.parse(savedProfileInfo) : profileObject,
  billingAddressData: billingAddressObjects
}

const dashboardSlice = createSlice({
  name: "dashboardSlice",
  initialState,
  reducers: {
    setAvatarImage: (state, action) => {
      state.avatarImage = action.payload
    },
    setProfileData: (state, action) => {
      state.profileData = action.payload
    },
    setBillingAddressData: (state, action) => {
      state.billingAddressData = action.payload
    }
  }
})

export const { setAvatarImage, setProfileData, setBillingAddressData } = dashboardSlice.actions
export default dashboardSlice.reducer
