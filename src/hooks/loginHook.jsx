import axios from 'axios';

import userStore from "../store/loginStore.js";

export const useLogin = () => {
    const { setLoginState,  loginData} = userStore();

    const loginHook = async (email, password) => {
        try {
            const response = await axios.post('http://localhost:3001/api/auth/login', {
                email,
                password,
            });
            if (response.status === 200) {
                loginData(response.data);
                setLoginState(true);
                return response;
            }
        } catch (error) {
            console.log(error);
        }
    }
    const login = async (email, password) => {
        try {
        const response = await axios.post('http://localhost:3001/api/auth/login', {
            email,
            password,
        });
        return response.data;
        } catch (error) {
        console.log(error);
        }
    };
    return { login , loginHook};
}
