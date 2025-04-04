import React from 'react';
import { Link } from 'react-router-dom';
import { forumTopics } from '../../data/forumTopics';
import './ForumHome.css';

const ForumHome = () => {
  return (
    <div className="forum-container">
      <div className="forum-header">
        <h1 className="forum-title">Community Forums</h1>
        <p className="forum-description">
          Join fellow F1 fans in discussions about races, drivers, teams, and more.
        </p>
        <Link to="/forum/create" className="forum-button">
          <i className="fas fa-plus-circle"></i> Create New Thread
        </Link>
      </div>

      <div className="forum-section">
        <h2 className="forum-subtitle">Discussion Topics</h2>
        <div className="forum-topics">
          {forumTopics.map((topic) => (
            <div key={topic.id} className="forum-topic-card">
              <div className="forum-icon">
                <i className={`fas fa-${topic.icon}`}></i>
              </div>
              <div className="forum-topic-content">
                <h3 className="forum-topic-title">
                  <Link to={`/forum/topic/${topic.id}`} className="forum-topic-link">
                    {topic.title}
                  </Link>
                </h3>
                <p className="forum-topic-description">{topic.description}</p>
                <div className="forum-meta">
                  <span><i className="fas fa-folder"></i> {topic.threads} threads</span>
                  <span><i className="fas fa-comment"></i> {topic.posts} posts</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>


      <div className="forum-latest-activity">
        <h2 className="forum-subtitle">Latest Activity</h2>
        <div className="forum-activity-list">

          <div className="forum-activity-item">
            <div className="forum-activity-content">
              <h4 className="forum-activity-title">
                <Link to="/forum/thread/1" className="forum-topic-link">
                  2024 Monaco GP Discussion
                </Link>
              </h4>
              <p className="forum-activity-meta">Started by F1Fan123, 2 days ago</p>
            </div>
            <div className="forum-activity-stats">
              <span><i className="fas fa-reply"></i> 32 replies</span>
              <span><i className="fas fa-clock"></i> Last post: 3 hours ago</span>
            </div>
          </div>


          <div className="forum-activity-item">
            <div className="forum-activity-content">
              <h4 className="forum-activity-title">
                <Link to="/forum/thread/2" className="forum-topic-link">
                  Ferrari's New Upgrades
                </Link>
              </h4>
              <p className="forum-activity-meta">Started by FerrariTifosi, 3 days ago</p>
            </div>
            <div className="forum-activity-stats">
              <span><i className="fas fa-reply"></i> 28 replies</span>
              <span><i className="fas fa-clock"></i> Last post: 5 hours ago</span>
            </div>
          </div>


          <div className="forum-activity-item">
            <div className="forum-activity-content">
              <h4 className="forum-activity-title">
                <Link to="/forum/thread/3" className="forum-topic-link">
                  Best F1 Drivers of All Time
                </Link>
              </h4>
              <p className="forum-activity-meta">Started by RacingHistorian, 1 week ago</p>
            </div>
            <div className="forum-activity-stats">
              <span><i className="fas fa-reply"></i> 45 replies</span>
              <span><i className="fas fa-clock"></i> Last post: 1 day ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForumHome;
