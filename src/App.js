import { Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './Pages/Home/Home'
import Navigation from './Components/Navigation/Navigation';
import Footer from './Components/Footer/Footer';
import Serviços from './Pages/Serviços/Serviços';

function App() {
  return (
    <div className="App">

      <Navigation/>
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/servicos' element={<Serviços/>}></Route>
     </Routes>
      <Footer/>
    </div>
  );
}

export default App;
