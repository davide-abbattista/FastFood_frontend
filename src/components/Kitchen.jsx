import React from 'react';
import mainService from "../services/mainService";

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
    render() {
        return (
            <div>
                <p>Lista ordini</p>
            {this.state.orders.map(ordine => (
                <li>{ordine.orderId}</li>
                ))}
            </div>
        )
    }
}

export default Kitchen;