import logo from '../../assets/logo.svg'
export  function Footer() {
  return (
<footer className="text-gray-400  font-roboto">
  <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
      <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
     
        <div className="flex items-center mb-4 md:mb-0">  <img src={logo} alt="syndoLogo"  /></div>
      </a>
      <p className="mt-2 text-sm text-gray-500">Air plant banjo lyft occupy retro adaptogen indego</p>
    </div>
    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center font-roboto">
      <div className="lg:w-1/3 md:w-1/2 w-full px-4">
        <h2 className=" text-white tracking-widest  mb-3 font-roboto font-roboto-900 text-lg">HOME</h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-400 hover:text-white text-base">For Investors</a>
          </li>
          <li>
            <a className="text-gray-400 hover:text-white text-base">For Companies</a>
          </li>
     
        </nav>
      </div>
      <div className="lg:w-1/3 md:w-1/2 w-full px-4">
        <h2 className="text-white tracking-widest  mb-3 font-roboto font-roboto-900 text-lg">ABOUT US</h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-400 hover:text-white text-base">About us</a>
          </li>
          <li>
            <a className="text-gray-400 hover:text-white text-base">Risk</a>
          </li>
      
        </nav>
      </div>
      <div className="lg:w-1/3 md:w-1/2 w-full px-4">
        <h2 className="text-white tracking-widest  mb-3 font-roboto font-roboto-900 text-lg">RESOURCES</h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-400 hover:text-white text-base">FAQs</a>
          </li>
          <li>


            
            <a className="text-gray-400 hover:text-white text-base">Contact us</a>
          </li>
     
        </nav>
      </div>
 
    </div>
  </div>
  <div className=" bg-opacity-75">
    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p className="text-gray-400 text-sm text-center sm:text-left">© 2022 Syndo — All rights reserved.
    
      </p>
     
    </div>
  </div>
</footer>
  )
}
