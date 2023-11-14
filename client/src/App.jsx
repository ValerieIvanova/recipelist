import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import MostPopularRecipes from "./components/MostPopularRecipes/MostPopularRecipes";
import AllRecipes from "./components/AllRecipes/AllRecipes";
import ContactMe from "./components/ContactMe/ContactMe";
import SingleRecipeDetails from "./components/SingleRecipeDetails/SingleRecipeDetails";

function App() {
  return (
    <div id="wrapper">
      <Header />

      <Routes>
        <Route path="/" element={<MostPopularRecipes />} />
        <Route path="/all-recipes" element={<AllRecipes />} />
        <Route path="/recipe1" element={<SingleRecipeDetails />} />
        <Route path="/contacts" element={<ContactMe />} />
      </Routes>

      <Footer />

      <ScrollToTop />
    </div>
  );
}

export default App;
