import { Route, Routes } from "react-router-dom";

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Recipes from "./components/Recipes/Recipes";
import ContactMe from "./components/ContactMe/ContactMe";
import SingleRecipeDetails from "./components/SingleRecipeDetails/SingleRecipeDetails";
import CreateRecipe from "./components/CreateRecipe/CreateRecipe";

function App() {
  return (
    <div id="wrapper">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/recipe1" element={<SingleRecipeDetails />} />
        <Route path="/create-recipe" element={<CreateRecipe />} />
        <Route path="/contacts" element={<ContactMe />} />
      </Routes>

      <Footer />

      <ScrollToTop />
    </div>
  );
}

export default App;
