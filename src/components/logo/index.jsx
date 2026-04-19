import { useNavigate } from "react-router"

export default function Logo() {
const navigate = useNavigate()

    return(
        <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => navigate('/helpHubAI')}>
            <div className="w-10 h-10 rounded-md text-white bg-gradient-to-r from-[rgb(16,130,121)] to-[rgb(17,171,155)] text-lg font-bold flex items-center justify-center">H</div>
            <div className="font-semibold text-md">Help Hub AI</div>
        </div>
    )
}