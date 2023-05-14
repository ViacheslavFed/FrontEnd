import React from 'react'
import FotoJone from './Images/FotoJone.png'
import s from './Banner.module.css'

function Banner() {
  return (
    <div className='container'>
        <div className={s.banner}>
            <div className={s.discription}>
                <h1>
                    Hi, I am John,
                    Creative Technologist
                </h1>
                <p>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                </p>
                <button>Download Resume</button>
            </div>
            <div className={s.foto}>
                <img src={FotoJone}/>
            </div>
        </div>
    </div>
  )
}

export default Banner