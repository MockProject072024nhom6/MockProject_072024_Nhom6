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
  organization?: string
  department?: string
  accountType?: string
}

interface I_Props_Forms {
  label?: string
  name?: string
  value?: string
  onChange?: (event: React.ChangeEvent<any>) => void
}

// I_props: Kiểu dữ liệu dùng cho style.
interface I_Style_GuardStyle {
  container: string
}
