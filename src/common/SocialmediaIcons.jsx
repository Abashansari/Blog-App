import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function SocialmediaIcons() {
  return (
    <div className="container d-flex justify-content-center align-items-center my-2 gap-3">
      <a href="https://github.com/Abashansari">
        <GitHubIcon sx={{ color: '#000000', fontSize: 31 }} />
      </a>
      <a href="https://www.linkedin.com/in/abash-ansari-0bb191326?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
        <LinkedInIcon sx={{ color: '#0077b5', fontSize: 36 }} />
      </a>
      <a href="https://x.com/Abash_Ansari21?t=g8ZINRYA9Bd8RJcVg7jS-A&s=09">
        <XIcon sx={{ color: '#000000', fontSize: 30 }} />
      </a>
      <a href="https://www.instagram.com/abash_21ansari?igsh=djlkdW43YzVncjR1">
        <InstagramIcon sx={{ color: '#E1306C', fontSize: 33 }} />
      </a>
    </div>
  )
}
