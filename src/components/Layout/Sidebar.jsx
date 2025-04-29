import { Link } from "react-router-dom";

export default function Sidebar() {
    return (
        <div className="w-64 bg-white shadow-lg flex flex-col justify-between">
            <div>
                <div className="p-6 font-bold text-xl border-b">ProjectManager</div>
                    <nav>
                        <Link to="/" className="hover:bg-gray-100 p-2 rounded">
                        Dashboard
                        </Link>
                        <Link to="/" className="hover:bg-gray-100 p-2 rounded">
                        Profile
                        </Link>
                    </nav>
            </div>
        </div>
    )
}