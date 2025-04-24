import './styles/variables.scss';
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import Overview from "./components/Overview/Overview";
import Footer from "./components/Footer/Footer";
import Locations from "./components/Locations/Locations";
import WeeklyOffer from "./components/WeeklyOffer/WeeklyOffer";
import Subscribe from "./components/Subscribe/Subscribe";
import AboutSection from "./components/AboutSection/AboutSection";
import Instruction from "./components/Instruction/Instruction";
import Reviews from "./components/Reviews/Reviews";

function App() {
  return (
      <div className="App">
          <Header/>
          <HeroSection/>
          <Overview/>
          <Locations/>
          <WeeklyOffer/>
          <Subscribe/>
          <AboutSection/>
          <Instruction/>
          <Reviews/>
          <Footer/>
      </div>
  );
}

export default App;
