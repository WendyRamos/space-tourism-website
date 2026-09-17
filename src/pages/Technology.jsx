import { useState } from "react";
import { useSpace } from "../hooks/useSpace";

function Technology() {
  const { content: technologies, loading } = useSpace("technology");

  const [activeTechnology, setActiveTechnology] = useState("Launch vehicle");
  const currentTechnology = technologies.find(
    (t) => t.name === activeTechnology,
  );

  if (loading) return <h2>Loading Technology...</h2>;
  return (
    <div className="flex flex-col justify-start md:justify-center items-end pt-4 lg:h-[calc(100vh-136px)] lg:pl-16 xl:pl-0">
      <main className="xl:w-[1110px] 2xl:w-[1325px] xl:h-[540px] text-white grid grid-rows-[30px_1fr]">
        <h3 className="text-base md:text-2xl tracking-widest text-center md:text-start md:px-16 lg:px-0">
          <strong className="mr-4 text-gray-space">03</strong>SPACE LAUNCH 101
        </h3>
        <article className="flex flex-col lg:flex-row justify-between items-center w-full lg:h-[400px] place-self-center">
          <section className="lg:w-1/2 flex flex-col lg:flex-row items-center gap-6 md:gap-14 h-full order-2 lg:order-1">
            <nav
              className="flex lg:flex-col gap-6"
              aria-label="Technology selection"
            >
              {technologies.map((_, index) => (
                <button
                  key={technologies[index].name}
                  aria-label={`Select ${technologies[index].name}`}
                  onClick={() => setActiveTechnology(technologies[index].name)}
                  className={`w-[40px] h-[40px] md:w-[70px] md:h-[70px] rounded-full border-1 border-gray-space cursor-pointer text-lg md:text-3xl font-bellefair
                    ${activeTechnology === technologies[index].name ? "bg-white text-blue-space" : "hover:border-white"}`}
                >
                  {index + 1}
                </button>
              ))}
            </nav>
            <div className="px-4 md:px-16 lg:px-0 text-center lg:text-start">
              <h4 className=" md:text-3xl text-gray-space font-bellefair">
                THE TERMINOLOGY…
              </h4>
              <h2 className="text-2xl md:text-6xl font-bellefair uppercase my-6">
                {currentTechnology.name}
              </h2>
              <p className="text-base md:text-lg text-sky-blu-space">
                {currentTechnology.description}
              </p>
            </div>
          </section>
          <picture className="lg:w-1/2 flex lg:justify-end order-1 lg:order-2">
            {/* Desktop: 1024px o más */}
            <source
              media="(min-width: 1024px)"
              srcSet={
                new URL(
                  `../assets/technology/${currentTechnology.images.portrait.split("/").pop()}`,
                  import.meta.url,
                ).href
              }
            />

            {/* Tablet: 768px - 1023px */}
            <source
              media="(min-width: 768px) and (max-width: 1023px)"
              srcSet={
                new URL(
                  `../assets/technology/${currentTechnology.images.landscape.split("/").pop()}`,
                  import.meta.url,
                ).href
              }
              className="py-9"
            />

            {/* Mobile: menos de 768px */}
            <img
              src={
                new URL(
                  `../assets/technology/${currentTechnology.images.portrait.split("/").pop()}`,
                  import.meta.url,
                ).href
              }
              alt={currentTechnology.name}
              className="py-6"
            />
          </picture>
        </article>
      </main>
    </div>
  );
}

export default Technology;
