
import React from 'react';
import coverImage from '../../assets/images/por2.jpg'

function About() {
    return (
        <section className="about">
            <div className="my-2">
            <h1 id="about">About Me</h1>
        <p>
        Hello World! My name is Cameron Quicksall, I am a current student at SMU obtaining my Full Stack Web Development certification.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum turpis sed ex
        condimentum molestie. Mauris condimentum lectus ut ornare dignissim. Mauris faucibus urna
        mi, ac feugiat metus aliquam maximus.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum turpis sed ex
        condimentum molestie. Mauris condimentum lectus ut ornare dignissim. Mauris faucibus urna
        mi, ac feugiat metus aliquam maximus.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum turpis sed ex
        condimentum molestie. Mauris condimentum lectus ut ornare dignissim. Mauris faucibus urna
        mi, ac feugiat metus aliquam maximus.
        </p>
        <img src={coverImage} className="coverImage" alt="cover" />
        </div>
        </section>
    );
    }

export default About;