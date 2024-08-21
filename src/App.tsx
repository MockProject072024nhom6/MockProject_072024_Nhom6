import { BrowserRouter, Routes, Route } from "react-router-dom"
import GuardLayout from "./Layouts/GuardLayout/GuardLayout"
import { guardMenu, guardPaths } from "./Arrays/Arrays"
import { Bookmark, LayoutDashboard, MessageSquareText, SquareChevronDown } from "lucide-react"
import WorkingScheduleRoute from "./Routes/WorkingScheduleRoute"
import DashboardRoute from "./Routes/DashboardRoute"
import DayOffRoute from "./Routes/DayOffRoute"
import TrainingCourseRoute from "./Routes/TrainingCourseRoute"
import AboutXPressGuardsPage from "./Pages/AboutPage/AboutXPressGuardsPage"
import ContactUsPage from "./Pages/ContactPage/ContactUsPage"
import BodyguardTrainingPage from "./Pages/AboutPage/BodyguardTrainingPage"
import PriceServicesPage from "./Pages/SecurityServices/PriceServicesPage"
import PersonalInformationPage from "./Pages/PersonalInformationPage"
import ServiceManagementPage from "./Pages/SecurityServices/ServiceManagementPage"
import HeaderStaff from "./ComponentsStaff/HeaderStaff.tsx"
import NavbarStaff from "./ComponentsStaff/NavbarStaff.tsx"
import ContractStaff from "./Pages/ContractStaff.tsx"

function App() {
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
  ]

  const user = {
    name: "Jane Smith",
    location: "Vietnam",
    imageSrc: "https://via.placeholder.com/40"
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path='/guard'
            element={
              <GuardLayout
                menu={guardMenu}
                itemList={[Bookmark, LayoutDashboard, MessageSquareText, SquareChevronDown]}
                guardPaths={guardPaths}
              />
            }
          >
            {[DashboardRoute, DayOffRoute, WorkingScheduleRoute, TrainingCourseRoute].map(routeList =>
              routeList.map((route, index) => <Route key={index} path={route.path} element={<route.element />} />)
            )}
          </Route>
          <Route path='/contact' element={<ContactUsPage />} />
          <Route path='/guard' element={<AboutXPressGuardsPage />} />
          <Route path='/training' element={<BodyguardTrainingPage />} />
          <Route path='/price' element={<PriceServicesPage />} />
          <Route path='/profile' element={<PersonalInformationPage />} />
          <Route path='/manager' element={<ServiceManagementPage />} />
        </Routes>
      </BrowserRouter>
      <div className='flex flex-col h-screen'>
        {/* Header */}
        <div className='w-full'>
          <HeaderStaff userName={user.name} userLocation={user.location} userImageSrc={user.imageSrc} />
        </div>

        <div className='flex flex-1'>
          {/* Navbar */}
          <div className='w-1/4 lg:w-1/5'>
            <NavbarStaff />
          </div>

          {/* Main Content */}
          <div className='flex-1 p-4'>
            <ContractStaff data={data} />
          </div>
        </div>
      </div>
    </>
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
