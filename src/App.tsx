import { BrowserRouter, Routes, Route } from "react-router-dom"
import GuardLayout from "./Layouts/GuardLayout/GuardLayout"
import { guardMenu, paths } from "./Arrays/Arrays"
import { Bookmark, LayoutDashboard, MessageSquareText, SquareChevronDown } from "lucide-react"
import WorkingScheduleRoute from "./Routes/WorkingScheduleRoute"
import DashboardRoute from "./Routes/DashboardRoute"

function App() {
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
                paths={paths}
              />
            }
          >
            {DashboardRoute.map((route, index) => (
              <Route key={index} path={route.path} element={<route.element />} />
            ))}
            {WorkingScheduleRoute.map((route, index) => (
              <Route key={index} path={route.path} element={<route.element />} />
            ))}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
