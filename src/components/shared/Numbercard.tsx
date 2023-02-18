import { Headertext } from "./Text";

type NumberCardProps = {
  upperText: string;
  lowerText: string;
}

export function Numbercard({upperText,lowerText}:NumberCardProps) {
  return (

   
   
      
        <div className="p-4 md:w-1/2 sm:w-1/2 w-full lg:w-1/2  xl:w-1/3 2xl:w-1/4  ">

          <div className="border-2 border-gray-800 px-6 py-12 xl:w-[350px] xl:h-[230px]
         rounded-[20px] lg:-ml-5 bg-gradient-to-b from-numbers-gradStart bg-opacity-70
           ">

            <Headertext text={upperText} addtionalStyle="text-start" />

            <hr className="border-b-[1px] border-hr  border-opacity-75" />
            <p className="font-roboto font-roboto-400 leading-[29px] text-[25px] text-white text-start mt-5 ">{lowerText}</p>

          </div>
        </div>



   
    
  )
}
