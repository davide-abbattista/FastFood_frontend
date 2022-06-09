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
            <div class="home">
                <div class="selector" href="/clients">
                    <img class="icon" src={client}/>
                    <br/>
                    <a href="/clients" class="a1">Sono un cliente</a>
                </div>
                <div class="selector">
                    <img class="icon" src={kitchen}/>
                    <br/>
                <a href="/kitchen" class="a2">Sono un cuoco</a>
                </div>
                <div class="selector">
                    <img className="icon" src={admin}/>
                    <br/>
                    <a href="/admin" class="a3">Sono un amministratore</a>
                </div>
            </div>
        )
    }
}

export default Home;