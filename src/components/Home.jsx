import React from 'react';

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <a href="/clients">Sono un cliente</a>
                <br/>
                <a href="/kitchen">Sono un cuoco</a>
            </div>
        )
    }
}

export default Home;