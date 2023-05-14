import React from 'react'
import Post from '../Post/Post'
import s from './PostsContainer.module.css'

function PostsContainer({posts}) {
  return (
    <div className={s.background}>
      <div className='container'>
        <div className={s.postsContainerHeader}>
            <h3 className={s.recent}>Recent posts</h3>
            <p>View all</p>
        </div>
        <div className={s.postsContainer}>
            {posts.map(elem=><Post key={elem.id} {...elem}/>)}
        </div>
      </div>
    </div>
  )
}

export default PostsContainer