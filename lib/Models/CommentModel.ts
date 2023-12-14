import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    comment:String,
    replies:[{type:mongoose.Schema.Types.ObjectId,ref:'Comment'}],
    threadId:{type:mongoose.Schema.Types.ObjectId,ref:'Thread'},
    authorId: {type:mongoose.Schema.Types.ObjectId,ref:'User'},
    likes:{type:Number},
})

const Comment = mongoose.models.Comment || mongoose.model("Comment",commentSchema)
export default Comment; 