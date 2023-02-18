
import items from "../../data/Companies.json"
import numbers from "../../data/Numbers.json"
import { Numbercard, Testimonialcard } from "../shared"
import { Companycard } from '../shared/Companycard'
import { Headertext } from "../shared/Text"
export function Middlesection() {

  return (
    <section className="text-gray-400 ">
      <div className="container px-3 py-2 mx-auto">
        <Headertext text="Explore Current Rounds" width="max-w-xl" />
        <div className="flex 2xl:flex-nowrap flex-wrap mt-10 mx-auto  ">

          {items.map((item, index) => (
            <Companycard key={index} data={item} />
          ))}

        </div>
        <div className="mt-8  mb-10">
          <Headertext text="Let's Talk Numbers! " />


        </div>

        <div className="flex  flex-wrap lg:mx-auto 2xl:space-x-6 2xl:mt-4 2xl:flex-nowrap  -m-4 text-center">

          {numbers.map((item, index) => (
            <Numbercard key={index} upperText={item.upperText} lowerText={item.lowerText} />
          ))}

        </div>

        <section className=" ">
        <Headertext text="Here it from our Doers" addtionalStyle="mt-10" /> 
          <div className="container px-5 py-24 mx-auto ">
         
          <div className="flex  flex-wrap sm:-m-4 -mx-4  -mb-10 -m-4  md:w -mt-4 md:space-y-0 space-y-6 ">
            
           
            <Testimonialcard />
            <Testimonialcard />
            <Testimonialcard />
            </div>
          </div>
        </section>

      </div>

    </section>
  )
}
