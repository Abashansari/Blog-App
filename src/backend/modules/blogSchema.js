import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    introduction: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    summary: {
        type: String,
        required: true
    },
    thoughts: {
        type: String,
        required: true
    },
    author: {
        type: String,
        default: "Admin"
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const blogs = mongoose.model('blog', blogSchema);
export default blogs;
