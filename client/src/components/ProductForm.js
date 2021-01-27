import React, { useState, useEffect } from 'react'
import axios from 'axios';


const ProductForm = () => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [desc, setDesc] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        console.log("clicking button");
        axios.post('http://localhost:8030/api/products/new', {
            title,
            price,
            desc
        })
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }
    // useEffect(() => {
    //     axios.get('http://localhost:8000/api')
    //         .then(res => setMessage(res.data.message))
    // }, []);

    return (
        <form onSubmit={handleSubmit}>
            <p>
                <label>Title:</label>
                <input type="text" onChange={e => setTitle(e.target.value)} />
            </p>
            <p>
                <label>Price:</label>
                <input type="text" onChange={e => setPrice(e.target.value)} />
            </p>
            <p>
                <label>Description:</label>
                <input type="textfeild" onChange={e => setDesc(e.target.value)} />
            </p>
            <input type="submit" value="Create" className="submitter" />
        </form>
    )

}


export default ProductForm;