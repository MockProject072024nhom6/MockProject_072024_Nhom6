import { BrowserRouter, Routes, Route } from "react-router-dom"
import GuardLayout from "./Layouts/GuardLayout/GuardLayout"
import { guardMenu, guardPaths } from "./Arrays/Arrays"
import { Bookmark, LayoutDashboard, MessageSquareText, SquareChevronDown } from "lucide-react"
import WorkingScheduleRoute from "./Routes/WorkingScheduleRoute"
import DashboardRoute from "./Routes/DashboardRoute"
import DayOffRoute from "./Routes/DayOffRoute"
import TrainingCourseRoute from "./Routes/TrainingCourseRoute"

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
                guardPaths={guardPaths}
              />
            }
          >
            {[DashboardRoute, DayOffRoute, WorkingScheduleRoute, TrainingCourseRoute].map(routeList =>
              routeList.map((route, index) => <Route key={index} path={route.path} element={<route.element />} />)
            )}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
