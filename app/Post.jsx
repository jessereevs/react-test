'use client';

import useSWR from 'swr';

// Import useSWR from swr package

// created function to handle API request
const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Swr = () => {
  const {
    data: posts,
    error,
    isValidating,
  } = useSWR('https://jsonplaceholder.typicode.com/posts', fetcher);

  // Handles error and loading state
  if (error) return <div className='failed'>failed to load</div>;
  if (isValidating) return <div className="Loading">Loading...</div>;

  return (
    <div className='flex flex-col justify-center'>
        {
           posts && posts.map((post, index) => (
            <div className='my-2 p-2 w-2/3 bg-sky-700 rounded-md hover:bg-sky-800 border-solid border-2 border-black'> 
                <h2 className='font-bold text-sky-100'>{post.title}</h2>
                <p className='text-slate-100'>{post.body}</p>
            </div>
        ))}
    </div>
  );
};

export default Swr;
