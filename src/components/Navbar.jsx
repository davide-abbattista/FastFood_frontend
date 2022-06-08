import React from 'react';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav>
                Benvenuti sul sito ufficiale di Mc Bitonto's
                <a href="/">  Torna indietro alla selezione profilo</a>
            </nav>
        )
    }
}

export default Navbar;