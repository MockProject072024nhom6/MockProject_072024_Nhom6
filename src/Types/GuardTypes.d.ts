// I_props: data type using for props.
// Layout
type LucideIcon = React.FC<LucideProps>

export interface I_Props_GuardLayout {
  menu: string[]
  itemList?: LucideIcon[]
  guardPaths?: string[]
}

export interface I_Props_GuardLayoutContent {
  Layout: React.Element
  Header: React.Element
  Content: React.Element
}

// SharedComponents
export interface I_Props_Forms {
  label?: string
  name?: string
  value?: string
  device?: string
  handleChange?: (event: React.ChangeEvent<any>) => void
  type?: string
  flex?: string
  disabled?: boolean
}

export interface I_Props_Select {
  name?: string
  value?: string
  handleChange?: (event: React.ChangeEvent<any>) => void
  list?: string[]
  width?: string
  border?: string
}

export interface I_Props_Date {
  label?: string
  placeholder?: string
  className?: string
  disabled?: boolean
}

export interface I_Props_Time {
  label?: string
  placeholder?: string
  className?: string
  disabled?: boolean
}

export interface I_Props_TextArea {
  label?: string
  placeholder?: string
  minRows?: number
  value?: string
  disabled?: boolean
}

export interface I_Props_AvatarForm {
  avatar?: string
  userImage?: string
  justify?: string
  gap?: string
  setFieldValue?: (field: string, value: any, shouldValidate?: boolean) => void
}

export interface I_Props_Image {
  src?: string
  alt?: string
  width?: string
  height?: string
  border?: string
  rounded?: string
  padding?: string
  marginL?: string
  flex?: string
  justify?: string
}

export interface I_Props_Button {
  name?: string
  className?: string
  type?: "link" | "default" | "primary" | "dashed" | "text" | undefined
  onClick?: () => void
}

export interface I_Props_Input {
  className?: string
  id?: string
  type?: string
  name?: string
  accept?: string
  value?: string
  placeholder?: string
  handleChange?: (event: React.ChangeEvent<any>) => void
  multiple?: boolean
  disabled?: boolean
}

export interface I_Props_Tabs {
  profile?: string
  billingAddress?: string
  confirmation?: string
  initialValues?: I_Props_Profile
  values?: I_Props_Profile
}

type AnyObject = { [key: string]: any }
export interface I_Props_Table {
  columns?: TableProps<DayOffColumns | WorkingScheduleColumns>["columns"]
  data?: DayOffColumns[] | WorkingScheduleColumns[]
}

export interface I_Props_InfoConfirm {
  label?: string
}

// Components

export interface I_Props_Profile {
  avatar: string
  fullName: string
  email: string
  phone: string
  device: string
  organization: string
  department: string
  accountType: string
  profileObject?: I_Props_Profile
  userImage?: string
}

export interface I_Props_ProfileComponents {
  onNext: () => void
}

export interface I_Props_BillingAddressComponents {
  onPrevious: () => void
  onNext: () => void
}

export interface I_Props_ConfirmationComponents {
  onEdit: () => void
}

export interface I_Props_Location {
  list: string[]
  locationValue?: string
  cityValue?: string
  stateValue?: string
  handleChange?: (event: React.ChangeEvent<any>) => void
}

export interface I_Props_AddressLine1 {
  list?: string[]
  value?: string
  handleChange?: (event: React.ChangeEvent<any>) => void
}

export interface DayOffColumns {
  index: string
  startDate: string
  endDate: string
  reason: string
  state: string
}

export interface I_Props_TableDayOff {
  column: TableProps<DayOffColumns>["columns"]
  data: DayOffColumns[]
}

export interface WorkingScheduleColumns {
  index: string
  mission: string
  date: string
  time: string
  status: string
  customerName: string
  guard: string
}

// Formik
type setFieldValue = (field: string, value: any, shouldValidate?: boolean) => void

// I_props: data type using for style.
export interface I_Style_GuardStyle {
  container: string
}
export interface I_props_HeaderInPageHome {
  title: string
  subtitle: string
  page: string
}
export interface I_props_Achievements {
  clientsProtected: number
  yearsOfExperience: number
  officeLocations: number
  statesServed: number
}
export interface I_props_Testimonial {
  name: string
  position: string
  image: string
  feedback: string
}

export type I_props_FormInput = {
  type?: string
  placeholder: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}
export type I_props_SelectInput = {
  options: string[]
  value: string
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
}
export type I_props_Button = {
  label: string
  onClick: () => void
}
export interface I_props_ServiceCard {
  image: string
  title: string
  description: string
  note: string
  priceRange: string
  groupSize: string
  vipBadge?: boolean
}
export interface I_props_Avatar {
  size?: number
  border?: string
}
export interface I_props_EditableButton {
  initialText: string
  label: string
  type: string
}
export interface I_props_SelectInputName {
  initialText: string
  label: string
  options: string[]
}
export interface I_props_Contract {
  no: number
  contractCode: string
  typeOfService: string
  specialRequirements: string
  price: string
  startDate: string
  endDate: string
  status: string
  view: string
  feedback: string
}

export interface I_props_ContractTable {
  contracts: I_props_Contract[]
}
