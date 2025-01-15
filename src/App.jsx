import './App.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router';
import Homepage from './Components/Home/Homepage';
import Home from './Components/Home';

export default function App() {
  return (
    <div className='font-poppinsMedium'>
      <Router>
        <Routes>
          <Route path='/*' element={<Home/>}/>
        </Routes>
      </Router>      
    </div>
  );
}
