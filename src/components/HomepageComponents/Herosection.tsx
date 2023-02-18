
import hero from "../../assets/hero.png"

import {Button} from "../shared/Button"
import { Headertext } from "../shared/Text"

export function Herosection() {
    return (
        <section className="text-gray-400 body-font relative top-20 ">

            <div className="container mx-auto  flex px-5 py-24 md:flex-row  flex-col items-center ">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left 
                mb-16 md:mb-0 items-center text-center">
                  
                    <p className="font-roboto font-roboto-900 leading-6 md:text-xl xl:text-[20px] xl:leading-[23.44px]  
                    tracking-widest text-primary">
                        WE'RE HERE FOR YOU
                        </p>


                    
                    <Headertext text="Your first Step towards growth!" width=" max-w-xl"/>


                    <p className="mb-8 leading-relaxed font-roboto-400 font-roboto
                     text-textSecondary md:leading-[40px] md:text-[30px] 
                      ">Sed ut perspiciatis unde omnis iste natus <br /> error sit voluptatem accusantium.</p>


                    <div className="flex justify-center">
                        <Button height='md:h-[60px]' width='md:w-[300px]' text="Get Started!" 
                        onClick={()=>{console.log("yeah")}} key={"HeroButton"} />
                        
                         
                    </div>
                </div>

                <div className="lg:max-w-lg lg:w-full xl:relative xl:right-20 xl:h-96   ">
                    <img className=" bg-cover rounded-2xl  " alt="hero" src={hero} />
                </div>
            </div>
        </section>
    )
}
