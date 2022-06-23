import React from 'react';
import mainService from "../services/mainService";
import "./styles/Kitchen.css"

class Kitchen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {orders: []}

    }

    componentDidMount() {
        this.handleGet();
    }

    handleGet() {
        mainService.getOrders().then(data => {
            this.setState({
                orders: data
            })
        })
    }
    refreshPage = () => {
        window.location.reload(false);
    }

    concludeOrder(id) {
        mainService.concludeOrder(id).then(data => {
            console.log(data);
        })
        window.location.reload(false);
    }
    render() {
        return (
            <div>
                <div className="header">
                    <h3 className="title">Lista ordini</h3>
                    <button className="updatePage" onClick={()=>this.refreshPage()}>Ricerca nuovi ordini</button>
                </div>
            {this.state.orders.map(ordine => (
                <div className="orderContainer" key={ordine._id}>
                    <b>ID Ordine:</b> {ordine._id}
                    <br/>
                    <b>Cliente:</b> {ordine.clientName}
                    <br/>
                    <b>Prodotti:</b>
                    {ordine.products.map((product)=>(
                        <li>{product.name}</li>
                    ))}
                    <br/>
                    <b>Data e ora ordine:</b>
                    {ordine.createdAt.replace('T',' ').replace('.000Z',' ')}
                    <b>Totale:</b>{ordine.total}€
                    <button className="completeOrder" onClick={()=>this.concludeOrder(ordine._id)}>Completa ordine</button>
                </div>
                ))}

            </div>
        )
    }
}

export default Kitchen;