import express from 'express';
import blogs from '../modules/blogSchema.js';

const blogRoutes = express.Router();

// ------------------Add Blog---------------------------------------------------------->
blogRoutes.post('/addBlog', async (req, res) => {
    console.log("POST request hit successfully !");

    try {
        const { title, introduction, summary, thoughts } = req.body;

        if (!title || !introduction || !summary || !thoughts) {
            return res.status(400).json({ error: "Missing required fields" });
        }

        const blog = new blogs({
            title,
            introduction,
            summary,
            thoughts
        });

        await blog.save();

        res.status(201).json({ message: "Blog added successfully", blog });
    } catch (error) {
        console.error(" Error saving blog:", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
});

// ---------------------------Get Blogs------------------------------------------------------->

blogRoutes.get('/getBlog', async (req,res)=>{
    // const {id} = req.params
    try {
        const allBlogs = await blogs.find()
    res.status(201).json(allBlogs)

    } catch (error) {
        res.status(500).json({error:error.message})
    }
    
})

export default blogRoutes;
