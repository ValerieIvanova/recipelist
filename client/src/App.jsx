import { Route, Routes } from "react-router-dom";

import { AuthProvider } from "./contexts/authContext";
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
    return (
        <AuthProvider>
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
                        path={Path.DetailsRecipe(":recipeId")}
                        element={<DetailsRecipe />}
                    />
                    <Route path={Path.Contacts} element={<Contacts />} />
                    <Route path={Path.GetStarted} element={<GetStarted />} />
                    <Route path={Path.Logout} element={<Logout />} />
                </Routes>

                <Footer />

                <ScrollToTop />
            </div>
        </AuthProvider>
    );
}

export default App;
