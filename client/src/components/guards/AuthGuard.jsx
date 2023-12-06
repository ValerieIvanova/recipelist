import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import AuthContext from "../../contexts/authContext";
import Path from "../../components/paths";

export default function AuthGuard(props) {
    const { isAuthenticated } = useContext(AuthContext);

    if (!isAuthenticated) {
        return <Navigate to={Path.GetStarted} />;
    }

    return <Outlet />
}
