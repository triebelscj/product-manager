import React, { useEffect, useState } from 'react';
import axios from 'axios'
import ProductList from '../components/ProductList'
import ProductForm from '../components/ProductForm'

const Main = (props) => {

    const [product, setProduct] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8030/api/products')
            .then(res => {
                setProduct(res.data);
                setLoaded(true);
            });
    }, [])

    const removeFromDom = productId => {
        setProduct(product.filter(product => product._id !== productId));
    }




    return (
        <div className="wrapper">
            <div className="form-container">
                <h1>Product Manager</h1>
                <ProductForm setProduct={setProduct} product={product} />
            </div>
            <div className="split-right">
                <h1>Product List</h1>
                {loaded && <ProductList product={product} removeFromDom={removeFromDom} />}
            </div>
        </div>
    )
}

export default Main;