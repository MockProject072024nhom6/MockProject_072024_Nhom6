interface I_Props_CustomInput {
  label: string
  type: string
  name: string
  placeholder?: string
}

interface I_Props_CustomSelect {
  label: string
  name: string
  placeholder?: string
  children: React.ReactNode
}

interface I_Props_SubmitButton {
  label: string
  type: "button" | "submit" | "reset"
  isValid: boolean
}
