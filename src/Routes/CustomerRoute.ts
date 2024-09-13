import { FeedbackPage } from "@/Pages/CustomerPages/FeedbackPage"
import HomePage from "@/Pages/CustomerPages/HomePage"
import ServiceTypePage from "@/Pages/CustomerPages/ServiceTypePage"

const CustomerRoute = [
  { path: "/", element: HomePage },
  { path: "/servicetype", element: ServiceTypePage },
  { path: "/feedback", element: FeedbackPage }
]

export default CustomerRoute
