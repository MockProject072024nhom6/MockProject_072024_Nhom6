// I_props: data type using for props.

// Layout
type LucideIcon = React.FC<LucideProps>

interface I_Props_GuardLayout {
  menu: string[]
  itemList?: LucideIcon[]
}

interface I_Props_GuardLayoutContent {
  Layout: React.Element
  Header: React.Element
  Content: React.Element
}

// SharedComponents
interface I_Props_Forms {
  label?: string
  name?: string
  value?: string
  device?: string
  handleChange?: (event: React.ChangeEvent<any>) => void
  type?: string
  // setFieldValue?: (field: string, value: any, shouldValidate?: boolean) => void
}

interface I_Props_Select {
  name?: string
  value?: string
  handleChange?: (event: React.ChangeEvent<any>) => void
  list?: string[]
  width?: string
  border?: string
}

interface I_Props_AvatarForm {
  avatar?: string
  userImage?: string
  justify?: string
  gap?: string
}

interface I_Props_Image {
  src?: string
  alt?: string
  width?: string
  height?: string
  border?: string
  rounded?: string
  padding?: string
  marginL?: string
}

interface I_Props_Tabs {
  profile?: string
  billingAddress?: string
  confirmation?: string
  initialValues?: I_Props_Profile
  values?: I_Props_Profile
}

interface I_Props_InfoConfirm {
  label?: string
}

// Components
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

interface I_Props_Location {
  list: string[]
  locationValue?: string
  cityValue?: string
  stateValue?: string
  handleChange?: (event: React.ChangeEvent<any>) => void
}

interface I_Props_AddressLine1 {
  list?: string[]
  value?: string
  handleChange?: (event: React.ChangeEvent<any>) => void
}

// I_props: data type using for style.
interface I_Style_GuardStyle {
  container: string
}
