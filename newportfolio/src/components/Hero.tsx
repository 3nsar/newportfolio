import ausweis from "../assets/ausweis.jpg"
import { FaGithub } from "react-icons/fa"
import { MdMail, MdPhone } from "react-icons/md"
import ensarCv from "../assets/ensar-cv.pdf"

 const Hero = () => {
  return (
 
      <div className="min-h-screen flex flex-col items-center justify-center  py-10  sm:flex-row  sm:justify-start px-4 sm:px-8 sm:py-0">
        <div className="sm:ml-8 md:ml-20 text-center sm:text-left mb-8 sm:mb-0">
          <p className="text-2xl  underline decoration-indigo-700 sm:text-3xl md:text-4xl">Hallo, ich bin Ensar</p>
          <p className="text-4xl sm:text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-800 via-indigo-500 to-indigo-300 mt-2">
            Frontend Developer
          </p>
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 mt-6 sm:mt-8">
          <a 
              href={ensarCv}
               download='ensar-cv'
               className="cursor-pointer text-indigo-500 py-2 px-6 sm:py-3 sm:px-8 rounded-2xl border border-indigo-500 flex items-center justify-center text-base sm:text-lg font-medium h-10 sm:h-12 transition-colors hover:bg-indigo-600 hover:text-gray-200 hover:border-indigo-600"
          >
                      Download CV
          </a>

            <a href="https://github.com/3nsar" target="_blank" className="text-indigo-500 p-2 rounded-full border border-indigo-500 flex items-center justify-center h-10 w-10 transition-colors hover:bg-indigo-600 hover:text-gray-200 hover:border-indigo-600">
                <FaGithub className="w-5 h-5" />
            </a>
            <a href="mailto:ensar.m021@gmail.com" className="text-indigo-500 p-2 rounded-full border border-indigo-500 flex items-center justify-center h-10 w-10 transition-colors hover:bg-indigo-600 hover:text-gray-200 hover:border-indigo-600">
                <MdMail className="w-5 h-5" />
            </a>
            <a href="tel:+43677189175" className="text-indigo-500 p-2 rounded-full border border-indigo-500 flex items-center justify-center h-10 w-10 transition-colors hover:bg-indigo-600 hover:text-gray-200 hover:border-indigo-600">
                 <MdPhone className="w-5 h-5" />
            </a>
          </div>
        </div>
        <img
          className="h-48 w-48 sm:h-64 sm:w-64 md:h-80 md:w-80 object-cover sm:ml-6 md:ml-12 rounded-full"
          src={ausweis}
          alt="Profile"
        />
      </div>
    
  )
}

export default Hero