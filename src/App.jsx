import './App.css'
import AuthButton from './components/authButton'
import Logo from './components/logo'
import NavBar from './components/navbar'
import Section from './components/section'

function App() {
 return(
  <>
  <header className='w-[100%] h-[70px] flex items-center justify-evenly bg-[rgb(245,238,228)] sticky top-0'>
    <Logo/>
    <NavBar/>
    <AuthButton/>
  </header>
  <Section/>
  </>
 )
}

export default App
