import mongoose from "mongoose"

const taggSchema = mongoose.Schema({ tag: { type: String, required: true } })
const tagSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        tags: {
            type: [taggSchema],
            required: true
        }
    }
)

const Tag = mongoose.model("Tag", tagSchema)
export default Tag