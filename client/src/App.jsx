import { Route, Routes } from "react-router-dom";

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import ContactMe from "./components/contactMe/ContactMe";
import DetailsRecipe from "./components/detailsRecipe/DetailsRecipe";
import CreateRecipe from "./components/CreateRecipe/CreateRecipe";
import AllRecipes from "./components/AllRecipes/AllRecipes";
import GetStarted from "./components/getStarted/GetStarted";

import Path from "./components/Path";
import { useState } from "react";

function App() {
    const [auth, setAuth] = useState({});
    const loginSubmitHandler = (values) => {
        console.log(values);
    };

    return (
        <div id="wrapper">
            <Header />

            <Routes>
                <Route path={Path.Home} element={<Home />} />
                <Route path={Path.Recipes} element={<AllRecipes />} />
                <Route path={Path.CreateRecipe} element={<CreateRecipe />} />
                <Route path={Path.DetailsRecipe} element={<DetailsRecipe />} />
                <Route path={Path.Contacts} element={<ContactMe />} />
                <Route path={Path.GetStarted} element={<GetStarted loginSubmitHandler={loginSubmitHandler}/>} />
            </Routes>

            <Footer />

            <ScrollToTop />
        </div>
    );
}

export default App;
