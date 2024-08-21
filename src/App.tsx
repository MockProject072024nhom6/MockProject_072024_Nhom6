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
          <Route path='/guard' element={<AboutXPressGuardsPage />} />
          <Route path='/training' element={<BodyguardTrainingPage />} />
          <Route path='/price' element={<PriceServicesPage />} />
          <Route path='/profile' element={<PersonalInformationPage />} />
          <Route path='/manager' element={<ServiceManagementPage />} />
          {/* Staff */}
          <Route path='/staff/maintain-price' element={<MaintainPrice />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
