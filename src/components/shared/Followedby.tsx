
import johndoe from "../../assets/companies/johndoe.png"
import janebrown from "../../assets/companies/janebrown.png"
import alexmercer from "../../assets/companies/alexmercer.png"
export function Followedby() {
    return (
        <div className="flex  mt-4  2xl:mb-4  -space-x-2 border-spacing-6 ">
            <img className="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800 z-20" src={johndoe} alt="" />
            <img className="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800 z-10" src={janebrown} alt="" />
            <img className="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800 z-0" src={alexmercer} alt="" />
            <p className='relative  left-4'> Followed by <a  className="text-primary">Mohamed Aziz </a>   
              and  <a  className="text-primary">12 others</a> </p>
        </div>
    )
}
