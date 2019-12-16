import React from 'react';
import './Footer.scss'

function Footer () {
  return (
    <footer className="bye">
      <ul className="info">
        <li><a href="#">INSTARGRAM 정보</a></li>
        <li><a href="3">지원</a></li>
        <li><a href="#">홍보 센터</a></li>
        <li><a href="#">API</a></li>
        <li><a href="#">채용 정보</a></li>
        <li><a href="#">개인정보처림방침</a></li>
        <li><a href="#">약관</a></li>
        <li><a href="#">디렉터리</a></li>
        <li><a href="#">프로필</a></li>
        <li><a href="#">해시태그</a></li>
        <li className="clearfix"><a href="#">언어&nbsp;&nbsp;</a></li>
      </ul>
      <span className="byeMsg">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;© 2019 Instagram from Facebook</span>
    </footer>
  );
}

export default Footer;