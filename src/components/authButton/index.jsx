import { useNavigate } from "react-router"

export default function AuthButton() {
    const navigate = useNavigate()

    return(
        <div className="flex gap-2.5">
                <button className="text-sm bg-white rounded-4xl p-2">Live community signals</button>
                <button  className="w-40 p-2.5 bg-gradient-to-r from-[rgb(17,143,132)] to-[rgb(20,168,153)] rounded-4xl text-white font-medium text-center text-sm cursor-pointer"
                onClick={()=> navigate('/helpHubAI/auth')}>Join the platform</button>
            </div>
    )
}