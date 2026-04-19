import { Link } from "react-router";
import Logo from "../../components/logo";
import NavBar from "../../components/navbar";

export default function SignIn() {
    return (
        <>
        <header className='w-[100%] h-[70px] flex items-center justify-evenly bg-[rgb(245,238,228)] '>
            <Logo/>
            <NavBar/>
          </header>
            <div className="w-[100%] h-[90vh] flex m-auto items-center gap-10 justify-center bg-[rgb(255,249,242)]">
                <div className="w-[30%] h-[80%] bg-[rgb(18,46,42)] rounded-4xl text-white p-10 shadow-2xl">
                    <p className="font-bold text-sm">COMMUNITY ACCESS</p>
                    <h1 className="font-bold m-1.5 text-7xl">Enter the support network.</h1>
                    <p class="text-sm opacity-90 mb-6">
                        Choose a demo identity, set your role, and jump into a multi-page
                        product flow designed for asking, offering, and tracking help.
                    </p>
                    <ul class="space-y-2 text-sm opacity-90">
                        <li>• Role-based entry for Need Help, Can Help, or Both</li>
                        <li>• Direct path into dashboard, requests, AI Center and community feed</li>
                        <li>• Persistent demo session via LocalStorage</li>
                    </ul>
                </div>
                <div className="w-[30%] h-[80%] bg-[rgb(255,249,242)] rounded-4xl p-5 shadow-2xl">
                    <p className="font-semibold text-[rgb(16,130,120)] text-sm"><Link to={'/helpHubAI/auth'}>LOGIN</Link> / <Link to={'/helpHubAI/auth/signup'}>SIGNUP</Link></p>
                    <h1 className="font-bold m-1.5 text-[40px]">Authenticate your community profile</h1>
                    <form className="w-[100%] h-80 p-5 flex flex-col items-start gap-2.5 ">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" className="w-[100%] h-10 rounded-xl bg-white p-2" />
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" className="w-[100%] h-10 rounded-xl bg-white p-2" />
                        <button className="bg-gradient-to-r from-[rgb(17,143,132)] to-[rgb(20,168,153)] rounded-xl text-white w-[100%] h-10 mt-2.5">Sign In</button>
                    </form>
                </div>
            </div>

        </>
    )
}