import { createContext } from "react";
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import * as authService from "../services/authService";
import Path from "../components/paths";
import usePersistedState from "../hooks/usePersistedState";

const AuthContext = createContext();

AuthContext.displayName = "AuthContext";

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const [auth, setAuth] = usePersistedState("auth", {});

    const loginSubmitHandler = async (values) => {
        try {
            const result = await authService.login(
                values.email,
                values.password
            );
            setAuth(result);
            localStorage.setItem("accessToken", result.accessToken);
            navigate(-1);
        } catch (error) {
            console.log(error);
            if (error.message && error.code === 403) {
                toast.error("Incorrect email or password");
            } else {
                toast.error(error.message);
            }
        }
    };

    const registerSubmitHandler = async (values) => {
        try {
            const result = await authService.register(
                values.email,
                values.username,
                values.password
            );
            setAuth(result);
            localStorage.setItem("accessToken", result.accessToken);
            navigate(Path.Home);
        } catch (error) {
            console.log(error);
            if (error.message && error.code === 409) {
                toast.error("User with that email already exists");
            } else {
                toast.error(error.message);
            }
        }
    };

    const logoutHandler = () => {
        setAuth({});
        localStorage.removeItem("accessToken");
        navigate(Path.Home);
    };

    const values = {
        loginSubmitHandler,
        registerSubmitHandler,
        logoutHandler,
        userId: auth._id,
        username: auth.username,
        email: auth.email,
        isAuthenticated: !!auth.accessToken,
    };

    return (
        <>
        <ToastContainer />
        <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
        </>
    );
};

export default AuthContext;
