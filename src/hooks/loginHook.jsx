import axios from 'axios';

import userStore from "../store/loginStore.js";

export const useLogin = () => {
    const {loginState, setLoginState, userDetails , loginData} = userStore();



    const login = async (email, password) => {
        try {
        const response = await axios.post('http://localhost:3001/login', {
            email,
            password,
        });
        return response.data;
        } catch (error) {
        console.log(error);
        }
    };
    return { login };
}
