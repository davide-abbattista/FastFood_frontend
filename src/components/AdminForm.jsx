import React from 'react';
import mainService from "../services/mainService";

class AdminForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type: "Panino",
            name: "",
            ingredients: "",
            price: 0,
            img: ""
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value,
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const requestBody = {
            type: this.state.type,
            name: this.state.name,
            ingredients: this.state.ingredients,
            price: this.state.price,
            img: this.state.img
        };
        mainService.createProduct(requestBody).then(data=>data);
        setTimeout(function() {
            window.location.reload()
        }, 1000);
    }

    render () {
        return (
            <div className="form" >
                <form onSubmit={this.handleSubmit} >
                    <h4>Aggiungi un nuovo prodotto</h4>
                    <label>Seleziona una categoria: <select name="type" onChange={this.handleInputChange} value={this.state.value} required>
                        <option name="type">Panino</option>
                        <option name="type">Bibita</option>
                        <option name="type">Contorno</option>
                    </select></label>
                    <br/>
                    <label>Nome: <input type="text" value={this.state.value} name="name" onChange={this.handleInputChange} required/></label>
                    <br/>
                    <label>Ingredienti: <input type="text"  value={this.state.value} name="ingredients" onChange={this.handleInputChange}/></label>
                    <br/>
                    <label>Prezzo: <input type="number" value={this.state.value} name="price" step=".01" min="0.5" onChange={this.handleInputChange} required/></label>
                    <br/>
                    <label>Immagine: <input type="text" value={this.state.value} name="img" onChange={this.handleInputChange} required/></label>
                    <br/>
                    <button type="submit" className="button">Inserisci prodotto!</button>
                </form>
            </div>
        )
    }
}

export default AdminForm;