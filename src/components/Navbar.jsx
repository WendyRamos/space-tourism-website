import { useState } from "react";
import { NavLink } from "react-router-dom";
import menuHamburguer from "../assets/shared/icon-hamburger.svg"; // Ajusta tu ruta
import iconClose from "../assets/shared/icon-close.svg"; // Necesitarás el icono de cerrar

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { to: "/", id: "00", name: "HOME" },
    { to: "/destination", id: "01", name: "DESTINATION" },
    { to: "/crew", id: "02", name: "CREW" },
    { to: "/technology", id: "03", name: "TECHNOLOGY" },
  ];

  return (
    <>
      <nav className="hidden md:flex md:pr-8 2xl:pr-16 md:justify-end md:text-white md:w-[650px] lg:w-[796px] h-[96px] bg-white/5 backdrop-blur-xl">
        <ul className="flex flex-row gap-6 h-full">
          {links.map((link) => (
            <li key={link.id}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `h-full items-center flex transition-all border-b-2 ${
                    isActive
                      ? "border-white"
                      : "border-transparent hover:border-white/50"
                  }`
                }
              >
                <p className="tracking-[2.7px]">
                  <strong className="mr-[12px]">{link.id}</strong>
                  {link.name}
                </p>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <figure
        className="md:hidden mr-8 flex items-center justify-center cursor-pointer z-[100]"
        onClick={() => setIsOpen(true)}
      >
        <img src={menuHamburguer} alt="Open Menu" className="w-[32px]" />
      </figure>

      <div
        className={`fixed top-0 right-0 h-full w-[70%] bg-white/5 backdrop-blur-2xl z-[100] transition-transform duration-500 ease-in-out md:hidden ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Botón de cerrar dentro del menú */}
        <div className="flex justify-end p-8">
          <img
            src={iconClose}
            alt="Close Menu"
            className="w-[20px] cursor-pointer"
            onClick={() => setIsOpen(false)}
          />
        </div>

        <nav className="mt-16">
          <ul className="flex flex-col gap-8">
            {links.map((link) => (
              <li key={link.id} className="w-full">
                <NavLink
                  onClick={() => setIsOpen(false)} // Cerrar al hacer click
                  className={({ isActive }) =>
                    `flex items-center w-full pl-8 py-2 transition-all border-r-4 ${
                      isActive
                        ? "border-white text-white"
                        : "border-transparent text-white/70 hover:border-white/30"
                    }`
                  }
                  to={link.to}
                >
                  <p className="text-base">
                    <strong className="mr-[12px]">{link.id}</strong>
                    {link.name}
                  </p>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-transparent z-[90] md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}

export default Navbar;
