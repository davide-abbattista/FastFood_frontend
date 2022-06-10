import React from 'react';
import mainService from "../services/mainService";

class AdminForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type: "",
            name: "",
            ingredients: "",
            price: 0,
            img: ""
        }
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
        }
        console.log(requestBody);
        mainService.createProduct(requestBody).then(data=>console.log(data));
        window.location.reload(false);
    }

    render () {
        return (
            <div class="form" >
                <form onSubmit={this.handleSubmit} >
                <select name="type" onChange={this.handleInputChange}>
                    <option>Seleziona una categoria:</option>
                    <option name="type" value={this.state.value} onChange={this.handleInputChange} required>Panino</option>
                    <option name="type" value={this.state.value} onChange={this.handleInputChange} required>Bibita</option>
                    <option name="type" value={this.state.value} onChange={this.handleInputChange} required>Contorno</option>
                </select>
                <br/>
                <label>Nome: <input type="text"  value={this.state.value} name="name" onChange={this.handleInputChange} required/></label>
                <br/>
                <label>Ingredienti: <input type="text"  value={this.state.value} name="ingredients" onChange={this.handleInputChange} required/></label>
                <br/>
                <label>Prezzo: <input type="number"  value={this.state.value} name="price" onChange={this.handleInputChange} required/></label>
                <br/>
                <label>Immagine: <input type="text"  value={this.state.value} name="img" onChange={this.handleInputChange} required/></label>
                    <br/>
                <button type="submit">Inserisci prodotto!</button>
                </form>
            </div>
        )
    }
}

export default AdminForm;