// noinspection JSVoidFunctionReturnValueUsed

import {getProducts, deleteProduct} from "../../service/fetch";
import {useEffect, useState} from "react";

export function Product({item}) {
    let [products, setProducts] = useState([])
    let [checkProduct, setCheckProduct] = useState({})

    useEffect(() => {
        getProducts().then(value => setProducts([...value]))
    }, [checkProduct])

    const DeleteProduct = (id) => {
        deleteProduct(id);
        setCheckProduct(products.filter((item) => item.id !== id));
    }
    return (
        <div className={'container'}>
            <div className={'products productsValue'}>
                <p>{item.name}</p>
                <p>{item.type}</p>
                <p>{item.count}</p>
                <button className={'products-delete'} onClick={() => DeleteProduct(item.id)}>Delete</button>
            </div>
        </div>
    );
}
