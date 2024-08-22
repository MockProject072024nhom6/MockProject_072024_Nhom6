import { setAvatarImage } from "../ReduxToolkit/Features/DashboardSlice"
import { I_BillingAddress, I_Props_Profile, setFieldValue } from "../Types/GuardTypes"

export const handleUploadFiles = (
  e: React.ChangeEvent<any>,
  setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void
): void => {
  const { files } = e.target
  if (files && files.length > 0) {
    const fileArray = Array.from(files)
    setFieldValue("files", fileArray)
  }
}

export const handleImageUpload = (
  e: React.ChangeEvent<HTMLInputElement>,
  setFieldValue: setFieldValue,
  dispatch: any
) => {
  const file = e.target.files?.[0]
  const reader = new FileReader()
  if (file) {
    reader.readAsDataURL(file)
    reader.onload = e => {
      const imgUrl = e.target?.result
      dispatch(setAvatarImage(imgUrl))
      setFieldValue("avatar", file)
      localStorage.setItem("UPLOAD_AVATAR", JSON.stringify(imgUrl))
    }
  }
}

export const handleFormData = (avatar: string) => {
  const formData = new FormData()
  formData.append("avatar", avatar)
}

export const handleFileExplorerOpen = () => {
  document.getElementById("fileInput")?.click()
}

export const handleSaveInfo = (profileData: I_Props_Profile, billingAddressData: I_BillingAddress) => {
  localStorage.setItem("SAVE_PROFILE_INFO", JSON.stringify(profileData))
  localStorage.setItem("SAVE_BILLING_INFO", JSON.stringify(billingAddressData))
  console.log("🚀 ~ handleSaveInfo ~ profileData:", profileData)
}
