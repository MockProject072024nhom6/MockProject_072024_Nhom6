import React, { useState } from "react"

const LogoutButton: React.FC = () => {
  const [showConfirmBox, setShowConfirmBox] = useState(false)

  const handleLogoutClick = () => {
    setShowConfirmBox(true)
  }

  const handleConfirmLogout = () => {
    console.log("User has logged out")
    setShowConfirmBox(false)
  }

  const handleCancelLogout = () => {
    setShowConfirmBox(false)
  }

  return (
    <div className='flex justify-end mx-72 my-20'>
      <button onClick={handleLogoutClick} className='bg-gray-300 text-blue-500 px-5 rounded-lg'>
        Logout
      </button>

      {showConfirmBox && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
          <div className='bg-white p-6 rounded shadow-lg text-center'>
            <p className='mb-4 text-black'>LOGOUT</p>
            <p className='mb-4 text-black'>Are you sure you want to logout?</p>
            <div className='flex justify-center space-x-4'>
              <button onClick={handleCancelLogout} className='bg-gray-300 text-black px-4 py-2 rounded'>
                Cancel
              </button>
              <button onClick={handleConfirmLogout} className='bg-red-500 text-white px-4 py-2 rounded'>
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default LogoutButton
