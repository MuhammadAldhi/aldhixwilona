// @ts-ignore

import HomePage from './pages/HomePage';
import { Routes, Route } from 'react-router-dom';
import TargetCursor from "./components/ui/TargetCursor";


function App() {
  return (
    <div className='scroll-smooth'>
      <TargetCursor spinDuration={3} hideDefaultCursor={true} parallaxOn={true} />

      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;