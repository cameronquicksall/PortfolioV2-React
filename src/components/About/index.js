
import React from 'react';
import coverImage from '../../assets/images/por2.jpg'

function About() {
    return (
        <section className="about">
            <div className="my-2">
            <h1 id="about">About Me</h1>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum turpis sed ex
        condimentum molestie. Mauris condimentum lectus ut ornare dignissim. Mauris faucibus urna
        mi, ac feugiat metus aliquam maximus. Proin aliquam justo nec diam vulputate vestibulum.
        Aenean sollicitudin nulla at nisi ornare, nec suscipit massa eleifend. Morbi tristique
        justo vel turpis sollicitudin, et tristique velit convallis. In hac habitasse platea
        dictumst. Phasellus mattis nunc sed orci consequat laoreet. Praesent id nisl nibh.
        Curabitur imperdiet ultricies mollis. In hac habitasse platea dictumst.
        </p>
        <img src={coverImage} className="coverImage" alt="cover" />
        </div>
        </section>
    );
    }

export default About;