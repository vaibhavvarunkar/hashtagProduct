import express from "express"
import Tag from "../models/tagModel.js"
const router = express.Router()

router.get("/", async (req, res) => {
    const hashtags = await Tag.find({})
    res.json(hashtags)
})

router.post("/insert", async (req, res) => {
    const title = req.body.title
    const tags = req.body.tags

    const hashtag = new Tag({ title: title, tags: tags })
    try {
        await hashtag.save()
    } catch (err) {
        console.log(err);
    }
})

router.put("/update", async (req, res) => {
    const newTitle = req.body.newTitle
    const newTags = req.body.newTags
    const id = req.body.id


    try {
        const updatedData = await Tag.findById(id)
        updatedData.title = newTitle
        updatedData.tags = newTags
        await updatedData.save()
        res.send("data updated")

    } catch (err) {
        console.log(err);
    }
})

router.delete("/delete/:id", async (req, res) => {
    const id = req.params.id
    try {
        const deletedItem = await Tag.findByIdAndRemove(id).exec()
        res.send("deleted")
    } catch (err) {
        console.log(err);
    }
})


export default router