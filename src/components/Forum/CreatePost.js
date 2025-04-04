import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { forumTopics } from '../../data/forumTopics';


const CreatePost = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    topicId: '',
    content: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.title.trim() || !formData.topicId || !formData.content.trim()) {
      setError('Please fill in all fields.');
      return;
    }
    

    


    
    navigate('/forum');
  };

  return (
    <div className="create-post-container">
      <div className="post-navigation">
        <Link to="/forum" className="back-btn">
          <i className="fas fa-arrow-left"></i> Back to Forums
        </Link>
      </div>
      
      <div className="post-form-header">
        <h1>Create New Thread</h1>
        <p>Start a new discussion in the F1 community.</p>
      </div>
      
      {error && <div className="error-message">{error}</div>}
      
      <form className="post-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Thread Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter a descriptive title"
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="topicId">Forum Topic</label>
          <select
            id="topicId"
            name="topicId"
            value={formData.topicId}
            onChange={handleChange}
            required
          >
            <option value="">Select a topic</option>
            {forumTopics.map((topic) => (
              <option key={topic.id} value={topic.id}>
                {topic.title}
              </option>
            ))}
          </select>
        </div>
        
        <div className="form-group">
          <label htmlFor="content">Thread Content</label>
          <textarea
            id="content"
            name="content"
            rows="10"
            value={formData.content}
            onChange={handleChange}
            placeholder="Type your post content here..."
            required
          ></textarea>
        </div>
        
        <div className="form-actions">
          <button type="submit" className="btn btn-primary">
            Create Thread
          </button>
          <Link to="/forum" className="btn btn-secondary">
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;