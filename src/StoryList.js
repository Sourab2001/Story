import React, { useEffect, useState } from 'react';
import axios from 'axios';
import StoryCard from './StoryCard';

const StoryList = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    axios.get('https://child.onrender.com/api/sciencefiction')
      .then(response => setStories(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="story-list">
      {stories.map(story => (
        <StoryCard key={story._id} story={story} />
      ))}
    </div>
  );
};

export default StoryList;
