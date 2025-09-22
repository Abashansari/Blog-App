import React, { useState } from 'react';
import axios from 'axios';

export default function BlogForm() {
    const [text, setText] = useState({ title: '', introduction: '', summary: '', thoughts: '' })
    const [image, setImage] = useState(null)
    const [message, setMessage] = useState('')

    const handleChange = (e) => {
        setText({ ...text, [e.target.name]: e.target.value })
    }

    const handleImageChange = (e) => {
        setImage(e.target.files[0])
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const data = new FormData()
        data.append('title', text.title)
        data.append('introduction', text.introduction)
        data.append('summary', text.summary)
        data.append('thoughts', text.thoughts)
        data.append('img', image)

        try {
            const res = await axios.post(`http://localhost:5000/api/blog/addBlog`, data, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })

            console.log(res.data)
            setMessage("Blog added successfully !")

        } catch (error) {
            setMessage("Failed to add Blog !")
            console.log('Reason :', error.message)
        }

    }

    return (
        <div className="form-background d-flex justify-content-center align-items-center vh-100">
            <div className="form-container p-4 rounded shadow bg-white bg-opacity-75">
                <form style={{ width: '100%', maxWidth: '600px' }}>
                    <h2 className="mb-4 text-primary text-center">Write a New Blog</h2>

                    <div className="mb-3">
                        <label htmlFor="inputTitle" className="form-label">Blog Title <span className="text-danger">*</span></label>
                        <input type="text" name='title' className="form-control" id="inputTitle" placeholder="Enter your blog title" onChange={handleChange} required />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="inputDescription" className="form-label">Introduction<span className='text-danger'>*</span></label>
                        <textarea name='introduction' className="form-control" id="inputDescription" rows="3" placeholder="Write a short introduction..." onChange={handleChange}></textarea>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="inputImage" className="form-label">
                            Upload Blog Image <span className="text-danger">*</span>
                        </label>
                        <input className="form-control" type="file" id="inputImage" accept="image/*" onChange={handleImageChange} required />
                        <div className="form-text">
                            Accepted formats: JPG, PNG. Max size: 5MB.
                        </div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="inputDescription" className="form-label">Summary<span className='text-danger'>*</span></label>
                        <textarea name='summary' className="form-control" id="inputDescription" rows="3" placeholder="Write a short summary..." onChange={handleChange}></textarea>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="inputConclusion" className="form-label">Your Thoughts<span className='text-danger'>*</span></label>
                        <textarea name='thoughts' className="form-control" id="inputConclusion" rows="2" placeholder="Final thoughts" onChange={handleChange}></textarea>
                    </div>

                    <button type="submit" className="btn btn-primary w-100" onClick={handleSubmit}>Publish Blog</button>
                    <p>{message}</p>
                </form>
            </div>
        </div>
    );
}
