
import johndoe from '../../assets/companies/johndoe.png'
import comma from '../../assets/companies/comma.svg'
export  function Testimonialcard() {
  return (
 
     
      <>
        <div className="p-8 md:w-1/3 flex border-2  border-Card-border rounded-lg font-roboto ">
            <div className='flex flex-wrap just '>
            <img className="w-20 h-20 inline-flex items-center  justify-center rounded-full  mb-4 flex-shrink-0 " src={johndoe} />
            <p className='font-roboto text-white text-lg font-roboto-900 p-4 '> Peter Green</p>
            
         <img src={comma} alt="" className='justify-end text-end items-end lg:ml-24 w-8 h-8' />
            
               
         <p className="flex  leading-relaxed text-base font-roboto-400 ">Blue bottle crucifix vinyl post-ironic 
            four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS
             try-hard ugh iceland kickstart.</p>
            </div>
       
            
        
        
         
        
          
        </div>


  
 
        </>
 
  )
}
