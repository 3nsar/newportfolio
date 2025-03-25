import exo from "../assets/exoandco.png"
import moon from "../assets/moon.png"
import eno from "../assets/ensarpt.png"
import nft from "../assets/nftdevs.png"

const Projects = () => {
  return (
    <div id="projects" className="min-h-screen flex flex-col items-center justify-items-center px-4 sm:px-8">
      <div className="text-center items-center flex flex-col max-w-6xl w-full">
        <h1 className="mt-16 sm:mt-24 md:mt-48 text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-indigo-500 to-indigo-700 mb-4 sm:mb-6 pb-3">
          Projekte
        </h1>

        <p className="text-gray-400 font-semibold text-base sm:text-lg md:text-xl text-center md:text-left mb-8 sm:mb-16 md:mb-24">
          Hier sind einige Projekte, die meine Fähigkeiten <br className="hidden md:block" /> unter Beweis stellen.
        </p>

        {/* Grid container with justified cards - 1 card per row on mobile, 2 on larger screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-8 md:gap-10 lg:gap-16">
          {/* Card 1 */}
          <div className="bg-zinc-900/50 backdrop-blur-sm rounded-xl border border-indigo-500/30 shadow-lg shadow-indigo-500/10 overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-indigo-500/20 hover:border-indigo-500/60 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <img className="h-52 w-full object-cover" src={exo || "/placeholder.svg"} alt="Exo & Co project" />
            </div>
            <div className="p-5 flex flex-col h-[180px]">
              <h5 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors duration-300">
                Exo & Co
              </h5>
              <div className="mb-4 flex-grow">
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="px-2 py-1 bg-indigo-900/40 text-indigo-300 text-xs rounded-md">React</span>
                  <span className="px-2 py-1 bg-indigo-900/40 text-indigo-300 text-xs rounded-md">Scss</span>
                  <span className="px-2 py-1 bg-indigo-900/40 text-indigo-300 text-xs rounded-md">Framer Motion</span>
                </div>
              </div>
              <div className="flex justify-start gap-3 mt-auto">
                <a
                  href="https://exoandco.netlify.app"
                  target="_blank"
                  className="w-20 px-0 py-2 text-sm font-medium text-center bg-indigo-600/80 hover:bg-indigo-600 rounded-lg transition-colors duration-300 backdrop-blur-sm"
                  rel="noreferrer"
                >
                  Live
                </a>
                <a
                  href="https://github.com/3nsar/digital-agency"
                  target="_blank"
                  className="w-20 px-0 py-2 text-sm font-medium text-center bg-zinc-700/80 hover:bg-zinc-700 rounded-lg transition-colors duration-300 backdrop-blur-sm"
                  rel="noreferrer"
                >
                  Code
                </a>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-zinc-900/50 backdrop-blur-sm rounded-xl border border-indigo-500/30 shadow-lg shadow-indigo-500/10 overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-indigo-500/20 hover:border-indigo-500/60 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <img className="h-52 w-full object-cover" src={moon || "/placeholder.svg"} alt="Crypto-Moon project" />
            </div>
            <div className="p-5 flex flex-col h-[180px]">
              <h5 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors duration-300">
                Crypto-Moon
              </h5>
              <div className="mb-4 flex-grow">
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="px-2 py-1 bg-indigo-900/40 text-indigo-300 text-xs rounded-md">React</span>
                  <span className="px-2 py-1 bg-indigo-900/40 text-indigo-300 text-xs rounded-md">Firebase</span>
                  <span className="px-2 py-1 bg-indigo-900/40 text-indigo-300 text-xs rounded-md">Css 3</span>
                  <span className="px-2 py-1 bg-indigo-900/40 text-indigo-300 text-xs rounded-md">Material Ui</span>
                </div>
              </div>
              <div className="flex justify-start gap-3 mt-auto">
                <a
                  href="https://crypto-moon-e93ab.web.app/"
                  target="_blank"
                  className="w-20 px-0 py-2 text-sm font-medium text-center bg-indigo-600/80 hover:bg-indigo-600 rounded-lg transition-colors duration-300 backdrop-blur-sm"
                  rel="noreferrer"
                >
                  Live
                </a>
                <a
                  href="https://github.com/3nsar/crypto-moon"
                  target="_blank"
                  className="w-20 px-0 py-2 text-sm font-medium text-center bg-zinc-700/80 hover:bg-zinc-700 rounded-lg transition-colors duration-300 backdrop-blur-sm"
                  rel="noreferrer"
                >
                  Code
                </a>
                <a
                  href="https://www.youtube.com/watch?v=BlRrCEzMBp8"
                  target="_blank"
                  className="w-20 px-0 py-2 text-sm font-medium text-center bg-zinc-700/80 hover:bg-zinc-700 rounded-lg transition-colors duration-300 backdrop-blur-sm"
                  rel="noreferrer"
                >
                  Video
                </a>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-zinc-900/50 backdrop-blur-sm rounded-xl border border-indigo-500/30 shadow-lg shadow-indigo-500/10 overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-indigo-500/20 hover:border-indigo-500/60 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <img className="h-52 w-full object-cover" src={eno || "/placeholder.svg"} alt="Portfolio project" />
            </div>
            <div className="p-5 flex flex-col h-[180px]">
              <h5 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors duration-300">
                Portfolio
              </h5>
              <div className="mb-4 flex-grow">
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="px-2 py-1 bg-indigo-900/40 text-indigo-300 text-xs rounded-md">React</span>
                  <span className="px-2 py-1 bg-indigo-900/40 text-indigo-300 text-xs rounded-md">Tailwind Css</span>
                </div>
              </div>
              <div className="flex justify-start gap-3 mt-auto">
                <a
                  href="https://ensar-mehmedovic.netlify.app/"
                  target="_blank"
                  className="w-20 px-0 py-2 text-sm font-medium text-center bg-indigo-600/80 hover:bg-indigo-600 rounded-lg transition-colors duration-300 backdrop-blur-sm"
                  rel="noreferrer"
                >
                  Live
                </a>
                <a
                  href="https://github.com/3nsar/newportfolio"
                  className="w-20 px-0 py-2 text-sm font-medium text-center bg-zinc-700/80 hover:bg-zinc-700 rounded-lg transition-colors duration-300 backdrop-blur-sm"
                >
                  Code
                </a>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-zinc-900/50 backdrop-blur-sm rounded-xl border border-indigo-500/30 shadow-lg shadow-indigo-500/10 overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-indigo-500/20 hover:border-indigo-500/60 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <img className="h-52 w-full object-cover" src={nft || "/placeholder.svg"} alt="Nft-Devs project" />
            </div>
            <div className="p-5 flex flex-col h-[180px]">
              <h5 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors duration-300">
                Nft-Devs
              </h5>
              <div className="mb-4 flex-grow">
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="px-2 py-1 bg-indigo-900/40 text-indigo-300 text-xs rounded-md">React</span>
                  <span className="px-2 py-1 bg-indigo-900/40 text-indigo-300 text-xs rounded-md">Framer Motion</span>
                  <span className="px-2 py-1 bg-indigo-900/40 text-indigo-300 text-xs rounded-md">Css 3</span>
                </div>
              </div>
              <div className="flex justify-start gap-3 mt-auto">
                <a
                  href="https://nftdevs.netlify.app/"
                  className="w-20 px-0 py-2 text-sm font-medium text-center bg-indigo-600/80 hover:bg-indigo-600 rounded-lg transition-colors duration-300 backdrop-blur-sm"
                >
                  Live
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects

