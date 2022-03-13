import React, { useState } from 'react';

import './index.css'

import Navbar from './components/Navbar';
import About from './components/About';
import ContactForm from './components/Contact';


function App() {

  const [categories] = useState([
    {name: '', description: ' '},
    { name: 'My projects', description: 'Images of projects' },
    { name: 'Resume', description: 'Download Resume' }
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
          </>
        ) : (
          <ContactForm></ContactForm>
        )}
      </main>
    </div>
  );
}

export default App;