import React from 'react'
import Banner from '../../Components/Banner/Banner'
import PostsContainer from '../../Components/PostsContainer/PostsContainer'
import s from './HomePage.module.css'
import {blog_data,work_data} from '../../data'
import WorksContainer from '../../Components/WorksContainer/WorksContainer'


const posts = blog_data.slice(0,2)
const works = work_data.slice(0,3)

function HomePage() {
  return (
    <div>
        <Banner/>
        <PostsContainer posts={posts}/>
        <div className='container'>
              <h2 className={s.title}>Featured works</h2>
        </div>

        <WorksContainer works={works}/>
    </div>
  )
}

export default HomePage