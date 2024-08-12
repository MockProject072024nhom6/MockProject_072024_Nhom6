type SubmitButtonProps = {
  label: string
  type: "button" | "submit" | "reset"
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ label, type }) => {
  return (
    <button
      type={type}
      className='w-[75%] mt-6 py-3 bg-black/80 text-white transition-transform duration-300 ease-in-out  hover:scale-105 active:scale-95 hover:bg-black active:bg-black/90 shadow-md hover:shadow-lg'
    >
      {label}
    </button>
  )
}

export default SubmitButton
