import React from 'react';
import { Particles } from 'tsparticles';
import ParticleTheme from './config/particle-theme';

function Themes() {
    return (
        <Particles className="particles" params={ParticleTheme}></Particles>
    )
}

export default Themes;