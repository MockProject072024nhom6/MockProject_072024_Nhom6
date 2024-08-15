// I_props: Kiểu dữ liệu dùng cho props.
interface I_Props_GuardLayoutContent {
  Layout: React.Element
  Header: React.Element
  Content: React.Element
}

interface I_Props_Tabs {
  profile?: string
  billingAddress?: string
  confirmation?: string
  initialValues?: I_Props_Profile
  values?: I_Props_Profile
}

interface I_Props_Profile {
  avatar?: string
  fullName?: string
  email?: string
  phone?: string
  device?: string
  organization?: string
  department?: string
  accountType?: string
  profileObject?: I_Props_Profile
  userImage?: string
}

interface I_Props_Forms {
  label?: string
  name?: string
  value?: string
  device?: string
  handleChange?: (event: React.ChangeEvent<any>) => void
}

interface I_Props_Select {
  name?: string
  value?: string
  option1?: string
  option2?: string
  handleChange?: (event: React.ChangeEvent<any>) => void
}

interface I_Props_AvatarForm {
  avatar?: string
  userImage?: string
}

// I_props: Kiểu dữ liệu dùng cho style.
interface I_Style_GuardStyle {
  container: string
}
