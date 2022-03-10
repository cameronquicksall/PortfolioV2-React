import React from 'react';

import './index.css'

import About from './components/About';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Header from './components/Header';


function App() {


  
  return (
    <div className='App'>
      <div>
        <Header></Header>
      </div>
      <Home></Home>
      <main>
        <About></About>
        <section>
        <Portfolio></Portfolio>
        </section>
      </main>
    </div>
  );
}

export default App;