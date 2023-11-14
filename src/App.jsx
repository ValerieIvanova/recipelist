import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import MostPopularRecipes from "./components/MostPopularRecipes/MostPopularRecipes";
import AllRecipes from "./components/AllRecipes/AllRecipes";

function App() {
  return (
    <div id="wrapper">
      <Header />

      <Routes>
        <Route path="/" element={<MostPopularRecipes />} />
        <Route path="/all-recipes" element={<AllRecipes />} />
      </Routes>

      <Footer />

      <ScrollToTop />
    </div>
  );
}

export default App;
