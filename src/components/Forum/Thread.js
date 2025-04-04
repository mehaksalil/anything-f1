import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { formatDate } from '../../utils';
import './Thread.css';

const Thread = () => {
  const { id } = useParams();
  const [thread, setThread] = useState(null);
  const [replies, setReplies] = useState([]);
  const [newReply, setNewReply] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const mockThread = {
      id: 1,
      title: "2024 Monaco GP Discussion",
      content: "What did everyone think of the Monaco Grand Prix this weekend? I thought the race was a bit processional as usual, but the qualifying session was incredible with those close times!",
      author: "F1Fan123",
      datePosted: "2024-04-01T08:15:00Z",
      likes: 24,
      views: 156
    };

    const mockReplies = [
      {
        id: 1,
        threadId: 1,
        content: "Qualifying was definitely the highlight! Those last lap battles for pole were intense.",
        author: "SpeedDemon",
        datePosted: "2024-04-01T09:30:00Z",
        likes: 12
      },
      {
        id: 2,
        threadId: 1,
        content: "I think they really need to consider changing the Monaco format.",
        author: "RacingTactic",
        datePosted: "2024-04-01T10:45:00Z",
        likes: 8
      },
      {
        id: 3,
        threadId: 1,
        content: "The strategy calls were interesting though. Some teams really made the most of limited overtaking opportunities.",
        author: "F1Strategist",
        datePosted: "2024-04-01T11:20:00Z",
        likes: 15
      }
    ];

    setTimeout(() => {
      setThread(mockThread);
      setReplies(mockReplies);
      setIsLoading(false);
    }, 500);
  }, [id]);

  const handleSubmitReply = (e) => {
    e.preventDefault();
    if (newReply.trim() === '') return;

    const newReplyObj = {
      id: replies.length + 1,
      threadId: thread.id,
      content: newReply,
      author: "CurrentUser",
      datePosted: new Date().toISOString(),
      likes: 0
    };

    setReplies([...replies, newReplyObj]);
    setNewReply('');
  };

  const handleThreadLike = () => {
    setThread(prev => ({ ...prev, likes: prev.likes + 1 }));
  };

  const handleReplyLike = (replyId) => {
    const updatedReplies = replies.map(reply =>
      reply.id === replyId ? { ...reply, likes: reply.likes + 1 } : reply
    );
    setReplies(updatedReplies);
  };
  const handleQuote = (author, content) => {
    const quotedText = `> ${content}\n\n@${author} `;
    setNewReply(quotedText);
  };
  

  if (isLoading) {
    return <div className="loading">Loading thread...</div>;
  }

  return (
    <div className="container">
      <div className="back-link">
        <Link to="/forum">← Back to Forums</Link>
      </div>

      <div className="thread-header">
        <h1>{thread.title}</h1>
        <div className="thread-meta">
          <span>Started by {thread.author}</span>
          <span>{formatDate(thread.datePosted)}</span>
          <span>{thread.views} views</span>
        </div>
      </div>

      <div className="post">
        <div className="author-info">
          <img src="/assets/avatars/default.png" alt={thread.author} className="avatar" />
          <p>{thread.author}</p>
        </div>
        <div className="post-content">
          <p>{thread.content}</p>
          <div className="post-actions">
            <button onClick={handleThreadLike}>👍 Like ({thread.likes})</button>
            <button onClick={() => handleQuote(thread.author, thread.content)}>💬 Quote</button>

          </div>
        </div>
      </div>

      <h3 className="replies-header">Replies ({replies.length})</h3>
      {replies.map((reply) => (
        <div key={reply.id} className="post">
          <div className="author-info">
            <img src="/assets/avatars/default.png" alt={reply.author} className="avatar" />
            <p>{reply.author}</p>
          </div>
          <div className="post-content">
            <p>{reply.content}</p>
            <div className="post-meta">{formatDate(reply.datePosted)}</div>
            <div className="post-actions">
              <button onClick={() => handleReplyLike(reply.id)}>👍 Like ({reply.likes})</button>
              <button onClick={() => handleQuote(reply.author, reply.content)}>💬 Quote</button>

            </div>
          </div>
        </div>
      ))}

      <div className="reply-form">
        <h3>Add Your Reply</h3>
        <form onSubmit={handleSubmitReply}>
          <textarea
            rows="5"
            placeholder="Type your reply here..."
            value={newReply}
            onChange={(e) => setNewReply(e.target.value)}
            required
          ></textarea>
          <button type="submit">Post Reply</button>
        </form>
      </div>
    </div>
  );
};

export default Thread;
