import React from 'react'
import ItMe from './ItMe'
import MainStory from './MainStory'
import EveryOne from './EveryOne'


function MainRight() {
  return (
    <div className='mainRight'>
      <ItMe />
      <MainStory />
      <EveryOne />
      <div className="info">
        <p>instargram·지원·홍보 센터·API·채용정보·</p>
        <p>개인정보처리방침·약관·디렉터리·프로필·해시태크·</p>
        <p>언어</p>
        <br />
        <p>© 2019 INSTAGRAM</p>
      </div>
    </div>
  );
}



export default MainRight;