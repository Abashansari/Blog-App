import express from 'express'
import blogs from '../modules/blogSchema'

const blogRoutes = express.Router()

blogRoutes.post('/addBlog' , async (req,res) => {
    
    const {title,summary,conclusion} = req.body()

    const blog = new blogs({
        title,
        summary,
        conclusion
    })

    await blog.save()
    res.status(201).json(blog)
    console.log("blog added successfully")

})
export default blogRoutes