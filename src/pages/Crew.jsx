import { useState } from "react";
import { useSpace } from "../hooks/useSpace";

function Crew() {
  const { content: crews, loading } = useSpace("crew");
  const [activeCrew, setActiveCrew] = useState("Douglas Hurley");
  const currentCrew = crews.find((c) => c.name === activeCrew);
  if (loading) return <h2>Loading crews...</h2>;
  if (!currentCrew) return <h2>Crew member not found</h2>;
  return (
    <div className="section-container mt-8 mx-4 lg:mt-0 lg:mx-0 md:px-16 xl:px-0">
      <main className="xl:w-[1110px] xl:h-[540px] text-white grid grid-rows-[30px_1fr]">
        <h3 className="text-xl lg:text-2xl tracking-widest text-center lg:text-start">
          <strong className="mr-4 text-gray-space">02</strong>MEET YOUR CREW
        </h3>
        <article className="w-full flex flex-col pb-4">
          <ul className="flex w-full h-full">
            <li
              key={currentCrew.name}
              className="w-full flex flex-col lg:flex-row items-center text-center lg:text-start md:gap-20 lg:gap-0 mt-8 lg:mt-0"
            >
              <section className="grid grid-rows-[1fr_30px] gap-4 md:gap-8 lg:gap-0 lg:grid-rows-[350px_30px] xl:grid-rows-[450px_30px] lg:w-1/2">
                <div className="place-self-center">
                  <h4 className="text-2xl lg:text-3xl opacity-50 uppercase font-bellefair">
                    {currentCrew.role}
                  </h4>
                  <h2 className="text-4xl lg:text-6xl uppercase font-bellefair pt-4 pb-6">
                    {currentCrew.name}
                  </h2>
                  <p className="text-sky-blu-space leading-relaxed text-base lg:text-lg">
                    {currentCrew.bio}
                  </p>
                </div>
                <nav className="flex justify-center lg:justify-start " aria-label="Crew member selection">
                  {crews.map((_, index) => (
                    <button
                      key={index}
                      aria-label={`Select ${crews[index].name}`}
                      onClick={() => setActiveCrew(crews[index].name)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ml-1 mr-5
                                  ${activeCrew === crews[index].name ? "bg-white scale-125 cursor-pointer" : "bg-white/20 hover:bg-white/50 cursor-pointer"}`}
                    />
                  ))}
                </nav>
              </section>
              <figure className="lg:w-1/2 flex items-end justify-end max-h-[500px]">
                <img
                  src={
                    new URL(
                      `../assets/crew/${currentCrew.images.webp.split("/").pop()}`,
                      import.meta.url,
                    ).href
                  }
                  alt={currentCrew.name}
                  className="h-[250px] sm:h-[350px] md:h-[450px] lg:h-[400px] xl:h-[500px] object-contain mask-fade-out"          
                />
              </figure>
            </li>
          </ul>
        </article>
      </main>
    </div>
  );
}

export default Crew;
