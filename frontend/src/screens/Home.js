import React, { useState, useEffect } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'
import TagsInput from 'react-tagsinput'

const Home = () => {
    const [tagData, setTagData] = useState([])

    const setNewData = async (id, newTitle, newTags) => {
        console.log(id, newTitle, newTags);
        const responseData = await axios.put("http://localhost:5000/hashtags/update", { id: id, newTitle: newTitle, newTags: newTags })
        console.log(responseData);
        if (responseData.data === "data updated") {
            const filterData = tagData.map((tag) => {
                if (tag._id === id) {
                    tag.title = newTitle
                    tag.tags = newTags

                    return tag
                } else {
                    return tag
                }
            })
            setTagData(filterData)
            alert("Group Data Updated !")
        }
    }

    const updateTitle = (id, newTitle) => {
        const updateData = tagData.map((tag) => {
            if (tag._id === id) {
                tag.title = newTitle

                return tag
            } else {
                return tag
            }
        })
        setTagData(updateData)
    }

    const updateTag = (id, newTag) => {
        const updateData = tagData.map((tag) => {
            if (tag._id === id) {
                tag.tags = newTag

                return tag
            } else {
                return tag
            }
        })

        setTagData(updateData)

    }

    const deleteGroup = async (id) => {
        const response = await axios.delete(`http://localhost:5000/hashtags/delete/${id}`)
        console.log(response.data);
        if (response.data === "deleted") {
            const filterData = tagData.filter((tag) => {
                if (tag._id !== id) {
                    return tag
                }
            })
            console.log(filterData);
            setTagData(filterData)
        }
    }
    useEffect(() => {
        const fetchTags = async () => {
            const { data } = await axios.get("http://localhost:5000/hashtags")
            setTagData(data)
        }
        fetchTags()
    }, [])
    return (
        <div>
            <Link className="goto" to="/">Go Back</Link>
            {
                tagData.map((tag, index) => {
                    return (

                        <div className="tag" key={tag._id}>
                            <h3>Group No. : {index + 1}</h3>
                            <h1>Title: {tag.title}</h1>
                            <h3>Hashtags: {tag.tags}</h3>
                            <h2>Edit Data</h2>
                            <input type="text" placeholder="New Group Name" value={tag.title} onChange={((e) => updateTitle(tag._id, e.target.value))}></input>
                            <br></br>
                            <br></br>
                            <input type="text" placeholder="New Tag Names" value={tag.tags} onChange={((e) => updateTag(tag._id, e.target.value))}></input>
                            <br></br>
                            <br></br>
                            <button className="edit" onClick={() => setNewData(tag._id, tag.title, tag.tags)}>Submit</button>
                            <button className="edit" onClick={() => deleteGroup(tag._id)}>Delete</button>
                        </div>

                    )
                })
            }

        </div>
    )
}

export default Home
