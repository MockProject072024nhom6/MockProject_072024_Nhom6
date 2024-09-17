import { ReactElement } from "react"
import { To } from "react-router-dom"

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
  HeaderAbove: React.Element
  Header: React.Element
  Content: React.Element
  Footer: React.Element
}

interface I_Props_LinkButton {
  text: string
  large: boolean
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

interface I_Props_Text {
  text: string
  link: To
  large?: boolean
  children?: ReactElement
}
