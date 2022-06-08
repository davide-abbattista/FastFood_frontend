import React from 'react';
import mainService from "../services/mainService";

class Client extends React.Component {
    constructor(props) {
        super(props)
            this.state = {products: []}
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

    render() {
        return(
            <div>
                <p>Lista prodotti</p>
                {this.state.products.map((product)=>(
                    <li>{product.img}</li>
                ))}
            </div>
        )
    }
}

export default Client;