import React from 'react'
import fasebook from './image/fb.png'
import instagram from './image/insta.png'
import link from './image/Linkedin.png'
import tviter from './image/Vector.png'
import s from './Footer.module.css'


function Footer() {
  return (
    <div className={s.footer}>
        <div className={s.footerImg}>
            <img src={fasebook}/>
            <img src={instagram}/>
            <img src={link}/>
            <img src={tviter}/>
        </div>
        <p>Copyright ©2020 All rights reserved</p>
    </div>
  )
}

export default Footer