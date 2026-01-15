// @ts-ignore

import Vector from './pages/Vector';
import About from './pages/About'
import { Routes, Route, Link } from 'react-router-dom';


function App() {
  return (
    <div className='scroll-smooth'>

      <Routes>
        <Route path="/" element={<Vector />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;