import AuthButton from "../../components/authButton";
import Logo from "../../components/logo";
import NavBar from "../../components/navbar";

export default function Dashboard() {
    return(
        <header className='w-[100%] h-[70px] flex items-center justify-evenly bg-[rgb(245,238,228)] '>
            <Logo/>
            <NavBar/>
            <AuthButton/>
          </header>
    )
}