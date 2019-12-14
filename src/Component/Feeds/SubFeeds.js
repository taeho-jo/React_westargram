import React from 'react'
import Comment from './Comment'

class SubFeeds extends React.Component {
  constructor(props) {
    super(props)
    this.max_Comment_id = 3;
    this.state = {
      Comment: [
        {id:1, who:'jotang' , content:'너무 맛있어보여요ㅠㅠ', cancel: ''},
        {id:2, who:'mino_maru' , content:'혼자만 먹는겁니까 지금', cancel: ''},
        {id:3, who:'__torytoll' , content:'너무하시네요...혼자먹고', cancel: ''}
      ]  
    }
  }
  

  render() {
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

        <Comment 
          date={this.state.Comment} 
          onSubmit={(name) => {
            this.max_Comment_id = this.max_Comment_id + 1;
            let Comments = this.state.Comment.concat(
              {id: this.max_Comment_id, who: 'wecode_bootcamp', content: name, cancel: 'X'})
            // this.state.Comment.push(
            //   {id: this.max_Comment_id, who: 'jotang', content: name})
            this.setState({Comment: Comments})  //this.state.Comment
            }}
            />
      </article>
    );
  }
}


export default SubFeeds;