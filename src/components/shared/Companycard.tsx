


import cardimage from "../../assets/cardimage.png"
import { Companylogo } from "./Companylogo";
import { Followedby } from "./Followedby";
import { Pill } from "./Pill";

type CompanycardProps = {
  data: {
    id: number;
    name: string;
    situation: string;
    desc: string;
    category: string;
    strategy: string;
    isLive: boolean;
    image: string;
  }
}


export function Companycard({ data }: CompanycardProps) {
  return (
    <div className="p-4 2xl:w-[514px]   lg:w-[320px] xl:w-[400px] w-[355px] md:w-auto ">
      <div className="h-full border-1  rounded-lg overflow-hidden">

        {/* Company Logo */}
        <img className=" md:w-full h-[262px]  object-cover md:object-center" src={cardimage} alt="blog" />

        {/* Image  */}
        <div className="flex  justify-between -mb-28 relative bottom-[120px] " >
      
          <div className="relative  left-[31px] z-10 ">
            <Companylogo img={data.image} />
            
          </div>

          <div className={` relative bottom-32 right-16  ${!data.isLive && 'invisible'} `}>  <Pill text={"Live"} color={"bg-pill-live"} width={"xl:w-[178px]"}
              height={"xl:h-[29px]"} textColor={"text-white"} key={data.id} lineHeight="leading-[26px]" textSize="text-[16px]" padding="pt-1"  /></div>

          {/* Situation */}
          <div className=" relative right-3  md:right-16 lg:right-16  xl:right-20 2xl:right-4 top-14">

            <Pill text={data.situation} color={"bg-pill-bgThird"} width={"xl:w-[178px]"}
              height={"xl:h-[38px]"} textColor={"text-pill-textThird"} key={data.id} lineHeight="leading-[26px]" textSize="text-[16px]" padding="pt-2" />
            
          </div>
        </div>


        {/* White Card  */}
        <div className="bg-white px-9 py-9">

        <h3 className="font-roboto font-roboto-900 text-2xl  text-black">{data.name}</h3>
          <p className="leading-[20px] mb-5 mt-5 text-textSecondary font-roboto font-roboto-400 break-normal  text-[14px]">{data.desc}</p>
          <div className="flex gap-2 justify-start ">
            <Pill text={data.category} color={"bg-pill-bgPrimary"} width={"xl:w-[163px]"} height={"xl:h-[33px]"}
              lineHeight={"leading-[26px]"} textColor={"text-pill-textPrimary"} textSize={"text-[14px]"} padding="pt-1" />
            <Pill text={data.strategy} color={"bg-pill-bgSecondary"} width={"xl:w-[178px]"} height={"xl:h-[33px]"}
              lineHeight={"leading-[26px]"} textColor={"text-pill-textSecondary"} textSize={"text-[14px]"} padding="pt-1" />

          </div>


          <hr className="border-b-[1px] border-hr mt-10 border-opacity-75 " />

          <Followedby />

        </div>





      </div>
    </div>
  )
}
