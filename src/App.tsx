// import GuardLayout from "./Layouts/GuardLayout"
// import GuardPage from "@/Pages/GuardPage/GuardPage"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import GuardLayout from "./Layouts/GuardLayout/GuardLayout"
import GuardPage from "./Pages/GuardPage/GuardPage"
import LoginPage from "./Pages/CustomerPages/LoginPage"
import SignUpPage from "./Pages/CustomerPages/SignUpPage"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/guard' element={<GuardLayout />}>
            <Route path='profile' element={<GuardPage />} />
          </Route>
          <Route path='customer/login' element={<LoginPage />} />
          <Route path='customer/signup' element={<SignUpPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
