import React, { useState } from "react"
import { I_props_SelectInputName } from "../../Types/GuardTypes"
const SelectInput: React.FC<I_props_SelectInputName> = ({ initialText, label, options }) => {
  const [isEditing, setIsEditing] = useState(false)
  const [text, setText] = useState(initialText)

  const handleSelectOption = (option: string) => {
    setText(option)
    setIsEditing(false)
  }

  const handleEditClick = () => {
    setIsEditing(!isEditing)
  }

  return (
    <section>
      <div className='relative p-2 border-2 rounded-lg flex items-center w-9/12'>
        <div className='items-center ml-2 truncate'>{label}</div>
        <div className='flex  items-center flex-grow justify-end '>
          <div className='relative flex justify-end mr-2  flex-grow'>
            <button
              onClick={handleEditClick}
              className='px-3 py-1 rounded-lg max-w-72 w-full h-8 text-gray-400 bg-gray-200 hover:bg-blue-600 text-start truncate'
            >
              {text}
            </button>

            {isEditing && (
              <ul className='absolute top-full left-0 mt-1 w-full bg-gray-200 rounded-lg shadow-lg z-10'>
                {options.map((option, index) => (
                  <li
                    key={index}
                    onClick={() => handleSelectOption(option)}
                    className='px-3 py-2 cursor-pointer hover:bg-blue-500 hover:text-white truncate'
                  >
                    {option}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <button onClick={handleEditClick} className='px-3 py-2 mr-2 rounded-lg bg-gray-300 hover:bg-gray-400'>
            Sửa
          </button>
        </div>
      </div>
    </section>
  )
}

export default SelectInput
