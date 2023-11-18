import React from "react";
import {
  Navbar,
  Hero,
  About,
  Work,
  Projects,
  Coursework,
  Education,
  Databar,
  Footer,
} from "./components";

function App() {
  return (
    <React.Fragment>
      <div className="flex flex-col sm:flex-row h-screen bg-gray-blue font-poppins w-full md:p-2 gap-2 text-base">
        <div className="w-full sm:w-[82%] overflow-y-scroll scrollbar-hide px-2 sm:px-10 text-gray-500">
          <Navbar />
          <div className="flex flex-col gap-6">
            <Hero />
            <About />
            <Work />
            <Projects />
            <Coursework />
            <Education />
            <Footer />
          </div>
        </div>
        <Databar customClass={"hidden sm:flex"} />
      </div>
    </React.Fragment>
  );
}

export default App;
