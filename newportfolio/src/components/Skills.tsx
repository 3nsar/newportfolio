import reactIcon from "../icons/react.png"
import jsIcon from "../icons/js.png"
import git from "../icons/git.png"
import firebase from "../icons/firebase.png"
import vite from "../icons/vite.png"
import webmot from "../icons/webmot.png"
import npm from "../icons/npm-logo.png"
import sass from "../icons/sass.png"
import scss from "../icons/scss.png"
import tailwind from "../icons/tailwind.png"
import html5Icon from "../icons/html5.png"
import cssIcon from "../icons/css.png"
import boot from "../icons/Bootstrap.png"
import reactBoot from "../icons/reactbootstrap.png"
import phpIcon from "../icons/PHP.png"
import sqlIcon from "../icons/MySQL.png"

const skills = [
  { img: reactIcon, name: "React" },
  { img: tailwind, name: "Tailwind" },
  { img: jsIcon, name: "Javascript" },
  { img: webmot, name: "Framer Motion" },
  { img: sass, name: "Sass" },
  { img: scss, name: "Scss" },
  { img: html5Icon, name: "Html 5" },
  { img: cssIcon, name: "Css 3" },
  { img: git, name: "Git" },
  { img: phpIcon, name: "Php" },
  { img: sqlIcon, name: "Mysql" },
  { img: npm, name: "Npm" },
  { img: firebase, name: "Firebase" },
  { img: vite, name: "Vite" },
  { img: boot, name: "Bootstrap" },
  { img: reactBoot, name: "React-Bootstrap" },

]

const Skills = () => {
  return (
    <div id="skills" className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-8">
      <div className="text-center items-center flex flex-col max-w-6xl w-full">
        <h1 className="mt-16 sm:mt-24 md:mt-48 text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-indigo-500 to-indigo-700 mb-4 sm:mb-6">
          Skills
        </h1>
        <p className="text-gray-400 font-semibold text-base sm:text-lg md:text-xl text-center md:text-left">
          Das sind die Tools, die ich gerne beim Entwickeln <br className="hidden md:block" /> von meinen Projekten
          verwende.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mt-8 sm:mt-16 md:mt-24">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col bg-zinc-900 items-center justify-center p-3 sm:p-4 md:p-6
              rounded-lg border border-zinc-900 hover:border-indigo-500
              transition-all duration-300 hover:shadow-md relative
              text-gray-400 hover:text-indigo-500 text-xs sm:text-sm md:text-base font-medium
              group overflow-hidden"
            >
              {/* Dark overlay that disappears on hover */}
              <div className="absolute inset-0 bg-black/40 opacity-100 group-hover:opacity-0 transition-opacity duration-300 z-10 pointer-events-none"></div>
              <div className="h-10 w-10 sm:h-14 sm:w-14 md:h-20 md:w-20 flex items-center justify-center mb-2 sm:mb-3 md:mb-4 relative z-20">
                <img
                  src={skill.img}
                  alt={skill.name}
                  title={skill.name}
                  className="max-h-full max-w-full brightness-50 object-contain transition-transform duration-300 group-hover:scale-110 group-hover:brightness-100"
                />
              </div>
              <p className="relative z-20">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills

