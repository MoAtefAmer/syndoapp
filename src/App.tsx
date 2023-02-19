import { Routes, Route, Outlet, Link } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Profilepage from './pages/Profilepage';
import Formpage from './pages/Formpage';
import Errorpage from './pages/Errorpage';



function App() {
  return (
    <div className='h-full bg-websiteMainBg '>
  
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path='form' element={<Formpage />} />
        <Route path='profile' element={<Profilepage />} />
        <Route path='*' element={<Errorpage />} />
      </Routes>
    </div>
  );
}

export default App;
