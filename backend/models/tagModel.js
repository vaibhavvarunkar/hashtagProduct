import mongoose from "mongoose"

const tagSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        tags: {
            type: String,
            required: true
        }
    }
)

const Tag = mongoose.model("Tag", tagSchema)
export default Tag