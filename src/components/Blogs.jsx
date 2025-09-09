import React, { useEffect, useState } from 'react'
import CardItems from './CardItems'
import axios from 'axios'

export default function Blogs() {
  const [blogs, setBlogs] = useState([])

  useEffect(() => {

    const getBlogs = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/blog/getBlog`)
        setBlogs(response.data)
        console.log(response.data)

      } catch (error) {
        console.log("failed to fetch data from backend", error.message)
      }
    }
    getBlogs()
  }, [])

  return (
    <>
      <div className='container'>This is Blog page</div>
      {blogs.map((blog) => {
        return <CardItems key={blog._id} author={blog.author} title={blog.title} introduction={blog.introduction} image={blog.img} summary={blog.summary} thoughts={blog.thoughts} date={blog.date}/>
      })}
    </>
  )
}
