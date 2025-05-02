import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useProjectStore from "../stores/projectStores";

export default function ProjectDetail() {
  const { projectId } = useParams(); //get the params
  console.log(projectId);

  const { fetchProjectDetail, projectDetail, loading, error } = useProjectStore();

  useEffect(() => {
    if (projectId) {
      fetchProjectDetail(projectId);
    }
  }, []);

  // console.log({projectDetail});

  if (loading) {
    return (
      <div className="p-6 bg-white rounded shadow space-y-8 animate-pulse">
        <div>
          <div className="h-6 bg-gray-200 rounded w-1/4 mb-4"></div>

          <div className="text-gray-600 mb-2 h-4 bg-gray-200 rounded w-1/2"></div>
          <div className="text-gray-600 mb-2 h-4 bg-gray-200 rounded w-1/2"></div>
          <div className="text-gray-600 mb-2 h-4 bg-gray-200 rounded w-3/4"></div>
          <div className="text-gray-600 h-4 bg-gray-200 rounded w-1/3"></div>
        </div>
      </div>
    );
  }

  if (error) return <div>Error: {error}</div>;
  if (!projectDetail) return <div>No details found</div>;

  return (
    <div className="p-6 bg-white rounded shadow space-y-8">
      {/* project info */}
      <div>
        <h1 className="text-2xl font-bold mb-4">{projectDetail.name}</h1>

        <div className="text-gray-600 mb-2">
          <strong>Status:</strong> {projectDetail.status}
        </div>
        <div className="text-gray-600 mb-2">
          <strong>Duration:</strong>{" "}
          {new Date(projectDetail.startDate).toLocaleDateString()}-{" "}
          {new Date(projectDetail.endDate).toLocaleDateString()}
        </div>
        <div className="text-gray-600 mb-2">
          <strong>Description:</strong> {projectDetail.description}
        </div>

        <div className="text-gray-600">
          <strong>Created by:</strong> {projectDetail.createdBy?.name || "unknown"}
        </div>
      </div>
    </div>
  );
}
