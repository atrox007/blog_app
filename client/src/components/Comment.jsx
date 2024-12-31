import React from 'react'
import { useEffect, useState } from 'react';
// @ts-ignore
import { FaThumbsUp } from 'react-icons/fa';
import { useSelector } from 'react-redux';
// @ts-ignore
import { Button, Textarea } from 'flowbite-react';
import moment from 'moment'; 

export default function Comment({ comment }) {
    const [user, setUser] = useState({});
    // @ts-ignore
    const [isEditing, setIsEditing] = useState(false);
    // @ts-ignore
    const [editedContent, setEditedContent] = useState(comment.content);
    // @ts-ignore
    // @ts-ignore
    const { currentUser } = useSelector((state) => state.user);

    useEffect(() => {
        const getUser = async () => {
          try {
            const res = await fetch(`/api/user/${comment.userId}`);
            const data = await res.json();
            if (res.ok) {
              setUser(data);
            }
          } catch (error) {
            console.log(error.message);
          }
        };
        getUser();
    }, [comment]);

  return (
    <div className='flex p-4 border-b dark:border-gray-600 text-sm'>
        <div className='flex-shrink-0 mr-3'>
            <img
            className='w-10 h-10 rounded-full bg-gray-200'
            // @ts-ignore
            src={user.profilePicture}
            // @ts-ignore
            alt={user.username}
            />
        </div>

        <div className='flex-1'>
            <div className='flex items-center mb-1'>
            <span className='font-bold mr-1 text-xs truncate'>
                {user ? 
                // @ts-ignore
                `@${user.username}` : 'anonymous user'}
            </span>
            <span className='text-gray-500 text-xs'>
                {moment(comment.createdAt).fromNow()}
            </span>
            </div>
            <p className='text-gray-400 pb-2'>{comment.content}</p>
        </div>
    </div>
  )
}
