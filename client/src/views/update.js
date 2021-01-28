import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { navigate } from '@reach/router'


const Update = props => {
    const { id } = props;
    // const { product } = props;
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [desc, setDesc] = useState('');

    useEffect(() => {
        axios.get('http://localhost:8030/api/products/' + id)
            .then(res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDesc(res.data.desc);
                console.log(title)
            })
    }, [props.id])

    const updateProduct = e => {
        e.preventDefault();
        axios.put('http://localhost:8030/api/products/' + id, {
            title,
            price,
            desc
        })
            .then(res => {
                console.log(res)
                navigate("/")
            });
    }
    return (
        <div>
            <h1>Update a Product</h1>
            <form onSubmit={updateProduct}>
                <p>
                    <label>Title</label><br />
                    <input type="text"
                        name="title"
                        value={title}
                        onChange={(e) => { setTitle(e.target.value) }}
                        placeholder={"testing"} />
                </p>
                <p>
                    <label>Price</label><br />
                    <input type="text"
                        name="price"
                        value={price}
                        placeholder={props.price}
                        onChange={(e) => { setPrice(e.target.value) }} />
                </p>
                <p>
                    <label>Description</label><br />
                    <input type="text"
                        name="desc"
                        value={desc}
                        onChange={(e) => { setDesc(e.target.value) }} />
                </p>
                <input type="submit" />
            </form>
            <h1>{title}</h1>
        </div>
    )
}

export default Update;