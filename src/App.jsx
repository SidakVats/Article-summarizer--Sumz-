import Hero from "./components/Hero"
import Demo from "./components/Demo"
import { Analytics } from "@vercel/analytics/react"

function App() {

  return (
    <>
      <Analytics/>
      <main>
        <div className="main">
          <div className="gradient"/>
        </div>
          <div className="app">
            <Hero/>
            <Demo/>
          </div>
      </main>
    </>
  )
}

export default App
