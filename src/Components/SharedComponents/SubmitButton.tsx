import { style } from "@/Styles/CustomerAuthenticationStyle"

const SubmitButton = ({ label, type, isValid }: I_Props_SubmitButton) => {
  return (
    <button type={type} className={`${isValid && style.isValidButton} ${style.button}`}>
      {label}
    </button>
  )
}

export default SubmitButton
