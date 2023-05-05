import './App.css'
import Calculator from "./pages/Calculator/Calculator";
import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Menu from './pages/Menu/Menu';
import Phone from './pages/Phone/Phone';

class App extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path='/calc' element={<Calculator />}/>
            <Route path='/phone' element={<Phone />} />

            <Route path='/' element={<Menu />} />
          </Routes>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
