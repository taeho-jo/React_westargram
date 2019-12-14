import React from 'react'

class Comment extends React.Component {

  addComment = (e) => {
    e.preventDefault();
    this.props.onSubmit(e.target.title.value);
    // console.log(e.target.title.value)
    e.target.title.value = '';
  }

  
  render() {
    let date = this.props.date
    let lists = [];
    for(let i =0; i < date.length; i++) {
      lists.push(
        <p key={date[i].id} className="js-p"><a herf={date[i].id}>{date[i].who}</a><span className="js-span"> 
        {date[i].content}</span><button value='X' className='del'>{date[i].cancel}</button> </p>
        
        )}

    return(
      <div className="commentBox">
        <div className="likes">
          <img src='https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/74467916_1471440983005415_3328901165399146496_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&oh=89c5402ae94b4d73f194c111545d4941&oe=5EB1176E' alt="사진" />
          <p><span className="id"><a href="#">soojiiiinnn</a></span>님 외 <span className="id"><a href="#">15명</a></span>이 좋아합니다</p>
        </div>

        <div className="comment">
          {lists}
        </div>
      
        <div className="time">
          <span>48분 전</span>
        </div>
      
        <section className='commentArea'>
          <form className="btnBox addComment" action='/creat_process' method='post'
            onSubmit={this.addComment}>

            <input autocomplete="off" className="peopleSay" name='title' placeholder="댓글 달기..."/>
            <button type="submit" className="Btn">게시</button>

          </form>
        </section>
      </div>
    );
  }
}


export default Comment;
