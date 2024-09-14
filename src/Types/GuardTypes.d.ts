// I_props: data type using for props.

// Layout
type LucideIcon = React.FC<LucideProps>

interface I_Props_GuardLayout {
  menu: string[]
  itemList?: LucideIcon[]
  guardPaths?: string[]
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
  flex?: string
  disabled?: boolean
}

interface I_Props_Select {
  name?: string
  value?: string
  handleChange?: (event: React.ChangeEvent<any>) => void
  list?: string[]
  width?: string
  border?: string
}

interface I_Props_Date {
  label?: string
  placeholder?: string
  className?: string
  disabled?: boolean
}

interface I_Props_Time {
  label?: string
  placeholder?: string
  className?: string
  disabled?: boolean
}

interface I_Props_TextArea {
  label?: string
  placeholder?: string
  minRows?: number
  value?: string
  disabled?: boolean
}

interface I_Props_AvatarForm {
  avatar?: string
  userImage?: string
  justify?: string
  gap?: string
  setFieldValue?: (field: string, value: any, shouldValidate?: boolean) => void
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
  flex?: string
  justify?: string
}

interface I_Props_Button {
  name?: string
  className?: string
  type?: "link" | "default" | "primary" | "dashed" | "text" | undefined
  onClick?: () => void
}

interface I_Props_Input {
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

interface I_Props_Tabs {
  profile?: string
  billingAddress?: string
  confirmation?: string
  initialValues?: I_Props_Profile
  values?: I_Props_Profile
}

type AnyObject = { [key: string]: any }
interface I_Props_Table {
  columns?: TableProps<DayOffColumns | WorkingScheduleColumns>["columns"]
  data?: DayOffColumns[] | WorkingScheduleColumns[]
}

interface I_Props_InfoConfirm {
  label?: string
}

// Components
interface I_Props_Profile {
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

interface I_Props_ProfileComponents {
  onNext: () => void
}

interface I_Props_BillingAddressComponents {
  onPrevious: () => void
  onNext: () => void
}

interface I_Props_ConfirmationComponents {
  onEdit: () => void
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

interface DayOffColumns {
  index: string
  startDate: string
  endDate: string
  reason: string
  state: string
}

interface I_Props_TableDayOff {
  column: TableProps<DayOffColumns>["columns"]
  data: DayOffColumns[]
}

interface WorkingScheduleColumns {
  index: string
  mission: string
  date: string
  time: string
  status: string
  customerName: string
  guard: string
}

interface I_Props_WorkingScheduleComponents {
  column: TableProps<WorkingScheduleColumns>["columns"]
  data: WorkingScheduleColumns[]
}

// Formik
type setFieldValue = (field: string, value: any, shouldValidate?: boolean) => void

// I_props: data type using for style.
interface I_Style_GuardStyle {
  container: string
}