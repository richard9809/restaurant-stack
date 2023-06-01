import Navbar from "./Component/Navbar"
import Sidebar from "./Component/Sidebar"

function App() {

  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex-1 flex">
        <Sidebar />
      </div>
    </div>
  )
}

export default App
