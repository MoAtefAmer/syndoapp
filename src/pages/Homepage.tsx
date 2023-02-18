
import {Navbar, Herosection, Middlesection} from '../components/HomepageComponents'
export default function Homepage() {
  return (

    <div className='    mx-auto  ' style={{ scrollBehavior: 'smooth' }}>

      <Navbar/>
      <Herosection/>
      <Middlesection/>

    </div>
  )
}
