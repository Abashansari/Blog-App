import React from 'react'
import abash from '../assets/abash.jpeg'

export default function About() {
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-7 mb-5'>
                        <div className='container color-parchment'>
                            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
                                <img src={abash} alt='abash' width='80%' />
                            </div>
                        </div>
                    </div>
                    <div className='col-md-5'>
                        <div className="container">
                            <h1 className='mb-3cmt-5 mt-6' style={{ color: 'black' }}>Hi! I’m Abash</h1>
                            <h2 className='mb-5' style={{ color: 'black' }}>" Full Stack Developer & Blogger "</h2>

                            <p className='mb-6' style={{ color: 'black' }}>
                                Welcome to my blog — a platform I designed and developed entirely using the MERN stack (MongoDB, Express.js, React, and Node.js).<br />
                                This application is more than just a blog — it's a personal project that brings together my skills in both frontend and backend development.<br />
                                Every feature, page, and post reflects my commitment to building with purpose and precision.<br />
                            </p>

                            <p className='mb-6' style={{ color: 'black' }}>
                                I’m passionate about creating applications that are not only functional but also intuitive and user-friendly.<br />
                                Building this blog from scratch wasn’t just a technical challenge — it was a creative journey.<br />
                                It gave me the opportunity to craft a space that truly represents who I am as a developer,<br />
                                and how I think about user experience, design, and problem-solving.<br />
                            </p>

                            <p className='mb-6' style={{ color: 'black' }}>
                                Here, I share what I learn, build, and explore — from deep dives into JavaScript and full stack workflows,
                                to hands-on tutorials with React, Node.js, and MongoDB.<br />
                                My goal is to make this a helpful, insightful space for developers at all levels.<br />
                                Whether you're an experienced developer, someone just getting started, or simply curious <br />
                                about tech — I’m glad you’re here.<br />
                                Feel free to explore, learn, and connect.<br />
                                And the best part? You're experiencing it all on a platform I built myself.<br />
                            </p>

                            <p className="mt-6 mb-4" style={{ color: 'black' }}>
                                <b>Have a project idea in mind?</b><br />
                                I’m always open to new collaborations. If you’re passionate about building something meaningful and <br />
                                looking for a developer to bring your idea to life, feel free to reach out <br />
                                — let’s create something great together.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
