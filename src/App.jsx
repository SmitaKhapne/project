// import react from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Navigation from "./Components/Navigation";

// function App(){
//   return (
//     <div>
//         <Navigation/>
//         {/* <Graphics/> */}
//     </div>
//   )
// }

// export default App;
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Components/Navigation';
import Graphics from './Components/Graphics';
import Web from './Components/Website';
import Mobile from './Components/Mobile';
import Software from './Components/Software';
import ThreeD from './Components/ThreeD';
import Illu from './Components/Illustration';
import Data from './Components/Data';
import Cyber from './Components/Cyber';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigation />} />
        <Route path="/graphics" element={<Graphics />} />
        <Route path="/web" element={<Web />} />
        <Route path="/mobile" element={<Mobile />} />
        <Route path="/software" element={<Software />} />
        <Route path="/threed" element={<ThreeD />} />
        <Route path="/illu" element={<Illu/>} />
        <Route path="/data" element={<Data/>} />
        <Route path="/cyber" element={<Cyber/>} />
      </Routes>
    </Router>
  );
}

export default App;
