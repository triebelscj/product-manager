import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, navigate } from '@reach/router'


const Detail = props => {
    // const { deleteProduct } = props;
    const [product, setProduct] = useState({})


    useEffect(() => {
        axios.get("http://localhost:8030/api/products/" + props.id)
            .then(res => setProduct(res.data))
    }, [props.id])
    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8030/api/products/' + productId)
            .then(res => {
                navigate("/")
            })
    }
    return (
        <div className="details">
            <h1>Title: {product.title}</h1>
            <h1>Price: {product.price}</h1>
            <h1>Description: {product.desc}</h1>
            <Link to={"/products/" + product._id + "/edit"}>
                Edit
            </Link>
            <button onClick={(e) => { deleteProduct(product._id) }}>
                Delete
            </button>
        </div>
    )
}

export default Detail;