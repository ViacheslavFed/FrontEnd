import React from 'react'
import BlogItem from '../BlogItem/BlogItem'
import s from './BlogContainer.module.css'

function BlogContainer({blog_data}) {
  return (
    <div>
        {blog_data.map(elem=><BlogItem key={elem.id} {...elem}/>)}
    </div>
  )
}

export default BlogContainer