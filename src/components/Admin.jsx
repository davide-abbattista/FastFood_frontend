import React from 'react';
import mainService from "../services/mainService";
import "./styles/Admin.css"
import AdminForm from "./AdminForm";

class Admin extends React.Component {
    constructor() {
        super();
        this.state = {products: [],
        modifiedProduct: [],
            id: '',
            type: "",
            name: "",
            ingredients: "",
            price: 0,
            img: ""
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.modifieElement = this.modifieElement.bind(this);
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
        document.getElementById("1").value = product.name;
        document.getElementById("2").value = product.ingredients;
        document.getElementById("3").value = product.price;
        document.getElementById("4").value = product.img;
        document.getElementById("5").value = product.type;
        this.setState({
            id: product._id,
            type: product.type,
            name: product.name,
            ingredients: product.ingredients,
            price: product.price,
            img: product.img
        })
        console.log(this.state);
    }

    getProducts() {
        mainService.getProducts().then(data => {
            this.setState({
                products: data
            })
        })
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value,
        });
    }
    handleSubmit(id) {
        const requestBody = {
            type: this.state.type,
            name: this.state.name,
            ingredients: this.state.ingredients,
            price: this.state.price,
            img: this.state.img
        }
        console.log(requestBody);
        mainService.updateProduct(requestBody,id).then(data=>console.log(data))
    }

    render () {
        return (
            <div className="all">
                <div className="products">
                    <h2 className="title">Modifica o elimina i prodotti</h2>
                    <p className="modInfo">Cliccando "Modifica", il form a destra per la modifica verrà popolato con le informazioni del prodotto selezionato che potrai modificare liberamente!</p>
                    {this.state.products.map((product) => (
                        <div className="products-container">
                            <img className="product-image" src={product.img}/>
                            <h3>{product.name}</h3>
                            <p>Ingredienti: <em>{product.ingredients}</em></p>
                            <div className="buttons">
                            <p>{product.price} €</p>
                            <button className="addToCart" onClick={()=>this.modifieElement(product)}>Modifica
                            </button>
                            <button className="delete" onClick={()=>this.deleteProduct(product._id)}>Elimina</button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="formModifier-container">
                <div className="form">
                    <AdminForm />
                </div>
                <div className="modifie">
                    <h4 className="modifieTitle">Modifica un prodotto</h4>
                    <form>
                        <label>Seleziona una categoria: <select name="type" id="5" onChange={this.handleInputChange} value={this.state.value} required>
                            <option name="type">Panino</option>
                            <option name="type">Bibita</option>
                            <option name="type">Contorno</option>
                        </select></label>
                        <br/>
                        <label>Nome: <input type="text" id="1" placeholder={this.state.modifiedProduct.name}  name="name" value={this.state.value} onChange={this.handleInputChange} required/></label>
                        <br/>
                        <label>Ingredienti: <input type="text" id="2" placeholder={this.state.modifiedProduct.ingredients} name="ingredients" value={this.state.value} onChange={this.handleInputChange}/></label>
                        <br/>
                        <label>Prezzo: <input type="number" id="3" placeholder={this.state.modifiedProduct.price} name="price" step=".01" value={this.state.value} onChange={this.handleInputChange} required/></label>
                        <br/>
                        <label>Immagine: <input type="text" id="4" placeholder={this.state.modifiedProduct.img} name="img" value={this.state.value} onChange={this.handleInputChange} required/></label>
                        <br/>
                        <button className="button" onClick={()=>this.handleSubmit(this.state.id)}>Modifica prodotto!</button>
                    </form>
                </div>
                </div>
            </div>
        )
    }
}

export default Admin;