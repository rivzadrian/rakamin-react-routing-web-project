import { Link } from "react-router-dom";
import LogoutButton from "./LogoutButton";

export default function Sidebar() {
    return (
        <div className="w-64 bg-white shadow-lg flex flex-col justify-between">
            <div>
                <div className="p-6 font-bold text-xl border-b">ProjectManager</div>
                    <nav className="flex flex-col p-4 space-y-2">
                        <Link to="/" className="hover:bg-gray-100 p-2 rounded">
                        Dashboard
                        </Link>
                        <Link to="/" className="hover:bg-gray-100 p-2 rounded">
                        Profile
                        </Link>
                    </nav>

            </div>
            <div className="p-4 border-t">
                        <LogoutButton />
                    </div>
        </div>
    )
}