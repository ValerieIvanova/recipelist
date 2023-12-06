import { createContext } from "react";
import { useNavigate } from "react-router-dom";

import * as authService from "../services/authService";
import Path from "../components/paths";
import usePersistedState from "../hooks/usePersistedState";

const AuthContext = createContext();

AuthContext.displayName = "AuthContext";

export const AuthProvider = ({ children }) => {

    const navigate = useNavigate();
    const [auth, setAuth] = usePersistedState('auth', {})

    const loginSubmitHandler = async (values) => {
        const result = await authService.login(values.email, values.password);
        setAuth(result);
        localStorage.setItem("accessToken", result.accessToken);
        navigate(-1);
    };

    const registerSubmitHandler = async (values) => {
        const result = await authService.register(
            values.email,
            values.username,
            values.password
        );
        setAuth(result);
        localStorage.setItem("accessToken", result.accessToken);
        navigate(Path.Home);
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
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
