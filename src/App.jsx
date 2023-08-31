import Cards from "./pages/Cards"
import Home from "./pages/Home"
import Navbar from "./pages/Navbar"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import Upload from "./pages/Upload"

function App() {
  return (
    <div>
    <Navbar/>
    <Home/>
    <Cards/>
    <SignUp/>
    <SignIn/>
    <Upload/>
    </div>
  )
}

export default App
