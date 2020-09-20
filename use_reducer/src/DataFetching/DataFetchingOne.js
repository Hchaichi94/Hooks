import React, { useState, useEffect } from 'react'
import axios from 'axios'

function DataFetchingOne() {
    const [loading, setLoading] = useState(true)
    const [error, seterror] = useState('')
    const [post, setPost] = useState({})

    useEffect(() => {
        axios
            .get(`https://jsonplaceholder.typicode.com/posts/1`)
            .then(res => {
                setLoading(false)
                setPost(res.data)
                seterror('')
            })
            .catch(err => {
                setLoading(false)
                setPost({})
                seterror('something went wrong')
            })
    }, [])
    return (
        <div>
            {loading ? 'loading ' : post.title}
            {error ? error : null}
        </div>
    )
}
export default DataFetchingOne