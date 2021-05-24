import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Home from './Home'

const Insert = () => {
    const [show, setShow] = useState(false)
    const [tags, setTags] = useState("")
    const [title, setTitle] = useState("")

    const addToList = () => {
        axios.post("http://localhost:5000/hashtags/insert", {
            title: title,
            tags: tags
        })
        setTags("")
        setTitle("")
    }
    return (
        <div>
            <h1>TagsProduct</h1>
            <button onClick={() => setShow(!show)}>Create Group Name</button>
            <Link className="goto" to="/view">Show My Groups</Link>
            <br></br>
            {
                show ?
                    <>
                        <br></br>
                        <input type="text" value={title} onChange={((e) => { setTitle(e.target.value) })} placeholder="Enter Group Name"></input>
                        <br></br>
                        <br></br>
                        <input type="text" value={tags} onChange={((e) => { setTags(e.target.value) })} placeholder="Enter Tags"></input>
                        <br></br>
                        <br></br>
                        <button onClick={addToList}>Add</button>
                        <br></br>
                        <br></br>
                    </>
                    : null
            }
        </div>
    )
}

export default Insert
