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
import CustomerLayout from "./Layouts/CustomerLayout/CustomerLayout"
import AuthenticationRoute from "./Routes/AuthenticationRoute"
import CustomerRoute from "./Routes/CustomerRoute"
import MaintainPrice from "./Pages/MaintainPrice/MaintainPrice"
import ContractDetails from "./Pages/ReviewContract"
import AddPrice from "./Pages/ChangePrice"
import ContractStaff from "./Pages/ContractStaff"
import PriceStaff from "./Pages/PriceStaff"
import DashboardPage from "./Pages/DashboardPage/DashboardPage"
import MyComponent from "./Components/Message/Message"
import NavbarStaff from "./ComponentsStaff/NavbarStaff"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Guard */}
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
          {/* Customer */}
          <Route path='/' element={<CustomerLayout />}>
            {CustomerRoute.map((route, index) => (
              <Route key={index} path={route.path} element={<route.element />} />
            ))}
          </Route>
          {AuthenticationRoute.map((route, index) => (
            <Route key={index} path={route.path} element={<route.element />} />
          ))}
          <Route path='/contact' element={<ContactUsPage />} />
          <Route path='/about-us' element={<AboutXPressGuardsPage />} />
          <Route path='/training' element={<BodyguardTrainingPage />} />
          <Route path='/price-service-list' element={<PriceServicesPage />} />
          <Route path='/profile' element={<PersonalInformationPage />} />
          {/* Staff */}
          <Route path='/staff'>
            <Route path='maintain-price' element={<MaintainPrice />} />
            <Route path='add-price' element={<AddPrice />} />
            <Route path='price-staff' element={<PriceStaff />} />
            <Route path='dashboard' element={<DashboardPage />} />
            <Route path='contract' element={<ServiceManagementPage />} />
          </Route>
          <Route path='/manager'>
            <Route path='preview-contract' element={<ContractDetails />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
