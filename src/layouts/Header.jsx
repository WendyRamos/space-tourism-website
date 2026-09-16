import Navbar from "../components/Navbar";
import Logo from "../assets/shared/logo.svg";

function Header() {
  return (
    <header className="flex justify-between items-center pt-6 md:pt-0 lg:pt-10">
      <img className="w-10 h-10 md:w-12 md:h-12 ml-8 md:ml-9 lg:ml-16" src={Logo} alt="Logo"></img>
      <div className="hidden xl:block bg-white w-[560px] h-px scale-y-50 -mr-33 z-[200]"></div>
      <Navbar />
    </header>
  );
}

export default Header;
