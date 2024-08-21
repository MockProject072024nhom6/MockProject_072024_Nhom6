import { setAvatarImage } from "../ReduxToolkit/Features/DashboardSlice"
import { setFieldValue } from "../Types/GuardTypes"

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

export const handleFormData = (avatar: string, dispatch: any) => {
  const formData = new FormData()
  formData.append("avatar", avatar)
}

export const handleFileExplorerOpen = () => {
  document.getElementById("fileInput")?.click()
}
