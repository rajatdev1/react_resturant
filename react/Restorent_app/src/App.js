import logo from './logo.svg';
import './App.css';
import Layout from './Components/Layout';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'
import Menu from './Pages/Menu'
import About from './Pages/About'
import Contact from './Pages/Contact'

import Pagenotefound from './Pages/Pagenotfound'


function App() {
  return (
   <div>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/Menu' element={<Menu/>} />
      <Route path='/About' element={<About/>} />
      <Route path='/Contact' element={<Contact/>} />
   
      <Route path='*' element={<Pagenotefound/>} />

      
    </Routes>
    
    </BrowserRouter>
   </div>
  );
}

export default App;
