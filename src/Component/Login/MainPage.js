import React from 'react';
import LogoImage from '../../Image/logo_text.png'
import Facebook from '../../Image/facebook.png'
import './Mainpage.scss'
import { Link } from 'react-router-dom'

class MainPage extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      id: '',
      password: ''
    }
  
  } 
  
  render(){
    return (
      <main className="container">
        <div className="containerBox">     
          <div className="mainCotainer">       
            <Link to='/MainPage'>
              <img src={ LogoImage } alt="LOGOIMAGE" className="logo" />
            </Link>
            <form action="" className="formBox">
              
              <input 
                className="idInput" 
                type="text" 
                placeholder="전화번호, 사용자 이름 또는 이메일 " 
                onChange={(e) => {
                  this.setState({
                    id: e.target.value.length
                  })
                }} 
                />
              <input 
                className="password" 
                type="password" 
                placeholder="비밀번호" 
                onChange={(e) => {
                  this.setState({
                    password: e.target.value.length
                  })
                }}
                />
              <div className="loginBox">
                <button className={this.state.id ? (this.state.password ? 'btn_blue' : 'loginBtn') : 'loginBtn'} type="submit">로그인
                </button>
              </div>

              <div className="or"><span>또는</span></div>
              <div className="facebook">
                  <a href="#"><img src={ Facebook } alt="icon" /></a>
                  <button className="facebookBtn">
                    <a href="#">Facebook으로 로그인</a>
                  </button>
              </div>
              <div className="forget"><a href="#">비밀번호를 잊으셨나요?</a></div>  
            </form>
          </div>

          <div className="noId">
            <span className="noId1">계정이 없으신가요?&nbsp;&nbsp;<a href="#">가입하기</a></span>
          </div>

          <div className="downLoad">
            <p>앱을 다운로드하세요.</p>
            <div className="image">
              <a href="#"><img className="apple" src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_korean-ko.png/4a5c9d62d51b.png" alt="appstoredownload" /></a>
              <a href="#"><img className="google" src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_korean-ko.png/f155b664a93b.png" alt="gogledownload" /></a>
            </div>
          </div>
        </div>
      </main> 
    );
  }
}






export default MainPage;