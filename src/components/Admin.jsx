import React from 'react';
import mainService from "../services/mainService";
import "./styles/Admin.css"
import AdminForm from "./AdminForm";

class Admin extends React.Component {
    constructor() {
        super();
        this.state = {products: [],
        modifiedProduct: []};
    }
    componentDidMount() {
        this.getProducts();
    }
    deleteProduct = (id) => {
        mainService.deleteProduct(id).then(data => {
            console.log(data)
        })
        window.location.reload(false);
    }
    modifieElement = (product) => {


}

    getProducts() {
        mainService.getProducts().then(data => {
            this.setState({
                products: data
            })
        })
    }
    render () {
        return (
            <div className="all">
                <div className="products">
                    <h2 className="title">Modifica o elimina un prodotto</h2>
                    {this.state.products.map((product) => (
                        <div className="products-container">
                            <img className="product-image" src={product.img}/>
                            <h3>{product.name}</h3>
                            <p>Ingredienti: <em>{product.ingredients}</em></p>
                            <div class="buttons">
                            <p>{product.price} €</p>
                            <button className="addToCart">Modifica
                            </button>
                            <button className="delete" onClick={()=>this.deleteProduct(product._id)}>Elimina</button>
                            </div>
                        </div>
                    ))}
                </div>
                <div class="form">
                    <AdminForm />
                </div>
                <div>
                    Modifica elemento:
                    <form>
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
            </div>
        )
    }
}

export default Admin;