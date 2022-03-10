import React from "react";
import Navbar from "../Navbar";

function Header(props) {
	const { currentTab, setCurrentTab } = props;

	return (
    <header>
        <div>
        <h2>Quicksall Qreations</h2>
        </div>
        <div>
        <Navbar
            currentTab={currentTab}
            setCurrentTab={setCurrentTab}
        ></Navbar>
        </div>
    </header>
	);
}

export default Header;