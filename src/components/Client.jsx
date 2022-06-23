import React from 'react';
import mainService from "../services/mainService";
import "./styles/Client.css"

class Client extends React.Component {
    constructor(props) {
        super(props)
            this.state = {products: [],
            cart: [],
            total: 0,
                clientName: '',
                productIDs: [],
                totalCart: 0,
                insertOrder: ''
            }
        this.addToCart = this.addToCart.bind(this);
        this.removeProduct = this.removeProduct.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.sendOrder = this.sendOrder.bind(this);
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
        this.state.cart.splice(a,1);
        let b = this.state.productIDs.indexOf(item._id);
        this.state.productIDs.splice(b,1);
        console.log(this.state.cart);
        console.log(this.state.order);
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
            this.setState({total:total});
            let {productIDs} = this.state;
            productIDs.push(product._id);
            this.setState({productIDs: productIDs});
        };



    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value,
            totalCart: this.state.total
        });
    }

    sendOrder=(e) => {
        e.preventDefault();
        const requestBody = {
            clientName: this.state.clientName,
            products: this.state.productIDs,
            total: this.state.totalCart
        }
        console.log(requestBody);
        mainService.createOrder(requestBody).then(data=> {
            this.setState({
                insertOrder: data.message
            })
        });
        setTimeout(function() {
            window.location.reload()
        }, 1000)
        //window.location.reload(false);
    }


    render() {
        return(
            <div className="all">
                <div className="products">
                <h2 className="title">Scegli tra un sacco di prodotti deliziosi!</h2>
                {this.state.products.map((product)=>(
                    <div className="products-container" key={product._id}>
                        <img className="product-image" src={product.img}/>
                        <h3>{product.name}</h3>
                        <p>Ingredienti: <em>{product.ingredients}</em></p>
                        <p>Prezzo: {product.price} €</p>
                        <button className="addToCart" onClick={()=>this.addToCart(product)}>Aggiungi al carrello</button>
                    </div>
                ))}
                </div>
                <div className="cart">
                    <h2 className="title">Carrello</h2>
                    {this.state.cart.map((item)=> {
                        return <div className="cart-item" key={item.id}>
                            <img className="cartImage" src={item.img}/>
                            {item.name} - {item.price}€
                            <button className="removeItem" onClick={()=>this.removeProduct(item)}>Rimuovi</button>
                        </div>
                    })}
                    <div className="total">Totale: {this.state.total}€</div>

                    <form onSubmit={this.sendOrder}>
                        <div className="nameandsurname">
                        <label>Nome e cognome: <input type="text" className="dati" value={this.state.value} name="clientName" onChange={this.handleInputChange} required/></label>
                        </div>
                            <br/>
                        <label className="ccn">Inserisci numero carta: <input id="ccn" type="tel" inputMode="numeric" pattern="[0-9\s]{13,19}" autoComplete="cc-number" maxLength="16" placeholder="XXXX-XXXX-XXXX-XXXX" required/></label>
                        <br/>
                        <button type="submit" className="checkout">Checkout</button>
                        <div>{this.state.insertOrder}</div>
                    </form>
                    </div>

            </div>
        )
    }
}

export default Client;