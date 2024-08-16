export const handleUploadFiles = (
  event: React.ChangeEvent<any>,
  setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void
): void => {
  const { files } = event.target
  if (files && files.length > 0) {
    const fileArray = Array.from(files)
    setFieldValue("files", fileArray)
  }
}

export const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  const { files } = event.target
  if (files && files.length > 0) {
    // Xử lý file, ví dụ: đọc và cập nhật hình ảnh người dùng
    const file = files[0]
    // Ví dụ: đọc file và tạo URL để hiển thị ảnh
    const reader = new FileReader()
    reader.onloadend = () => {
      const imageUrl = reader.result as string
      // Cập nhật state hoặc làm gì đó với imageUrl
    }
    reader.readAsDataURL(file)
  }
}

export const handleUploadImage = (fileInputRef: React.RefObject<HTMLInputElement>) => {
  if (fileInputRef.current) {
    fileInputRef.current.click() // Kích hoạt click trên input file
  }
}
