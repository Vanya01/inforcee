import {useEffect, useState} from "react";
import {getProducts, registration} from "../../service/fetch";
import {Product} from "./Product";

export function Products() {
    let [products, setProducts] = useState([])
    let [productName, setProductName] = useState('productName')
    let [type, setType] = useState('type')
    let [count, setCount] = useState('count')
    let productForSave = {}
    const onSubmitForm = (e) => {
        e.preventDefault()
        let tempProduct = {type, productName, count}
        setProductName({...tempProduct})
        setType({...tempProduct})
        setCount({...tempProduct})
        registration(tempProduct)
    }

    let onInputChangeProductName = (e) => {
        let productName = e.target.value
        setProductName(productName)
        productForSave.productName = productName
    }
    let onInputChangeType = (e) => {
        let type = e.target.value
        setType(type)
        productForSave.type = type
    }
    let onInputChangeCount = (e) => {
        let count = e.target.value
        setCount(count)
        productForSave.count = count
    }
    useEffect(() => {
        getProducts().then(value => setProducts([...value]))
    }, [products])

    let [info, setInfo] = useState('hide')
    let [formHS, setFormHS] = useState('hideform')
    let [loginForm, setLoginForm] = useState('hide-login-form')

    return (
        <div>
            <div className={formHS}>
                <form onSubmit={onSubmitForm} className={'formStyle'}>
                    <input type="text" name={'productName'} placeholder={productName}
                           onInput={onInputChangeProductName}/>
                    <input type="text" name={'type'} placeholder={type}
                           onInput={onInputChangeType}/>
                    <input type="text" name={'count'} placeholder={count} onInput={onInputChangeCount}/>
                    <button className={'form-button'} onClick={() => {
                        if (info === 'hide') {
                            setInfo('show')
                        }
                    }}>New product
                    </button>
                </form>
                <button className={'close-popup'} onClick={() => {
                    if (formHS === 'showform') {
                        setFormHS('hideform')
                    }
                }}>
                    X
                </button>
            </div>
            <div className={loginForm}>
                <button className={'close-popup'} onClick={() => {
                    if (loginForm === 'show-login-form') {
                        setLoginForm('hide-login-form')
                    }
                }}>
                    X
                </button>
            </div>

            <button className={'showButton'} onClick={() => {
                if (formHS === 'hideform') {
                    setFormHS('showform')
                }
                if (formHS === 'showform') {
                    setFormHS('hideform')
                }
            }}>create product
            </button>

            <div className={'products productsQuotes container'}>
                <p>Product_Name</p>
                <p>Type</p>
                <p>Count</p>
            </div>
            {
                products.map(value => <Product item={value} key={value.id}/>)
            }
        </div>
    );
}
