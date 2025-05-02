import { create } from "zustand";

const useAuthStore = create((set) => ({
    token: localStorage.getItem("token") || null,
    user: null,

    setToken: (token) => {
        localStorage.setItem("token",token)
        set({token});
    },

    setUser: (user) => set({user}),

    logout: () => {
        localStorage.removeItem("token")
        set({ token: null, user: null })
    }
}))
export default useAuthStore;