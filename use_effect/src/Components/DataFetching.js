import React, { useEffect, useState } from 'react'
import axios from 'axios'


function DataFetching() {
    const [post, setPost] = useState({})
    const [id, setId] = useState(1)
    const [idButton, setIdButton] = useState(1)

    const HandlerClick = () => {
        setIdButton(id)
    }

    useEffect(() => {
        axios
            .get(`https://jsonplaceholder.typicode.com/posts/${idButton}`)
            .then(res => {
                setPost(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [idButton])

    return (
        <div>
            <input type='text'
                value={id}
                onChange={e => setId(e.target.value)}
            />
            <button type="button" onClick={HandlerClick}>fetch post</button>
            <div>{post.title}</div>
            {/* <ul>
                {post.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul> */}
        </div>
    )
}

export default DataFetching