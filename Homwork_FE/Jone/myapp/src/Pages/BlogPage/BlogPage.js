import React from 'react'
import s from './BlogPage.module.css'
import {blog_data} from '../../data'
import BlogContainer from '../../Components/BlogContainer/BlogContainer'


function BlogPage() {
  return (
    <div className='container'>
      <h2 className={s.blog}>Blog</h2>
        <BlogContainer blog_data={blog_data}/>
    </div>
  )
}

export default BlogPage