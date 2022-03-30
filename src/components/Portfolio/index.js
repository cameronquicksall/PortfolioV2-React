import React from 'react';

import MaxedOut from "../../assets/images/max.png";
import FoodFinder from "../../assets/images/food.png";
import DeepThoughts from "../../assets/images/deep.png";
import Boards from '../../assets/images/BBoards.png';
import LED from "../../assets/images/LED.jpeg";
import Tech from "../../assets/images/images.jpeg";


function Portfolio() {
return (
    <main className="portfolio">
    <section className="container">
        <div className="col-1">
            <h3>MERNG - Team Application</h3>
            <img src={Boards} alt="BayleesBoards" />
            <div className="btn-container">
                <a href="http://bayleesboards.com/" >
                    <button>Website</button>
                </a>
                <a href="https://github.com/cameronquicksall/Baylees-Boards" >
                    <button>GitHub</button>
                </a>
            </div>
        </div>

        <div className="col-2">
        <h3>Full Stack Team Application</h3>
            <img src={MaxedOut} alt="Maxed Out" />
            <div className="btn-container">
                <a href="https://aqueous-headland-83808.herokuapp.com/" >
                    <button>Website</button>
                </a>
                <a href="https://github.com/cameronquicksall/maxed-out" >
                    <button>GitHub</button>
                </a>
            </div>
    </div>
            <div className='col-3'>
            <h3>Server-Side API Front-End Application</h3>
            <img src={FoodFinder} alt="Food Finder" width={389} />
            <div className="btn-container">
                <a href="https://ncp9988.github.io/Eat-Eat-Eat/" >
                    <button>Website</button>
                </a>
                <a href="https://github.com/cameronquicksall/Eat-Eat-Eat" >
                    <button>GitHub</button>
                </a>
                </div>
            </div>


        <div className="col-4">
            <h3>MERN Stack - Social Application</h3>
            <img src={DeepThoughts} alt="DeepThoughts" />
            <div className="btn-container">
                <a href="https://social-room.herokuapp.com/" > 
                    <button>Website</button>
                </a>
                <a href="https://github.com/cameronquicksall/deep-thoughts" >
                    <button>GitHub</button>
                </a>
            </div>
    </div>

        <div className="col-5">
            <img src={LED} alt="LED" />
            <div className="btn-container">
                <a href="https://github.com/cameronquicksall" >
                    <button>Website</button>
                </a>
                <a href="https://github.com/cameronquicksall" >
                    <button>GitHub</button>
                </a>
            </div>
    </div>

        <div className="col-6">
            <img src={Tech} alt="Tech" />
            <div className="btn-container">
                <a href="https://github.com/cameronquicksall" >
                    <button>Website</button>
                </a>
                <a href="https://github.com/cameronquicksall" >
                    <button>GitHub</button>
                </a>
            </div>
        </div>
    </section>
    </main>


);
}

export default Portfolio;