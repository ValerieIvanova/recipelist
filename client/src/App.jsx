import { Route, Routes } from "react-router-dom";

import { ToastContainer } from "react-toastify";

import { AuthProvider } from "./contexts/authContext";
import Path from "./components/paths";

import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/scrollToTop/ScrollToTop";
import Contacts from "./components/contacts/Contacts";
import DetailsRecipe from "./components/detailsRecipe/DetailsRecipe";
import CreateRecipe from "./components/createRecipe/CreateRecipe";
import EditRecipe from "./components/editRecipe/EditRecipe";
import AllRecipes from "./components/allRecipes/AllRecipes";
import GetStarted from "./components/getStarted/GetStarted";
import MyRecipes from "./components/myRecipes/MyRecipes";
import Logout from "./components/logout/Logout";
import AuthGuard from "./components/guards/AuthGuard";
import FoundRecipes from "./components/asideBar/search/foundRecipes";

function App() {

    return (
        <AuthProvider>
            <div id="wrapper">
                <ToastContainer />
                <Header />

                <Routes>
                    <Route element={<AuthGuard />}>
                        <Route path={Path.MyRecipes} element={<MyRecipes />} />
                        <Route
                            path={Path.CreateRecipe}
                            element={<CreateRecipe />}
                        />
                        <Route
                            path={Path.EditRecipe(":recipeId")}
                            element={<EditRecipe />}
                        />
                        <Route path={Path.Logout} element={<Logout />} />
                    </Route>

                    <Route path={Path.Home} element={<Home />} />
                    <Route path={Path.Recipes} element={<AllRecipes />} />
                    <Route
                        path={Path.DetailsRecipe(":recipeId")}
                        element={<DetailsRecipe />}
                    />
                    <Route path={Path.Search(":searchQuery")} element={<FoundRecipes />} />
                    <Route path={Path.Contacts} element={<Contacts />} />
                    <Route path={Path.GetStarted} element={<GetStarted />} />
                </Routes>

                <Footer />

                <ScrollToTop />
            </div>
        </AuthProvider>
    );
}

export default App;
