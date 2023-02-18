import { Routes, Route, Outlet, Link } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Profilepage from './pages/Profilepage';
import Formpage from './pages/Formpage';
import Errorpage from './pages/Errorpage';

{
  /* <div className='h-screen bg-websiteMainBg '>
    <h1 className="text-3xl font-bold underline p-3 text-white">
      Hello world!
    </h1> */
}

function App() {
  return (
    <div className='h-full bg-websiteMainBg '>
         
         {/* <div className='text-white h-[50px] bg-themeModeColor '>
          <h1>Themebar</h1>
          
          </div> */}
      <Routes>
       
        
     

        <Route index element={<Homepage />} />
        <Route path='form' element={<Formpage />} />
        <Route path='profile' element={<Profilepage />} />
        <Route path='*' element={<Errorpage />} />
      </Routes>
    </div>
  );
}

export default App;
