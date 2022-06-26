const PRODUCTS_URL = 'http://localhost:8080/api/v1/products/',
    ORDERS_URL = 'http://localhost:8080/api/v1/orders/',
    HEADERS = {"Content-Type":"application/json"}

export default {
    getProducts: () => {
        return fetch(PRODUCTS_URL, {
            method: "get",
            headers: HEADERS
        }).then(res => res.json()).then(data=>data);
    },

    getOrders: () => {
        return fetch(ORDERS_URL, {
            method: "get",
            headers: HEADERS
        }).then(res => res.json()).then(data=>data);
    },

    concludeOrder:(id) => {
        let url = ORDERS_URL +id+ '?_method=PUT';
        return fetch(url, {
            method: "post",
            headers: HEADERS,
        }).then(res => {
            if (res.status === 500) {
                alert("Si è vericato un errore sul server. Riprova!");
            }
            res.json();
        }).then(data=>data);
    },

    deleteProduct:(prodId) => {
        let url1 = PRODUCTS_URL +prodId+ '?_method=DELETE'
        return fetch(url1, {
            method: "post",
            header: HEADERS,
        }).then(res => {
            if (res.status === 500) {
                alert("Si è vericato un errore sul server. Riprova!");
            }
            res.json();
        }).then(data=>data);
    },

    createProduct: (requestBody) => {
        return fetch(PRODUCTS_URL, {
            method: "post",
            headers: HEADERS,
            body: JSON.stringify(requestBody)
        }).then(res => {
            if (res.status === 500) {
                alert("Si è vericato un errore sul server. Riprova!");
            }
            res.json();
        }).then(data=>data);
    },

    createOrder: (requestBody) => {
        return fetch(ORDERS_URL, {
            method: "post",
            headers: HEADERS,
            body: JSON.stringify(requestBody)
        }).then(res => {
            if (res.status === 500) {
                alert("Si è vericato un errore sul server. Riprova!");
            }
            res.json();
        }).then(data=>data);
    },

    updateProduct: (requestBody,id) => {
        let UPDATE_PRODUCT = PRODUCTS_URL +id+ '?_method=PUT'
        return fetch(UPDATE_PRODUCT, {
            method: "post",
            headers: HEADERS,
            body: JSON.stringify(requestBody)
        }).then(res => {
            if (res.status === 500) {
                alert("Si è vericato un errore sul server. Riprova!");
            }
            res.json();
        }).then(data=>data);
    }
};