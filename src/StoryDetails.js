import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const StoryDetails = () => {
  const { id } = useParams();
  const [story, setStory] = useState(null);
  const [activeTab, setActiveTab] = useState('Word Explorer');

  useEffect(() => {
    axios.get(`https://child.onrender.com/api/sciencefiction/${id}`)
      .then(response => setStory(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, [id]);

  if (!story) return <p>Loading...</p>;

  return (
    <div className="story-details">
      <h2>{story.title}</h2>
      <img src={`https://ik.imagekit.io/dev24/${story.Image}`} alt={story.title} />
      <h2>{story.Image}</h2>
      <div className="tabs">
        <button onClick={() => setActiveTab('Word Explorer')}>Word Explorer</button>
        <button onClick={() => setActiveTab('Story Adventure')}>Story Adventure</button>
        <button onClick={() => setActiveTab('Brain Quest')}>Brain Quest</button>
      </div>
      <div className="tab-content">
        {activeTab === 'Word Explorer' && <div>Content for Word Explorer</div>}
        {activeTab === 'Story Adventure' && <div>Content for Story Adventure</div>}
        {activeTab === 'Brain Quest' && <div>Content for Brain Quest</div>}
      </div>
    </div>
  );
};

export default StoryDetails;
