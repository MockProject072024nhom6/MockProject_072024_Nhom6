import { BrowserRouter, Routes, Route } from "react-router-dom"
import GuardLayout from "./Layouts/GuardLayout/GuardLayout"
import LoginPage from "./Pages/CustomerPages/LoginPage"
import SignUpPage from "./Pages/CustomerPages/SignUpPage"
import GuardRoute from "./Routes/GuardRoute"

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
          <Route path='customer/login' element={<LoginPage />} />
          <Route path='customer/signup' element={<SignUpPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
