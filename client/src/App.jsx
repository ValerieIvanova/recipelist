import { Route, Routes } from "react-router-dom";

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import ContactMe from "./components/contactMe/ContactMe";
import DetailsRecipe from "./components/detailsRecipe/DetailsRecipe";
import CreateRecipe from "./components/CreateRecipe/CreateRecipe";
import AllRecipes from "./components/AllRecipes/AllRecipes"

function App() {
  return (
    <div id="wrapper">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} /> */}
        <Route path="/recipes" element={<AllRecipes />} />
        <Route path="/recipes/create" element={<CreateRecipe />} />
        <Route path="/recipes/:recipeId" element={<DetailsRecipe />} />
        <Route path="/contacts" element={<ContactMe />} />
      </Routes>

      <Footer />

      <ScrollToTop />
    </div>
  );
}

export default App;
