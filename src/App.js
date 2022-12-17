
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './component/Home';
import About from './component/About';
import Contacts from './component/Contacts';
import Navbar from './component/Navbar';

function App() {
  return (
    <>

          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="About" exact element={<About />} />
            <Route path="Contacts" element={<Contacts />} />
          </Routes>


          <div className='stickyBottom'>
          <div className='sticky'>
          <Navbar/>
          </div>
          </div>

    </>
  );
}

export default App;