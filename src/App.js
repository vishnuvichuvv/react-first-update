

import './App.css';
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Restaurentlist from './components/Restaurentlist';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import ViewRest from './components/ViewRst';

function App() {
  return (
    <div className="App">
      <Router>  
        <Header></Header>
  
        <Routes>
          
          {/* {path setting for restaurentlist} */}
          <Route path='/' element={<Restaurentlist/>}/>

          {/* {path setting for view rest} */}
          <Route path='view-restaurent/:id' element={<ViewRest/>}/>

        </Routes>
  
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
