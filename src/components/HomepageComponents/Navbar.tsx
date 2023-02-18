
import {Button} from '../shared/Button'
import logo from '../../assets/logo.svg'



export function Navbar() {
    return (
        <header className="text-white body-font ">
            <div className="container mx-auto flex flex-wrap w-full  p-5 flex-col md:flex-row items-center lg:fixed 2xl:fixed top-0 left-0 right-0  z-50 bg-[#000001]">

                <div className="flex items-center mb-4 md:mb-0">  <img src={logo} alt="syndoLogo"  /></div>

                <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center font-roboto font-roboto-900 text-base xl:gap-[126px]  lg:relative lg:left-8">
                    <a className="mr-5  hover:text-gray-400 cursor-pointer ">Page1</a>
                    <a className="mr-5 hover:text-gray-400 cursor-pointer">Page2</a>
                    <a className="mr-5 hover:text-gray-400 cursor-pointer">Page3</a>

                </nav>
                
                    <a className="mr-8 flex-col flex hover:text-gray-400 cursor-pointer  font-roboto font-roboto-900 ">Login</a>
                    <Button height='md:h-[60px]' width='md:w-[240px]' text='Get Started' key={"NavbarButton"} onClick={()=>{console.log("test");}}/>
               

            </div>
        </header>
    )
}
