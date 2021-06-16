import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import InputTag from '../component/InputTag'
import Home from './Home'
import "../component/InputTag.css"

const Insert = () => {
    const [show, setShow] = useState(false)
    // const [tags, setTags] = useState("")
    const [title, setTitle] = useState("")

    const addToList = () => {
        axios.post("http://localhost:5000/hashtags/insert", {
            title: title,
            tags: tags
        })
        // setTags("")
        setTitle("")
    }

    ///////////////////////////////////////////////////////////////////////////////////////////////////
    const [tags, setTags] = useState([
        'Tags',
        'Input'
    ]);

    var tagInput = ""

    const removeTag = (i) => {
        const newTags = [...tags];
        newTags.splice(i, 1);

        // Call the defined function setTags which will replace tags with the new value.
        setTags(newTags);
    };

    const inputKeyDown = (e) => {
        const val = e.target.value;
        if (e.key === 'Enter' && val) {
            if (tags.find(tag => tag.toLowerCase() === val.toLowerCase())) {
                return;
            }
            setTags([...tags, val]);
            tagInput.value = null;
        } else if (e.key === 'Backspace' && !val) {
            removeTag(tags.length - 1);
        }
    };
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
                        {/* <input type="text" value={tags} onChange={((e) => { setTags(e.target.value) })} placeholder="Enter Tags"></input> */}
                        <div>
                            <div className="input-tag">
                                <ul className="input-tag__tags">
                                    {tags.map((tag, i) => (
                                        <li key={tag}>
                                            {tag}
                                            <button type="button" onClick={() => { removeTag(i); }}>+</button>
                                        </li>
                                    ))}
                                    <li className="input-tag__tags__input"><input type="text" onKeyDown={inputKeyDown} ref={c => { tagInput = c }} /></li>
                                </ul>
                            </div>
                        </div>
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
