import { ChevronLeft } from "lucide-react"

const BackButton = () => {
  return (
    <div className='w-full flex justify-start mb-1'>
      <div className=' pl-[1px] items-center w-7 py-1 ml-4 bg-black/80 rounded-md transition-transform duration-300 ease-in-out  hover:scale-105 active:scale-95 hover:bg-black active:bg-black/90 shadow-md hover:shadow-lg'>
        <ChevronLeft color='white' size='24px' />
      </div>
    </div>
  )
}

export default BackButton
