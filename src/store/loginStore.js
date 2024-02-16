import { create } from "zustand";

const userStore = create((set) => ({
    userDetails: JSON.parse(localStorage.getItem("userDetails")) || null,
    loginData: (user) => {
        set({ userDetails: user });
        localStorage.setItem("userDetails", JSON.stringify(user));
    },
    logout: () => {
        set({ userDetails: null });
    },
}));

export default userStore;
