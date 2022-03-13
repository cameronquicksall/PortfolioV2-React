import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';


function Navbar(props) {
    const {
        contactSelected,
        currentCategory,
        setContactSelected,
    } = props;

    useEffect(() => {
        document.title = capitalizeFirstLetter(currentCategory.name);
    }, [currentCategory]);


    return (
        <header className="flex-row px-1">
        <h2>
            <a data-testid="link" href="/">
            <span role="img" aria-label="camera"></span> Quicksall Qreations
            </a>
        </h2>
        <nav>
            <ul className="flex-row">
            <li className="mx-2">
                <a data-testid="about" href="#about" onClick={() => setContactSelected(false)}>
                About me
                </a>
            </li>
            <li className={`mx-2 ${contactSelected && 'navActive'}`}>
                <span onClick={() => setContactSelected(true)}>Contact</span>
            </li>
            </ul>
        </nav>
        </header>
    );
}

export default Navbar;