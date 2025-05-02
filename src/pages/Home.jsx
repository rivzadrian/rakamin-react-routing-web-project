import Topbar from "../components/Layout/Topbar";
import useAuthStore from "../stores/authStore";
import { Link } from "react-router-dom";
import useProjectStore from "../stores/projectStores";
import { useEffect } from "react";

export default function Home() {
  const { fetchProject, projects, loading, error } = useProjectStore();

  useEffect(() => {
    fetchProject();
  }, []);

  if (loading) {
    return (
      <div className="animate-pulse">
        <div className="h-6 mb-6 bg-gray-200 rounded w-2/5"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="p-4 bg-gray-200 rounded">
              <div className="h-4 bg-gray-300 rounded w-3/5"></div>
              <div className="h-4 bg-gray-300 rounded w-full mt-2"></div>
              <div className="h-4 bg-gray-300 rounded w-full mt-2"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return <div>Failed, error</div>;
  }

  return (
    <>
      <div>
        <h1 className="text-2xl font-bold mb-6"> Active Project</h1>
        {/* try with commentiing the useEffect fetch */}
        {projects.length === 0 ? (
          <p>No projects founds</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Link
              key={project.id}
                to={`/projects/${project.id}`}
                className="p-4 bg-white rounded shadow hover:shadow-md transition"
              >
                <h2 className="text-lg font-semibold">{project.name}</h2>
                <p className="text-gray-500">
                  {" "}
                  {project.description || "No description"}
                </p>
                <div className="mt-2 text-sm text-gray-400">
                  {new Date(project.startDate).toLocaleDateString()} -{" "}
                  {new Date(project.endDate).toLocaleDateString}
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
