import React, { useState } from 'react';

import './App.css'
import { BrowserRouter as Router } from 'react-router-dom';

import Navbar from './components/Navbar';
import About from './components/About';
import ContactForm from './components/Contact';
import Portfolio from './components/Portfolio';
import Themes from './components/particle-bg';
import Footer from './components/Footer';


function App() {

  const [categories] = useState([
    { name: 'Resume', description: 'Download Resume' },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);
  
  return (
    <div>
      <Navbar
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Navbar>
      <main>
        {!contactSelected ? (
          <>
            <About></About>
            <ContactForm></ContactForm>
          </>
        ) : (
          <Portfolio></Portfolio>
        )}
      </main>
      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default App;