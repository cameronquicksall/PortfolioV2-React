import React from 'react';

import useLocalStorage from 'use-local-storage';

import '../../index.css'


function Home() {

    const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light')

    const switchTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme)
    }

    return (
        <div className="app" data-theme={theme}>
        <section className='header'>
        <h1>Quicksall Qreations</h1>
        <div className='container'>
            <div className='top'>
                <i class='fab fa-google'></i>
                <i class='fab fa-facebook-square'></i>
                <i class='fab fa-linkedin'></i>
                <i class='fab fa-twitter-square'></i>
                <i class='fab fa-apple'></i>
        </div>
        </div>
        </section>
        <div className='logo'>
            <div className='container-theme'>
            <div className='theme-toggle'>
            <h2>Light Theme</h2>
            <i onClick={switchTheme} class='fa-brands fa-ello fa-spin'></i>
            </div>
            </div>
        </div>
        </div>
    );
    }

export default Home;