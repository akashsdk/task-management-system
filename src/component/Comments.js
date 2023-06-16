import React, { useState} from 'react'

export default function Comments() {
    
        const [comments, setComments] = useState([]);
        const [newComment, setNewComment] = useState('');
        const [task, setTask] = useState('');
      
        const handleCommentChange = (e) => {
          setNewComment(e.target.value);
        };
      
        const handleCommentSubmit = (e) => {
          e.preventDefault();
          const comment = {
            id: comments.length + 1,
            content: newComment,
            commenter: 'Commenter Name', 
            timestamp: new Date().toLocaleString(),
          };
          setComments([...comments, comment]);
          setNewComment('');
        };
    
  return (
    <div>
      <h1>Task Detail</h1>
      <h2>{task.name}</h2>
      <p>
        <strong>Description:</strong> {task.description}
      </p>
      <p>
        <strong>Due Date:</strong> {task.dueDate}
      </p>
      <p>
        <strong>Status:</strong> {task.status}
      </p>
      <p>
        <strong>Assignee:</strong> {task.assignee}
      </p>

      <div>
        <h3>Comments</h3>
        {comments.length > 0 ? (
          <ul>
            {comments.map((comment) => (
              <li key={comment.id}>
                <p>{comment.content}</p>
                <p>
                  <em>{comment.commenter}</em> - {comment.timestamp}
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No comments yet.</p>
        )}
      </div>

      <form onSubmit={handleCommentSubmit}
      style={{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
      }}>
        <textarea
          value={newComment}
          onChange={handleCommentChange}
          placeholder="Add a comment..."
          rows="4"
          style={{
            marginLeft:'20px',
            width:'200px',
        
          }}
        ></textarea>
        <button type="submit" 
        style={{
            marginTop:'15px'
          }}>Submit</button>
      </form>
    </div>

  )
}
