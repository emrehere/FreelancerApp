"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { FaPaperPlane } from 'react-icons/fa'; // for the send button icon

function SharedPost() {
  const examplePost = "This is an example shared post with a lot of content This is an example shared post with a lot of content This is an example shared post with a lot of content This is an example shared post with a lot of content This is an example shared post with a lot of content This is an example shared post with a lot of content This is an example shared post with a lot of content";

  // State to manage comments
  const [comments, setComments] = useState([
    { author: 'Jane Doe', content: 'Great post!', timestamp: '1 hour ago' },
    { author: 'John Smith', content: 'Interesting thoughts!', timestamp: '2 hours ago' },
  ]);

  // State for the new comment input
  const [newComment, setNewComment] = useState('');
  const [showComments, setShowComments] = useState(false);
  const [read, setRead] = useState(false);

  const readMore = () => {
    setRead(!read);
  }

  const showMoreComments = () => {
    setShowComments(!showComments); 
  }

  const handleAddComment = () => {
    if (newComment.trim()) {
      const newCommentObject = {
        author: 'User Name', // In a real app, get this from user data
        content: newComment.trim(),
        timestamp: 'Just now', // Typically you'd use a timestamp generator
      };
      setComments([ ...comments , newCommentObject]); // Add the new comment to the beginning
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
          {!read && examplePost.length > 250 ? `${examplePost.slice(0, 250)} ...`
          :
           examplePost}
           {
            examplePost.length > 250 && (
              <button onClick={readMore} className="text-blue-400 ml-2 font-medium">
                {
                  read ? 'Read less' : 'Read more'
                }
              </button>
            )
           }
        </p>
      </div>

      {/* Comment section */}
      <div className="mt-4">


        {/* Display comments */}
        <div className="mt-4">
          {
            comments.length > 1 && (
              <div>
                <button className="text-blue-400 font-medium
                tracking-wider text-[14px] mb-2" onClick= {showMoreComments}>
                  {
                    showComments ? 'View less comments' : 'View more comments'
                  }
                </button>
              </div>
            )
          }
          {
            !showComments && (
              <div className="mb-2">
              <div className="flex space-x-2 items-center">
                <Image
                  src="/kadin.webp" // placeholder for commenter's profile picture
                  height={24}
                  width={24}
                  className="rounded-full"
                  alt="commenter"
                />
                <div className="text-sm bg-blue-50 rounded-xl py-2 px-4">
                  <p className="font-medium">{comments[comments.length - 1].author}</p>
                  <p className="text-gray-500">{comments[comments.length - 1].content}</p>
                  <p className="text-xs text-gray-400">{comments[comments.length - 1].timestamp}</p>
                </div>
              </div>
            </div>
            )
          }
          {showComments && comments.map((comment, index) => (
            <div key={index} className="mb-2">
              <div className="flex space-x-2 items-center">
                <Image
                  src="/kadin.webp" // placeholder for commenter's profile picture
                  height={24}
                  width={24}
                  className="rounded-full"
                  alt="commenter"
                />
                <div className="text-sm bg-blue-50 rounded-xl py-2 px-4">
                  <p className="font-medium">{comment.author}</p>
                  <p className="text-gray-500">{comment.content}</p>
                  <p className="text-xs text-gray-400">{comment.timestamp}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex space-x-2 mt-2 items-center">
        <Image
          src="/kadin.webp" // placeholder for commenter's profile picture
          height={24}
          width={24}
          className="rounded-full"
          alt="commenter"
        />
        <input
          type="text"
          placeholder="Add a comment..."
          className="flex-1 border border-blue-400 outline-none rounded-full px-4 py-2"
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
