import { BrowserRouter, Routes, Route } from "react-router-dom"
import GuardLayout from "./Layouts/GuardLayout/GuardLayout"
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
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
