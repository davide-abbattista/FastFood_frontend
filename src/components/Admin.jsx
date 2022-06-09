import React from 'react';
import mainService from "../services/mainService";
import "./styles/Admin.css"
import AdminForm from "./AdminForm";

class Admin extends React.Component {
    constructor() {
        super();
        this.state = {products: []};
    }
    componentDidMount() {
        this.getProducts();
    }
    deleteProduct = (id) => {
        mainService.deleteProduct(id).then(data => {
            console.log(data)
        })

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
            </div>
        )
    }
}

export default Admin;