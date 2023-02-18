
import items from "../../data/Companies.json"
import numbers from "../../data/Numbers.json"
import { Numbercard } from "../shared"
import { Companycard } from '../shared/Companycard'
import { Headertext } from "../shared/Text"
export function Middlesection() {

  return (
    <section className="text-gray-400 body-font">
      <div className="container px-3 py-2 mx-auto">
        <Headertext text="Explore Current Rounds" width="max-w-xl" />
        <div className="flex 2xl:flex-nowrap flex-wrap mt-10 -m-4  ">

          {items.map((item, index) => (
            <Companycard key={index} data={item} />
          ))}

        </div>
        <div className="mt-8  mb-10">
          <Headertext text="Let's Talk Numbers! " />


        </div>

        <div className="flex flex-wrap lg:mx-auto 2xl:space-x-6 2xl:mt-4 2xl:flex-nowrap  -m-4 text-center">
   
          {numbers.map((item, index) => (
            <Numbercard key={index} upperText={item.upperText} lowerText={item.lowerText} />
          ))}

        </div>

      </div>

    </section>
  )
}
