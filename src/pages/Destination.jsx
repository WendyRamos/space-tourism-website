import { useState } from "react";
import { useSpace } from "../hooks/useSpace";

function Destination() {
  const { content: planets, loading } = useSpace("destinations");

  const [activePlanet, setActivePlanet] = useState("Moon");

  const currentPlanet = planets.find((p) => p.name === activePlanet);

  if (loading) return <h2>Loading planet...</h2>;
  return (
    <div className="section-container mt-8 px-10 md:px-16 lg:mt-0 lg:mx-0 xl:px-0">
      <main className="xl:w-[1110px] xl:h-[540px] text-white lg:grid lg:grid-rows-[30px_1fr]">
        <h3 className="text-base md:text-xl lg:text-2xl tracking-widest text-center lg:text-left">
          <strong className="mr-4 text-gray-space">01</strong>PICK YOUR
          DESTINATION
        </h3>
        <article className="flex flex-col lg:flex-row justify-between items-center w-full lg:h-[400px] place-self-center">
          <figure className="lg:w-1/2 my-8 lg:my-0">
            <img
              src={
                new URL(
                  `../assets/destination/image-${currentPlanet.name.toLowerCase()}.webp`,
                  import.meta.url,
                ).href
              }
              alt={currentPlanet.name}
              className="w-[200px] md:w-[300px] xl:w-[400px]"
            />
          </figure>
          <section className="lg:w-1/2 flex flex-col items-center lg:items-start lg:justify-between h-full text-center lg:text-left">
            <ul className="flex flex-row gap-8">
              {planets.map((planet) => (
                <li
                  className={`text-sm md:text-base pb-2 ${activePlanet === planet.name ? "border-b-4" : "hover:border-b-4 hover:border-white/50 "}`}
                  key={planet.name}
                >
                  <button
                    className=" uppercase cursor-pointer"
                    onClick={() => setActivePlanet(planet.name)}
                  >
                    {planet.name}
                  </button>
                </li>
              ))}
            </ul>
            <div>
              <h2 className="font-bellefair text-6xl md:text-7xl lg:text-8xl uppercase pb-4 mt-8 lg:mt-0">
                {currentPlanet.name}
              </h2>
              <p className="text-base lg:text-lg border-b-1 pb-10 mb-8 lg:mb-0">
                {currentPlanet.description}
              </p>
            </div>
            <dl className="flex gap-8 lg:gap-20 uppercase">
              <div>
                <dt className="text-sm tracking-widest mb-3">Avg. Distance</dt>
                <dd className="text-xl lg:text-2xl font-bellefair">
                  {currentPlanet.distance}
                </dd>
              </div>

              <div>
                <dt className="text-sm tracking-widest mb-3">
                  Est. Travel Time
                </dt>
                <dd className="text-lg lg:text-2xl font-bellefair">
                  {currentPlanet.travel}
                </dd>
              </div>
            </dl>
          </section>
        </article>
      </main>
    </div>
  );
}

export default Destination;
