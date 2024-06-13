import { FaArrowRight, FaIcons, FaPersonBooth } from "react-icons/fa6"

const FeatureCard = ({ title, desc }) => {
   return (
      <div className="w-full px-3 py-8 border shadow-sm rounded-xl">
         <div className="flex justify-center pb-6">
            <div className="flex items-center justify-center p-3 text-xl rounded-full shadow-lg text-secondary">
               <FaPersonBooth />
            </div>
         </div>
         <div className="flex flex-col items-center text-center ">
            <h1 className="px-3 font-bold lg:pb-5 text-xlg">{title}</h1>
            <p className="pb-5 text-md">{desc}</p>
            <button className="flex items-center gap-2 font-bold text-md text-primary hover:text-secondary">
               <span>Read More
               </span>
               <FaArrowRight className="text-md text-secondary" />
            </button>
         </div>
      </div>
   )
}

export default FeatureCard