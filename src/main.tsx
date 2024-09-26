import { createRoot } from "react-dom/client"
import App from "./App.tsx"
import "./index.css"
import { Provider } from "react-redux"
import store from "./ReduxToolkit/Store.ts"

import "@fontsource/roboto"
import "@fontsource/montserrat"
import "@fontsource/palanquin"

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
  </Provider>
)
