import { Navigate } from "react-router-dom";
import useAuthStore from "../stores/authStore";

export default function ProtectedRoute({ children }){
    const token = useAuthStore((state) => state.token)

    if(!token){
        return <Navigate to ="/login" replace />
    }
    return children
}