import logo from './logo.svg';
import './App.css';
import Home from './templates/home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './templates/login';
import About from './templates/about';
import Images from './templates/images';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/about' element={<About />} />
          <Route path='/images' element={<Images />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
