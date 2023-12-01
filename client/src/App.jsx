import { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import * as authService from "./services/authService";
import AuthContext from "./contexts/authContext";
import Path from "./components/paths";

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/scrollToTop/ScrollToTop";
import Contacts from "./components/contacts/Contacts";
import DetailsRecipe from "./components/detailsRecipe/DetailsRecipe";
import CreateRecipe from "./components/createRecipe/CreateRecipe";
import AllRecipes from "./components/allRecipes/AllRecipes";
import GetStarted from "./components/getStarted/GetStarted";
import MyRecipes from "./components/myRecipes/MyRecipes";
import Logout from "./components/logout/Logout";

function App() {
    const navigate = useNavigate()
    const [auth, setAuth] = useState(() => {
        localStorage.removeItem('accessToken');
        return {}
    });

    const loginSubmitHandler = async (values) => {
        const result = await authService.login(values.email, values.password);
        setAuth(result);
        localStorage.setItem('accessToken', result.accessToken);
        navigate(Path.Home);
    };

    const registerSubmitHandler = async (values) => {
        const result = await authService.register(values.email, values.username, values.password);
        setAuth(result);
        localStorage.setItem('accessToken', result.accessToken);
        navigate(Path.Home);
    }

    const logoutHandler = () => {
        setAuth({});
        localStorage.removeItem('accessToken');
        navigate(Path.Home);
    }

    const values = {
        loginSubmitHandler,
        registerSubmitHandler,
        logoutHandler,
        username: auth.username,
        email: auth.email,
        isAuthenticated: !!auth.accessToken,
    }

    return (
        <AuthContext.Provider value={values}>
            <div id="wrapper">
                <Header />

                <Routes>
                    <Route path={Path.Home} element={<Home />} />
                    <Route path={Path.Recipes} element={<AllRecipes />} />
                    <Route path={Path.MyRecipes} element={<MyRecipes />} />
                    <Route
                        path={Path.CreateRecipe}
                        element={<CreateRecipe />}
                    />
                    <Route
                        path={Path.DetailsRecipe}
                        element={<DetailsRecipe />}
                    />
                    <Route path={Path.Contacts} element={<Contacts />} />
                    <Route path={Path.GetStarted} element={<GetStarted />} />
                    <Route path={Path.Logout} element={<Logout />} />
                </Routes>

                <Footer />

                <ScrollToTop />
            </div>
        </AuthContext.Provider>
    );
}

export default App;
