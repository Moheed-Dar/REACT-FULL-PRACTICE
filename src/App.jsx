// import 'bootstrap/dist/css/bootstrap.min.css';
// // import { Button } from "react-bootstrap"; 
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import House from './Component/home'
import Detail from './Component/detail'
function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={ <House/>}/>
            <Route path="/Detail" element={ <Detail/>}/>
            <Route path="/Detail" element={ <Detail/>}/>
          </Routes>
        </BrowserRouter>
        {/* </BrowserRouter> */}
    </div>
  );
}
export default App;
