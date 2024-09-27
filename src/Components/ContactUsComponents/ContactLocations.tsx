import React from "react"

const locations = [
  {
    name: "California",
    address: "333 Đại lộ Đại học, Phòng 200 Sacramento, CA 95825",
    phone: "(916) 281-0785"
  },
  {
    name: "New York",
    address: "77 Water Street, Tầng 8 Manhattan, NY 10005",
    phone: "(916) 281-0785"
  }
  // Add more locations as needed
]

const ContactLocations: React.FC = () => {
  return (
    <div className='mx-5 grid grid-cols-3 grid-rows-2 gap-2 p-10'>
      {locations.map((location, index) => (
        <div key={index} className='border-2 rounded-lg hover:bg-slate-100'>
          <div className='p-2 text-black'>
            <h4 className='font-semibold text-lg'>{location.name}</h4>
            <p>{location.address}</p>
            <button className='bg-white text-blue-500 shadow-lg text-sm'>{location.phone}</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ContactLocations
