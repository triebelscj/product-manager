import React, { useState } from 'react'
import axios from 'axios';


const ProductForm = (props) => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [desc, setDesc] = useState("");
    const { product, setProduct } = props;


    const handleSubmit = e => {
        e.preventDefault();
        console.log("clicking button");
        axios.post('http://localhost:8030/api/products/new', {
            title,
            price,
            desc
        })
            .then(res => {
                console.log(res)
                setProduct([...product, res.data]);
                setTitle("")
                setPrice("")
                setDesc("")
            })
            .catch(err => console.log(err))
    }

    return (
        <form onSubmit={handleSubmit}>
            <p>
                <label>Title:</label>
                <input type="text" onChange={e => setTitle(e.target.value)} value={title} />
            </p>
            <p>
                <label>Price:</label>
                <input type="text" onChange={e => setPrice(e.target.value)} value={price} />
            </p>
            <p>
                <label>Description:</label>
                <input type="textfeild" onChange={e => setDesc(e.target.value)} value={desc} />
            </p>
            <input type="submit" value="Create" className="submitter" />
        </form>
    )

}


export default ProductForm;