
const About = () => {
    return (
      <div id="about" className="flex flex-col items-center  justify-items-center px-4 sm:px-8 py-12 sm:py-16">
        <div className="text-center max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 md:gap-x-20">
            {/* Über mich section */}
            <div className="space-y-4 sm:space-y-6 flex flex-col items-center mt-8 sm:mt-16 md:mt-24 md:items-start text-center md:text-left">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-indigo-500 to-indigo-700 mb-4 sm:mb-6">
                Über mich
              </h1>
              <ul className="space-y-2 sm:space-y-3 font-semibold text-base sm:text-lg md:text-xl text-gray-400">
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-2 mt-1">•</span>
                  <span>Geboren und aufgewachsen in <span className="text-gray-200">Wien</span></span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-2 mt-1">•</span>
                  <span>
                    Informatik <span className="text-gray-200">Dual-Student</span> <br />
                    an dem FH-Technikum Wien
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-2 mt-1">•</span>
                  <span><span className="text-gray-200">+3 Jahre </span>Erfahrung mit <span className="text-gray-200">Web-Development</span></span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-2 mt-1">•</span>
                  <span><span className="text-gray-200">+35</span> Projekte</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-2 mt-1">•</span>
                  <span><span className="text-gray-200">+700</span> Commits auf Github</span>
                </li>
              </ul>
            </div>
  
            {/* Ausbildungen section */}
            <div className="space-y-4 sm:space-y-6 flex flex-col items-center mt-12 sm:mt-16 md:mt-24 md:items-start text-center md:text-left">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-indigo-500 to-indigo-700 mb-4 sm:mb-6">
                Ausbildungen
              </h1>
              <ul className="space-y-2 sm:space-y-3 font-semibold text-base sm:text-lg md:text-xl text-gray-400">
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-2 mt-1">•</span>
                  <span>FH-Technikum Wien (2024 - derzeitig)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-2 mt-1">•</span>
                  <span>Johannes Kepler Universität (2020 - 2023)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-2 mt-1">•</span>
                  <span>Realgymnasium (2012 - 2020)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default About
  