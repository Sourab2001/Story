import React from 'react';
import { Link } from 'react-router-dom';

const StoryCard = ({ story }) => {
  return (
    <div className="story-card">
      <img src={`https://ik.imagekit.io/dev24/${story.Image}`} alt={story.title} />
      <h3>{story.title}</h3>
      <p className={`status ${story.status.toLowerCase()}`}>{story.status}</p>
      <Link to={`/story/${story._id}`}>Read More</Link>
    </div>
  );
};

export default StoryCard;
