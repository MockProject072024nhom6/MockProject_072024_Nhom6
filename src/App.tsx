import { BrowserRouter, Routes, Route } from "react-router-dom"
import GuardLayout from "./Layouts/GuardLayout/GuardLayout"
import CustomerLayout from "./Layouts/CustomerLayout/CustomerLayout"
import GuardRoute from "./Routes/DashboardRoute"
import AuthenticationRoute from "./Routes/AuthenticationRoute"
import CustomerRoute from "./Routes/CustomerRoute"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/guard' element={<GuardLayout />}>
            {GuardRoute.map((route, index) => (
              <Route key={index} path={route.path} element={<route.element />} />
            ))}
          </Route>
          <Route path='/customer' element={<CustomerLayout />}>
            {CustomerRoute.map((route, index) => (
              <Route key={index} path={route.path} element={<route.element />} />
            ))}
          </Route>
          {AuthenticationRoute.map((route, index) => (
            <Route key={index} path={route.path} element={<route.element />} />
          ))}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
