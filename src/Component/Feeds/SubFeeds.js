import React from 'react'


class SubFeeds extends React.Component {
  
  addComment = (e) => {
    e.preventDefault();
    this.props.onSubmit(e.target.title.value);
    // console.log(e.target.title.value)
    e.target.title.value = '';
  }

  

  render() {
    let date = this.props.date
    let lists = [];

  //  console.log(date)
    for(let i = 0; i < date.length; i++) {
      lists.push(
        <p key={date[i].id} className="js-p"><a herf={date[i].id}>{date[i].who}</a><span className="js-span"> {date[i].content}</span>
          <button 
            value= {date[i].id} 
            className='del'
            onClick={(id, e) => this.props.handleDelete(id, e)}>
              {date[i].cancel}</button> </p>
        )
      }
  
    return (
      <article className="feed">
        <div className="title">
          <div>
            <img className="profileImg" src={this.props.userphoto} alt="프로필사진" />
            <a href="#">{this.props.username}</a>
            <img className="more" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/more.png" alt="삼점" />
          </div>
        </div>

        <div className="mainboard">
          <img className="mainImg" src={this.props.mainphoto} alt="메인사진" />

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
            <img src={this.props.otherPhoto} alt="사진" />
            <p><span className="id"><a href="#">{this.props.otherUser}</a></span>님 외 <span className="id"><a href="#">{this.props.num}명</a></span>이 좋아합니다</p>
          </div>

          <div className="comment">
            <p className="js-p"><a herf='#'>IamJotang</a><span className="js-span"> 항상행복하세요</span> <span className="gray"> . . . 더보기</span></p>
            {lists}
          </div>
        
          <div className="time">
            <span>48분 전</span>
          </div>
      
          <section className='commentArea'>
            <form className="btnBox addComment" action='/creat_process' method='post'
              onSubmit={this.addComment}>

              <input autoComplete="off" className="peopleSay" name='title' placeholder="댓글 달기..."/>
              <button type="submit" className="Btn">게시</button>

            </form>
          </section>
        </div>
      </article>
    );
  }
}


export default SubFeeds;

// <p key={date[i].id} className="js-p"><a herf={date[i].id}>{date[i].who}</a><span className="js-span"> 
//             {date[i].content}</span>
//             <button className='del'>{date[i].cancel}</button> </p>


// lists.push(
//   <p 
//     key={date[i].id} 
//     className="js-p"><a herf={date[i].id}>{date[i].who}</a>
//     <span className="js-span"> {date[i].content}</span>
//     <button 
//       value='X' 
//       className='del'
//       onClick={this.props.handleDelete}
//       >{date[i].cancel}</button> </p>
  
//   )}