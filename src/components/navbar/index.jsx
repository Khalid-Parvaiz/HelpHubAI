import { Link } from "react-router";

export default function NavBar() {
    return (
        <>
        <nav className="flex gap-1.5">
            <Link to='/helpHubAI' className="p-2.5 hover:bg-[rgba(17,143,133,0.5)] hover:text-[rgb(0,100,92)] focus:bg-[rgba(17,143,133,0.5)] focus:text-[rgb(0,100,92)] rounded-3xl">Home</Link>
            <Link to='/helpHubAI' className="p-2.5 hover:bg-[rgba(17,143,133,0.5)] hover:text-[rgb(0,100,92)] focus:bg-[rgba(17,143,133,0.5)] focus:text-[rgb(0,100,92)] rounded-3xl">Explore</Link>
            <Link to='/helpHubAI' className="p-2.5 hover:bg-[rgba(17,143,133,0.5)] hover:text-[rgb(0,100,92)] focus:bg-[rgba(17,143,133,0.5)] focus:text-[rgb(0,100,92)] rounded-3xl">Leaderboard</Link>
            <Link to='/helpHubAI' className="p-2.5 hover:bg-[rgba(17,143,133,0.5)] hover:text-[rgb(0,100,92)] focus:bg-[rgba(17,143,133,0.5)] focus:text-[rgb(0,100,92)] rounded-3xl">AI Center</Link>
        </nav>
        </>
    )
}