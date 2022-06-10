import React from 'react';
import mainService from "../services/mainService";
import "./styles/Client.css"

class Client extends React.Component {
    constructor(props) {
        super(props)
            this.state = {products: [],
            cart: [],
            total: 0}
        this.addToCart = this.addToCart.bind(this);
        this.removeProduct = this.removeProduct.bind(this);
    }

    componentDidMount() {
        this.handleGet();
    }

    handleGet() {
        mainService.getProducts().then(data => {
            this.setState({
                products: data
            })
        })
    }

    removeProduct = (item) => {
        let newTotal = this.state.total;
        let a = this.state.cart.indexOf(item);
        console.log(a);
        this.state.cart.splice(a,1);
        console.log(this.state.cart);
        newTotal = newTotal -item.price;
        this.setState({total: newTotal});
    }


    addToCart = (product) => {
            let {cart} = this.state;
            let {total}= this.state;
            cart.push(product);
            console.log(cart);
            this.setState({cart:cart});
            total += product.price;
            this.setState({total:total})
        };


    render() {
        return(
            <div class="all">
                <div class="products">
                <h2 class="title">Lista prodotti</h2>
                {this.state.products.map((product)=>(
                    <div class="products-container">
                        <img class="product-image" src={product.img}/>
                        <h3>{product.name}</h3>
                        <p>Ingredienti: <em>{product.ingredients}</em></p>
                        <p>{product.price} €</p>
                        <button class="addToCart" onClick={()=>this.addToCart(product)}>Aggiungi al carrello</button>
                    </div>
                ))}
                </div>
                <div class="cart">
                    <h2 class="title">Carrello</h2>
                    {this.state.cart.map((item)=> {
                        return <div class="cart-item" key={item.id}>
                            <img class="cartImage" src={item.img}/>
                            {item.name} - {item.price}€
                            <button onClick={()=>this.removeProduct(item)}>Rimuovi</button>
                        </div>
                    })}
                    <div class="total">Totale: {this.state.total}€</div>
                </div>
            </div>
        )
    }
}

export default Client;