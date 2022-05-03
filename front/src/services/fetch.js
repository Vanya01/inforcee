const registration = ({type, name, count}) => {

    fetch('http://localhost:3000/products', {
        method: 'POST',
        body: JSON.stringify({
            type, name, count
        }),
        headers: {
            'Content-type': 'application/json; charst=UTF-8'
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json))
}

const getProducts = () => {
    return fetch(`http://localhost:3000/products`)
        .then(value => value.json())
}



function deleteProduct(id) {
    return fetch(`http://localhost:3000/products/${id}`, {
        method: `DELETE`,
    })
}

export {getProducts, deleteProduct, registration}
