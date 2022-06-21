import React from 'react';
import "./styles/Navbar.css"
import logo from "./assets/logo.png"

class Navbar extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <nav>
                <h1>Benvenuti sul sito ufficiale di Mc Bitonto's</h1>
                <img className="logo" src={logo}/>
                <div class="back">
                    <a href="/">  Torna indietro alla selezione profilo</a>
                </div>
            </nav>
        )
    }
}

export default Navbar;