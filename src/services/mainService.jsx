const GET_CLIENT_URL = 'http://localhost:8080/api/v1/products/',
    GET_ORDERS_URL = 'http://localhost:8080/api/v1/orders/',
    GET_CLIENT_HEADERS = {"Content-Type":"application/json"};

export default {
    getProducts: () => {
        return fetch(GET_CLIENT_URL, {
            method: "get",
            headers: GET_CLIENT_HEADERS
        }).then(res => res.json()).then(data => data)
    },

    getOrders: () => {
        return fetch(GET_ORDERS_URL, {
            method: "get",
            headers: GET_CLIENT_HEADERS
        }).then(res => res.json()).then(data =>data)
    },

    concludeOrder:(id) => {
        let url = 'http://localhost:8080/api/v1/orders/'+id+'?_method=PUT';
        return fetch(url, {
            method: "post",
            headers: GET_CLIENT_HEADERS,
        }).then(res=>res.json()).then(data => console.log(data))
    },

    deleteProduct:(prodId) => {
        let url1 = 'http://localhost:8080/api/v1/products/'+prodId+'?_method=DELETE'
        return fetch(url1, {
            method: "post",
            header: GET_CLIENT_HEADERS,
        }).then(res=>res.json()).then(data=>console.log(data));
    },

    createProduct: (requestBody) => {
        return fetch(GET_CLIENT_URL, {
            method: "post",
            header: GET_CLIENT_HEADERS,
            body: JSON.stringify(requestBody)
        }).then(res=>res.json()).then(data=>console.log(data))
    }
};