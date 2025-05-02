import { create } from "zustand";
import api from "../utils/api";

const useProjectStore = create((set) => ({
    projects: [],
    loading: false,
    error: null,

    fetchProject: async () => {
        set({loading: true, error: null})
        try {
            const response= await api.get("/api/projects")
            set({projects: response.data.data || []});
        } catch (error) {
            console.error("Failed to fetch project", error);
            set({error: error.message})
        } finally {
            set({loading: false})
        }
    },

}))

export default useProjectStore;