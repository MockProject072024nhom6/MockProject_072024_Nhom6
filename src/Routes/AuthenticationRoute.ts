import SignUpPage from "../Pages/CustomerPages/SignUpPage"
import LoginPage from "../Pages/CustomerPages/LoginPage"

const AuthenticationRoute = [
  { path: "/customer/login", element: LoginPage },
  { path: "/customer/signup", element: SignUpPage }
]

export default AuthenticationRoute
