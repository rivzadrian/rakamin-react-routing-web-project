import { useParams } from "react-router-dom";

export default function ProjectDetail(){
    const {projectId} = useParams();
    console.log(projectId);
    
    return(
        <div className="p-6 bg-white rounded shadow space-y-8">
            {/* project info */}
            <div>
                <h1 className="text-2xl font-bold mb-4">Project Name</h1>
                
                <div className="text-gray-600 mb-2">
                    <strong>Status:</strong> Project Status
                </div>
                <div className="text-gray-600 mb-2">
                    <strong>Duration:</strong> {new Date().toLocaleDateString()}-{" "}
                    {new Date().toLocaleDateString()}
                </div>
                <div className="text-gray-600 mb-2">
                    <strong>Description:</strong> Project Description
                </div>

                <div className="text-gray-600">
                    <strong>Created by:</strong> Owner Project
                </div>
            </div>
        </div>
    )
}