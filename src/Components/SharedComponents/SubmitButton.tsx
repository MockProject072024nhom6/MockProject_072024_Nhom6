import { style } from "@/Styles/CustomerAuthenticationStyle"

const SubmitButton = ({ label, type, isValid }: I_Props_SubmitButton) => {
  return (
    // Nên props là notIsValid vì data truyền qua là !isValid, ghi như vậy dễ hiểu lầm cho member khác.
    // Logic là dùng toán tử 3 ngôi nếu khác !isValid là cursor-not-allowed, ngược lại cursor-pointer.
    <button type={type} className={`${isValid ? "cursor-not-allowed" : "cursor-pointer"} ${style.button}`}>
      {label}
    </button>
  )
}

export default SubmitButton
