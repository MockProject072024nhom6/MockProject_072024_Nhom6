import { useState } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "./App.css"
import Login from "./Pages/Login.tsx"
import Header from "./ComponentsCustomer/Header.tsx"
import Navbar from "./ComponentsCustomer/Navbar.tsx"
import Footer from "./ComponentsCustomer/Footer.tsx"
import HeaderStaff from "./ComponentsStaff/HeaderStaff.tsx"
import NavbarStaff from "./ComponentsStaff/NavbarStaff.tsx"
import PriceStaff from "./Pages/PriceStaff.tsx"
import AddPrice from "./Pages/AddPrice.tsx"
import ChangePrice from "./Pages/ChangePrice.tsx"
import DeletePrice from "./Pages/DeletePrice.tsx"
import ContractStaff from "./Pages/ContractStaff.tsx"

function App() {
  const [count, setCount] = useState(0)
  const data = [
    {
      id: "001",
      customerName: "John Doe",
      startDate: "2024-08-01",
      endDate: "2024-08-15",
      requestDate: "2024-07-20",
      status: "approved", // "pending", "notApproved", "rejected"
      serviceDetails: "Security service for a 2-week event"
    }
  ];
  
  const user = {
    name: "Jane Smith",
    location: "Vietnam",
    imageSrc: "https://via.placeholder.com/40"
  };
  

  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <div className="w-full">
      <HeaderStaff 
        userName={user.name} 
        userLocation={user.location} 
        userImageSrc={user.imageSrc} 
      />
      </div>

      <div className="flex flex-1">
        {/* Navbar */}
        <div className="w-1/4 lg:w-1/5">
          <NavbarStaff />
        </div>

        {/* Main Content */}
        <div className="flex-1 p-4">
        <ContractStaff  data={data}/>
        </div>
      </div>
    </div>
  )
}

export default App



// const [count, setCount] = useState(0)
//   const priceData = [
//     {
//       id: "001",
//       name: "Service 1",
//       price: "$100",
//       holidayPrice: "$120",
//       term: "12 Months",
//       serviceDetails: "Details here"
//     },
//     {
//       id: "002",
//       name: "Service 2",
//       price: "$200",
//       holidayPrice: "$240",
//       term: "6 Months",
//       serviceDetails: "Details here"
//     },
//     {
//       id: "003",
//       name: "Service 3",
//       price: "$150",
//       holidayPrice: "$180",
//       term: "1 Year",
//       serviceDetails: "Details here"
//     },
//   ];


//   const user = {
//     name: "John Doe",
//     location: "India",
//     imageSrc: "https://via.placeholder.com/40"
//   };
//   return (
//     <div className="flex flex-col h-screen">
//       {/* Header */}
//       <div className="w-full">
//       <HeaderStaff 
//         userName={user.name} 
//         userLocation={user.location} 
//         userImageSrc={user.imageSrc} 
//       />
//       </div>

//       <div className="flex flex-1">
//         {/* Navbar */}
//         <div className="w-1/4 lg:w-1/5">
//           <NavbarStaff />
//         </div>

//         {/* Main Content */}
//         <div className="flex-1 p-4">
//         <PriceStaff data={priceData} />
//         </div>
//       </div>
//     </div>
//   )