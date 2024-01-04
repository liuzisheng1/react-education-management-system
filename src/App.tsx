import { Suspense } from "react"
import { RouterGuard } from "@/router/routerGuard.ts"
import routes from "@/router"

function App() {
  return (
    <div className="app">
      <Suspense fallback="Loading...">
        <div className="main">{RouterGuard(routes)}</div>
      </Suspense>
    </div>
  )
}
export default App
