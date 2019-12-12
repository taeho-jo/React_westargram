import React from 'react'
import RightProfile from './RightProfile'


function EveryOne() {
  return (
    <div className="everyone">
      <div className="story1">
        <span>회원님을 위한 추천</span>
        <p><a href="#">모두 보기</a></p>
      </div>
      <RightProfile 
        name='phk9687' 
        text='instargram 신규 가입' 
        photo="https://scontent-icn1-1.cdninstagram.com/vp/ae8b4e447a9151324a749b4627d887d8/5DF50544/t51.2885-19/s320x320/58004192_2433784366854980_2844436572466577408_n.jpg?_nc_ht=scontent-icn1-1.cdninstagram.com"
        follow='팔로우'
      />
      <RightProfile 
        name='dooreplay' 
        text='회원님을 위한 추천' 
        photo="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/72490023_1025866487755962_2715130315663212544_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&oh=d4cf22c5c1db7b902c0d18e2c5598b08&oe=5E79995F"
        follow='팔로우'
      />
      <RightProfile 
        name='wang_donghwan' 
        text='회원님을 위한 추천' 
        photo="https://scontent-icn1-1.cdninstagram.com/vp/dcca337e93686997df102361db60db2c/5DF4ED4F/t51.2885-19/s320x320/51616861_258531261731722_2335377231565553664_n.jpg?_nc_ht=scontent-icn1-1.cdninstagram.com"
        follow='팔로우'
      />
    </div>
  );
}



export default EveryOne;