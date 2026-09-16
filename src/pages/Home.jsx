import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div className="section-container my-auto">
      <main className="xl:w-[1110px] xl:h-[400px] text-white flex items-end">
        <div className="flex items-center flex-col gap-12 lg:gap-0 lg:flex-row lg:justify-between  w-full">
          <section className="w-[350px] md:w-[500px] text-center lg:text-left">
            <h1 className="text-base sm:text-3xl tracking-widest text-gray-space">
              SO, YOU WANT TO TRAVEL TO
            </h1>
            <h2 className="font-bold text-7xl sm:text-[144px] font-bellefair py-8">
              SPACE
            </h2>
            <p className="text-sm sm:text-lg">
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </section>
          <section
            className="w-[180px] h-[180px] md:w-[250px] md:h-[250px] rounded-full bg-white flex items-center justify-center transition-all duration-500 ease-out
    hover:ring-[88px] hover:ring-white/10"
          >
            <NavLink
              className=" text-blue-space text-4xl font-bellefair"
              aria-label="Explore the different planets and destinations"
              to="/destination"
            >
              EXPLORE
            </NavLink>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Home;
