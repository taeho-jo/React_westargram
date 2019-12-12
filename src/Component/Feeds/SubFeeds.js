import React from 'react'

function SubFeeds(props) {
  return (
    <article className="feed">
      <div className="title">
        <div>
          <img className="profileImg" src={props.userphoto} alt="프로필사진" />
          <a href="#">{props.username}</a>
          <img className="more" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/more.png" alt="삼점" />
        </div>
      </div>

      <div className="mainboard">
        <img className="mainImg" src={props.mainphoto} alt="메인사진" />

        <div className="iconBorad">
          <div className="left">
            <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png" alt="하트" />
            <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/comment.png" alt="말풍선" />
            <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/share.png" alt="공유" />
          </div>
  
          <div className="right">
            <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/bookmark.png" alt="북마크" />
          </div>
        </div>
      </div>

      <div className="commentBox">
        <div className="likes">
          <img src={props.comphoto} alt="사진" />
          <p><span className="id"><a href="#">{props.comId}</a></span>님 외 <span className="id"><a href="#">{props.num}명</a></span>이 좋아합니다</p>
        </div>

        <div className="comment">
          <p className="js-p">{props.comId}<span className="js-span"> {props.comment}</span> <span className="gray"> 더 보기</span></p>
          <p className="js-p">{props.comId2}<span className="js-span"> {props.comment2}</span></p>
        </div>
      
        <div className="time">
          <span>{props.min}</span>
        </div>
      
        <section className='commentArea'>
          <form className="btnBox addComment">
            <input className="peopleSay" placeholder="댓글 달기..." />
            <button type="submit" className="Btn">게시</button>
          </form>
        </section>
      </div>
    </article>
  );
}



export default SubFeeds;