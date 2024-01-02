import { Suspense } from "react"
import { useRoutes } from "react-router-dom"
import routes from "@/router"

function App() {
  return (
    <div className="app">
      <Suspense fallback="Loading...">
        <div className="main">{useRoutes(routes)}</div>
      </Suspense>
    </div>
  )
}
export default App
