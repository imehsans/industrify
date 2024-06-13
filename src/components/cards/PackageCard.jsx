import { FaCheck } from "react-icons/fa6"
import BtnWhite from "../buttons/BtnWhite"

const PackageCard = ({ data }) => {
   return (
      <div key={data.id} className={` cursor-pointer hover:bg-secondary hover:bg-opacity-10 w-full rounded-xl border px-5 py-8 space-y-5 group  divide-y-2 ${data.aosClass}`}>
         <div>
            <h1 className="font-medium text-sm-xl">{data.title}</h1>
         </div>
         <div className="pt-5 space-y-4">
            {data.desc.map((item, index) => {
               return (
                  <div key={index} className="flex items-center gap-4">
                     <div>
                        <FaCheck />
                     </div>
                     <div>
                        {item?.text}
                     </div>

                  </div>
               )
            })}
         </div>
         <div className="pt-5">
            <BtnWhite onClickFxns={data?.fxn} value={data?.btn} className={"text-md font-medium w-full py-3 group-hover:bg-secondary group-hover:text-white rounded-xl"} />

         </div>
      </div>

   )
}

export default PackageCard