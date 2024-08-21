import { style } from "@/Styles/CustomerAuthenticationStyle"
import { ChevronLeft } from "lucide-react"

const BackButton = () => {
  return (
    <div className='w-full flex justify-start mb-1'>
      <div className={style.icon}>
        <ChevronLeft color='white' size='24px' />
      </div>
    </div>
  )
}

export default BackButton
