import React from 'react'
import logo from '../assets/logo.svg'
export default function Homepage() {
  return (

    <div className=' relative  container mx-auto  text-white'>

      {/* TODO: Navbar component using this snippet */}
      <nav>
        <div className=' collapse sm:visible min-h-[152px] mx-auto  '>
          <div className='pl-20 pt-10'>
            <div className='grid grid-cols-3 '>

            <img src={logo} alt="syndoLogo" />
              <div className='flex p-5'> 
              <div className='p-2'>Page 1</div>
              <div className='p-2'>Page 2</div>
              <div className='p-2' >Page 3</div>
                
              
                </div>
                <div className='flex p-5'> 
                
                  <div className='p-2'>login</div>
                  <div className='p-2'>login</div>
                </div>
             
            </div>
          </div>

        </div>


      </nav>


      {/* TODO: Middle section component using this snippet */}
      {/* <div className='relative pt-5 text-blue-500'>
        <h1>Middle Section</h1>
      </div> */}

      {/* TODO: Footer component using this snippet */}
      {/* <div className='text-blue-600'>
        <h1>Footer</h1>
      </div> */}

    </div>
  )
}
