import Home from "../src/Component/Home/home"
import About from "../src/Component/About/about";
import Room from "./Component/Room/room";
import Service from "./Component/Services/service";
import Gallary from "./Component/Gallary/gallary";
import Contact from "./Component/Contact/contact"
import Footer from "./Component/Footer/footer";
import Banner from "./Component/Banner/banner";
import Googlemap from "./Component/googleMap/googlemap";
import BannerButton from "./Component/BannerButton/bannerbutton";


function App() {
  return (
    <div>
      <Home />
      <BannerButton />
      <About />
      <Room />
      <Service />
      <Banner />
      <Gallary />
      <Contact />
      <Googlemap/>
     <Footer />           
    </div>
  );
}

export default App;
