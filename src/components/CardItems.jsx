import React, { useState } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SocialmediaIcons from './SocialmediaIcons';

export default function CardItems({ image, title, introduction, summary, thoughts, author, date }) {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(prev => !prev);
  };

  return (
    <div
  className="card shadow-sm mb-4 hover-card"
  style={{ maxWidth: "500px", backgroundColor: "#ffffff", cursor: "pointer" }}
  onClick={handleToggle}
>

        <img src={`http://localhost:5000/upload/${image}`} className="card-img-top" alt={title} style={{ maxHeight: "250px", objectFit: "cover" }} />

      <div className="card-body">

        <div className="text-muted d-flex align-items-center mb-0" style={{ fontSize: '0.9rem' }}>
          <AccountCircleIcon fontSize="small" className="me-1" />
          <span className="hover-text">{author}</span>
        </div>

        <div className="text-start text-dark ml-3 mb-2 hover-text" style={{ fontSize: '0.8rem' }}>
          {new Date(date).toLocaleDateString()}
        </div>

        <h5 className="card-title text-dark hover-text">{title}</h5>

        <p className="text-dark mb-0 hover-text mb-5">{introduction}</p>

        {expanded && (
          <>
            <p className="text-muted mb-3">{summary}</p>
            <p className="text-muted">{thoughts}</p>
            <hr />
            <SocialmediaIcons />
            <hr />
          </>
        )}
      </div>
    </div>
  );
}
