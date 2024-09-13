import { boolean } from "yup"

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

interface I_Props_CustomerLayoutContent {
  Layout: React.Element
  Header: React.Element
  Content: React.Element
  Footer: React.Element
}

interface I_Props_LinkButton {
  text: string
  large?: boolean
  transparent?: boolean
  fullBg?: boolean
}

interface I_Props_ServiceTypeCard {
  serviceType: {
    name: string
    srcImg: string
  }
}

interface I_Props_TestimonialCard {
  testimonial: {
    avatar: string
    name: string
    jobTitle: string
    feedback: string
  }
  index: number
  currentCard: number
}

interface I_Props_Highlight {
  img: string
  title: string
  text: string
}

interface I_Props_Offer {
  img1: string
  img2: string
  type: string
  qnA: I_Props_QnA[]
}

interface I_Props_QnA {
  question: string
  answer: string
}

interface I_Props_QnAComponent {
  data: I_Props_QnA
  index: number
  toggleQuestion: boolean[]
  handleToggle: Function
}

interface I_Props_FeedbackCustomer {
  star: number
  details: string
  avatar: string
}
interface I_Props_FeedbackCardComponent {
  bgColor: string
  info: I_Props_FeedbackCustomer
}

interface I_Props_ClickContent {
  onClick: MouseEventHandler
}
