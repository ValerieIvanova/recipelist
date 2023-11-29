import { Route, Routes } from "react-router-dom";

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/scrollToTop/ScrollToTop";
import Contacts from "./components/contacts/Contacts";
import DetailsRecipe from "./components/detailsRecipe/DetailsRecipe";
import CreateRecipe from "./components/createRecipe/CreateRecipe";
import AllRecipes from "./components/allRecipes/AllRecipes";
import GetStarted from "./components/getStarted/GetStarted";

import AuthContext from "./contexts/authContext";
import Path from "./components/Path";
import { useState } from "react";

function App() {
    const [auth, setAuth] = useState({});
    const loginSubmitHandler = (values) => {
        console.log(values);
    };

    return (
        <AuthContext.Provider value={{ loginSubmitHandler }}>
            <div id="wrapper">
                <Header />

                <Routes>
                    <Route path={Path.Home} element={<Home />} />
                    <Route path={Path.Recipes} element={<AllRecipes />} />
                    <Route path={Path.CreateRecipe} element={<CreateRecipe />} />
                    <Route path={Path.DetailsRecipe} element={<DetailsRecipe />} />
                    <Route path={Path.Contacts} element={<Contacts />} />
                    <Route path={Path.GetStarted} element={<GetStarted />} />
                </Routes>

                <Footer />

                <ScrollToTop />
            </div>
        </AuthContext.Provider>
    );
}

export default App;
