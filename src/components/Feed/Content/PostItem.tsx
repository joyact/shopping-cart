import { useState } from 'react';
import { Avatar } from '@components/Common';
import { Post } from '@types';
import { FaThumbsUp, FaRegThumbsUp, FaRegCommentDots } from 'react-icons/fa';
import { MdOutlineShare } from 'react-icons/md';
import { RiSendPlaneFill } from 'react-icons/ri';

interface Props {
  post: Post;
}

export const PostItem = ({ post }: Props) => {
  const [liked, setLiked] = useState(false);

  return (
    <div className='bg-white dark:bg-black rounded-lg space-y-2 p-2.5 pb-0 thm-border'>
      <div className='flex items-center cursor-pointer'>
        <Avatar src='' w='40' h='40' />
        <div className='ml-2 leading-none'>
          <p className='font-medium hover:text-blue-500 hover:underline'>name</p>
          <span className='text-xs thm-text-gray'>createAt</span>
        </div>
      </div>

      <div className='break-all md:break-normal'>
        <p>{post.text}</p>
      </div>

      {post.image && <img src={post.image} alt='' className='w-full cursor-pointer' />}

      <ul className='buttonWrapper border-t border-gray-600/20 '>
        <li className={`postButton ${liked && 'text-blue-500'}`} onClick={() => setLiked(!liked)}>
          {liked ? (
            <FaThumbsUp className='-scale-x-100' />
          ) : (
            <FaRegThumbsUp className='-scale-x-100' />
          )}
          <p>Like</p>
        </li>
        <li className='postButton'>
          <FaRegCommentDots />
          <p>Comment</p>
        </li>
        <li className='postButton'>
          <MdOutlineShare />
          <p>Share</p>
        </li>
        <li className='postButton'>
          <RiSendPlaneFill />
          <p>Send</p>
        </li>
      </ul>
    </div>
  );
};