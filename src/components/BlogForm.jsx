import React, { useState } from 'react';
import '../App.css'

export default function BlogForm() {
    const [text, setText] = useState({title:'', introduction:'', summary:'', thoughts:''})
    const [image,setImage] = useState(null)
    const [Message,setMessage] = useState('')



    return (
        <div className="form-background d-flex justify-content-center align-items-center vh-100">
            <div className="form-container p-4 rounded shadow bg-white bg-opacity-75">
                <form style={{ width: '100%', maxWidth: '600px' }}>
                    <h2 className="mb-4 text-primary text-center">Submit a New Blog</h2>

                    <div className="mb-3">
                        <label htmlFor="inputTitle" className="form-label">Blog Title <span className="text-danger">*</span></label>
                        <input type="text" className="form-control" id="inputTitle" placeholder="Enter your blog title" required />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="inputDescription" className="form-label">Introduction<span className='text-danger'>*</span></label>
                        <textarea className="form-control" id="inputDescription" rows="3" placeholder="Write a short introduction..."></textarea>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="inputImage" className="form-label">
                            Upload Blog Image <span className="text-danger">*</span>
                        </label>
                        <input className="form-control" type="file" id="inputImage" accept="image/*" required />
                        <div className="form-text">
                            Accepted formats: JPG, PNG. Max size: 5MB.
                        </div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="inputDescription" className="form-label">Summary<span className='text-danger'>*</span></label>
                        <textarea className="form-control" id="inputDescription" rows="3" placeholder="Write a short summary..."></textarea>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="inputConclusion" className="form-label">Your Thoughts<span className='text-danger'>*</span></label>
                        <textarea className="form-control" id="inputConclusion" rows="2" placeholder="Final thoughts"></textarea>
                    </div>

                    <button type="submit" className="btn btn-primary w-100">Publish Blog</button>
                </form>
            </div>
        </div>
    );
}
