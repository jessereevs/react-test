import React from 'react'
import BlogPost from './Post.jsx'

export default function page() {
  return (
    <div className='flex flex-col m-5'>
        <h1 className='text-4xl'>Blog Posts</h1>
        <BlogPost />
    </div>
  )
}
