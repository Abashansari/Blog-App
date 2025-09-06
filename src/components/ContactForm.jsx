import React from 'react'
import SendIcon from '@mui/icons-material/Send';

export default function ContactForm() {
    return (
        <form>

            <div className="mb-3">
                <label htmlFor="name" className="form-label fw-bold" >Full Name </label>
                <input type="text" className="form-control" id="name" placeholder="Enter your name" required />
            </div>

            <div className="mb-3">
                <label htmlFor="email" className="form-label fw-bold">Email Address </label>
                <input type="email" className="form-control" id="email" placeholder="your@email" required />
            </div>

            <div className="mb-3">
                <label htmlFor="message" className="form-label fw-bold">Message</label>
                <textarea className="form-control" id="message" rows="5" placeholder="Write about your project idea"></textarea>
            </div>

            <button type="submit" className="btn btn-primary w-100"><SendIcon className='me-2' /> Send Message</button>

        </form>
    )
}
