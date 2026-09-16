import { Routes, Route } from "react-router-dom"
import { useLocation } from 'react-router-dom';
import Header from "./layouts/Header";
import Home from "./pages/Home"
import Destination from "./pages/Destination"
import Crew from "./pages/Crew"
import Technology from "./pages/Technology"

function App() {
  const location = useLocation();
  
  // Mapeamos la ruta a la clase de fondo correspondiente
  const getBgClass = () => {
    switch (location.pathname) {
      case '/': return "bg-[url('./assets/home/background-home-mobile.jpg')] md:bg-[url('./assets/home/background-home-tablet.jpg')] lg:bg-[url('./assets/home/background-home-desktop.jpg')]";
      case '/destination': return "bg-[url('./assets/destination/background-destination-mobile.jpg')] md:bg-[url('./assets/destination/background-destination-tablet.jpg')] lg:bg-[url('./assets/destination/background-destination-desktop.jpg')]";
      case '/crew': return "bg-[url('./assets/crew/background-crew-mobile.jpg')] md:bg-[url('./assets/crew/background-crew-tablet.jpg')] lg:bg-[url('./assets/crew/background-crew-desktop.jpg')]";
      case '/technology': return "bg-[url('./assets/technology/background-technology-mobile.jpg')] md:bg-[url('./assets/technology/background-technology-tablet.jpg')] lg:bg-[url('./assets/technology/background-technology-desktop.jpg')]";
      default: return "bg-black";
    }
  };
  
  return (
    <div className={`min-h-screen overflow-hidden bg-cover flex flex-col bg-blue-space font-barlow ${getBgClass()}`}>
      <Header />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>
    </div>
  )
}

export default App
