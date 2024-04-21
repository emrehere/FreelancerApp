"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { FaPaperPlane } from 'react-icons/fa'; // for the send button icon

function SharedPost() {
  const examplePost = "This is an example shared post with a lot of content";
  
  // State to manage comments
  const [comments, setComments] = useState([
    { author: 'Jane Doe', content: 'Great post!', timestamp: '1 hour ago' },
    { author: 'John Smith', content: 'Interesting thoughts!', timestamp: '2 hours ago' },
  ]);

  // State for the new comment input
  const [newComment, setNewComment] = useState('');

  const handleAddComment = () => {
    if (newComment.trim()) {
      const newCommentObject = {
        author: 'User Name', // In a real app, get this from user data
        content: newComment.trim(),
        timestamp: 'Just now', // Typically you'd use a timestamp generator
      };
      setComments([newCommentObject, ...comments]); // Add the new comment to the beginning
      setNewComment(''); // Reset the input field
    }
  };

  return (
    <div className="bg-white rounded-xl p-4 w-[38rem] flex flex-col justify-center">
      <div className="relative flex items-center space-x-4">
        <Image src="/kadin.webp" height={60} width={60} className="rounded-full object-cover" alt="profile" />
        <div>
          <p className="font-medium text-gray-600">Pat Delos Santos</p>
          <p className="text-gray-500 text-sm">10 hours ago</p>
        </div>
      </div>

      <div className="mt-4 p-2">
        <p>
          {examplePost.length > 250 ? `${examplePost.slice(0, 250)} ...` : examplePost}
        </p>
      </div>

      {/* Comment section */}
      <div className="mt-4">
        

        {/* Display comments */}
        <div className="mt-4">
          {comments.map((comment, index) => (
            <div key={index} className="mb-2">
              <div className="flex space-x-2 items-center">
                <Image
                  src="/default-profile.jpg" // placeholder for commenter's profile picture
                  height={24}
                  width={24}
                  className="rounded-full"
                  alt="commenter"
                />
                <div className="text-sm">
                  <p className="font-medium">{comment.author}</p>
                  <p className="text-gray-500">{comment.content}</p>
                  <p className="text-xs text-gray-400">{comment.timestamp}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex space-x-2 items-center">
          <input
            type="text"
            placeholder="Add a comment..."
            className="flex-1 border border-gray-300 rounded-full px-3 py-1"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <button
            className="text-blue-500"
            onClick={handleAddComment}
          >
            <FaPaperPlane />
          </button>
        </div>
    </div>
  );
}

export default SharedPost;
