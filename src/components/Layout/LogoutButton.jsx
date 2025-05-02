import { useNavigate } from "react-router-dom";
import useAuthStore from "../../stores/authStore";

export default function LogoutButton() {
    const logout = useAuthStore((state) => state.logout)
    const navigate = useNavigate()

    const handleLogout = () => {
        logout()
        navigate("/login")
    }

    return (
        <button onClick={handleLogout} className="bg-red-500 text-white p-2 rounded">
            logout
        </button>
    )
}