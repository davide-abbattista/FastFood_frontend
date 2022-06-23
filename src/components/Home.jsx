import React from 'react';
import "./styles/Home.css"
import client from "./assets/fast-food.png"
import kitchen from "./assets/kitchen.png"
import admin from "./assets/profile.png"

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="home">
                <div className="selector" href="/clients">
                    <img className="icon" src={client} alt="cliente"/>
                    <br/>
                    <a href="/clients" className="a1" >Sono un cliente</a>
                </div>
                <div className="selector">
                    <img className="icon" src={kitchen} alt="cuoco"/>
                    <br/>
                <a href="/kitchen" className="a2">Sono un cuoco</a>
                </div>
                <div className="selector">
                    <img className="icon" src={admin} alt="admin"/>
                    <br/>
                    <a href="/admin" className="a3">Sono un amministratore</a>
                </div>
            </div>
        )
    }
}

export default Home;