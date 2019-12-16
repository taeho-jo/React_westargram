import React from 'react'
import LogoText from '../../Image/logo_text.png'
import './SubNav.scss'
import { Link } from 'react-router-dom'

function SubNav () {
  return(
    <nav>
      <div className="container">
          <img className="logo" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/logo.png" alt="LOGO" />
          <img className="textlogo" src={LogoText} alt="TEXTLOGO" />
        </div>

        <div className="searchBox"> 
          <div className="search"></div>
          <input type="text" placeholder="검 색" />
        </div>

        <div className="navIcon">
          <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png" alt="search" />
          <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png" alt="heart" />
          <Link to='/'>
            <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png" alt="mypage" />
          </Link>
        </div> 
    </nav>
  )
}


export default SubNav