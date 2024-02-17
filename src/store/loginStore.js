import { create } from "zustand";

const userStore = create((set) => ({
    userDetails: JSON.parse(localStorage.getItem("userDetails")) || null,
    loginState: false,
    setLoginState: (state) => {
        set({ loginState: state });
    },
    loginData: (user) => {
        set({ userDetails: user });
        localStorage.setItem("userDetails", JSON.stringify(user));
    },
    logout: () => {
        set({ userDetails: null , loginState: false});
    },
}));

export default userStore;
