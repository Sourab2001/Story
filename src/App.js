import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StoryList from './StoryList';
import StoryDetails from './StoryDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<StoryList />} />
          <Route path="/story/:id" element={<StoryDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
