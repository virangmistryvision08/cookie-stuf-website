import { BrowserRouter } from "react-router-dom";
import "./App.css";
import ContactUs from "./components/contactUs/ContactUs";
import Feachured from "./components/feachured/Feachured";
import Footer from "./components/footer/Footer";
import HealthyRecipes from "./components/healthyRecipes/HealthyRecipes";
import Nav from "./components/nav/Nav";
import ReadOurPost from "./components/readOurPost/ReadOurPost";
import RecentReview from "./components/recentReview/RecentReview";
import Recipes from "./components/recipes/Recipes";
import Section1 from "./components/section 1/Section1";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Section1 />
        <Feachured />
        <Recipes />
        <HealthyRecipes />
        <ReadOurPost />
        <RecentReview />
        <ContactUs />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
