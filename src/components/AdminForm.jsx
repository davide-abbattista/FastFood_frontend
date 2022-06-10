import React from 'react';
import mainService from "../services/mainService";

class AdminForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type: '',
            name: '',
            ingredients: '',
            price: 0,
            img: ''
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
        console.log(this.state);
    }

    handleSubmit(e) {
        e.preventDefault()
        const requestBody = {
            type: this.state.type,
            name: this.state.name,
            ingredients: this.state.ingredients,
            price: this.state.price,
            img: this.state.img
        }
        mainService.createProduct(requestBody);
    }

    render () {
        return (
            <div class="form" >
                <form onSubmit={this.handleSubmit} >
                <select name="type" onChange={this.handleInputChange} required>
                    <option>Seleziona una categoria:</option>
                    <option name="type" value="Panino" onChange={this.handleInputChange} required>Panino</option>
                    <option name="type" value="Bibita" onChange={this.handleInputChange} required>Bibita</option>
                    <option name="type" value="Contorno" onChange={this.handleInputChange} required>Contorno</option>
                </select>
                <br/>
                <label>Nome: <input type="text" name="name" onChange={this.handleInputChange} required/></label>
                <br/>
                <label>Ingredienti: <input type="text" name="ingredients" onChange={this.handleInputChange}required/></label>
                <br/>
                <label>Prezzo: <input type="number" name="price" onChange={this.handleInputChange}required/></label>
                <br/>
                <label>Immagine: <input type="text" name="img" onChange={this.handleInputChange}/></label>
                <button type="submit">Inserisci prodotto!</button>
                </form>
            </div>
        )
    }
}

export default AdminForm;