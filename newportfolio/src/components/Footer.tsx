
import { MdMail, MdPhone } from 'react-icons/md'

const Footer = () => {
  return (
      <div id='contact' className="flex flex-col items-center justify-items-center ">
      <div className="text-center items-center flex flex-col max-w-6xl w-full">
          <h1 className=' mt-48 text-4xl sm:text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-indigo-500 to-indigo-700 mb-6'>Kontakt</h1>
            <div className='flex flex-col justify-center justify-items-center mt-12'>

            <div className='flex flex-row'>
                  <a href="mailto:ensar.m021@gmail.com" target="_blank" className="text-indigo-500 p-2 rounded-full border border-indigo-500 flex items-center justify-center h-10 w-10 transition-colors hover:bg-indigo-600 hover:text-gray-200 hover:border-indigo-600">
                       <MdMail className="w-10 h-10" />
                  </a>
                  <p className="ml-5 text-xl font-semibold flex items-center justify-center">ensar.m021@gmail.com</p>
              </div>

              <div className='flex flex-row mt-5 mb-24'>
                  <a href="tel:+43677189175" target="_blank" className="text-indigo-500 p-2 rounded-full border border-indigo-500 flex items-center justify-center h-10 w-10 transition-colors hover:bg-indigo-600 hover:text-gray-200 hover:border-indigo-600">
                       <MdPhone className="w-10 h-10" />
                  </a>
                  <p className="ml-5 text-xl font-semibold flex items-center justify-center">+43 677 189175</p>
              </div>

            </div>
      </div>
    </div>
  )
}

export default Footer
