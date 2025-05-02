import Topbar from "../components/Layout/Topbar";
import useAuthStore from "../stores/authStore";

export default function Home(){
    return (
        <>
        <div>
        {/* <Topbar /> */}
            <h1 className="text-2xl font-bold mb-6"> Active Projects</h1>
            {/* <h1>Welcome {user.name}</h1> */}
        </div>
        </>
    )
}