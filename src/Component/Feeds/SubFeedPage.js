import React from 'react'
import SubFeeds from './SubFeeds'


class SubFeedPage extends React.Component {
  constructor(props) {
    super(props)
    this.max_Comment_id = 1;
    this.key = 1;
    this.state = {
      Comment: [
        {id:0, who:'jotang' , content:'너무 맛있어보여요ㅠㅠ', cancel: ''},
        {id:1, who:'mino_maru' , content:'혼자만 먹는겁니까 지금', cancel: ''}
      ],
      Comment1: [
        {id:0, who:'yeon.90' , content:'다음에 또 만들어주세요', cancel: ''},
        {id:1, who:'what._sub' , content:'(끄적끄적)메모...', cancel: ''}
      ],
      Comment2: [
        {id:0, who:'do_haeng_' , content:'차가 멋지네요!!', cancel: ''},
        {id:1, who:'minji671' , content:'flex 하셨네요', cancel: ''}
      ]
      }
    }

    // handleDelete = (e) => {
    //   // const b = this.max_Comment_id--
    //   const { Comment } = this.state;
    //   console.log(Comment)
    //   // console.log(e.target.value)
    //   // this.setState({
    //   //   Comment: Comment.filter(info => info.id !== e.target.button.value)
    //   // })
    //   // console.log(this.max_Comment_id)
    //   // console.log(Comment)
      
    // }

      
    handleDelete = ( e) => {
      const { Comment } = this.state;
      console.log(Comment)
      const newArr = Array.from(Comment)
      
      this.setState({
        newArr: newArr.filter(a => a.id!== e.target.value)
      })
      console.log('this is', e.target.value)
      console.log('that is', )
      
      // console.log(newArr)
      // console.log('this is')
    }
    

  render() {
    return (
      <div className="feeds">
        <SubFeeds
          username='dooreplay' 
          userphoto='https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/72490023_1025866487755962_2715130315663212544_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&oh=d4cf22c5c1db7b902c0d18e2c5598b08&oe=5E79995F'
          mainphoto='https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/70379469_607082623370282_7812051502613194066_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_cat=102&oh=08cb4a02da569deb5232fd76efe6bf9e&oe=5E6921A6'
          otherPhoto='https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/74389066_443134699720072_803809881134989312_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&oh=56cefaf8b8aa270bb7ef5abcdfb2d5f8&oe=5E77A3CC'
          otherUser='ssuhyeon_e'
          num={30}
          date={this.state.Comment}
          onSubmit={(name) => {
            this.max_Comment_id = this.max_Comment_id + 1;
            this.key = this.key + 1
            let Comments = this.state.Comment.concat(
              {key: this.key ,id: this.max_Comment_id, who: 'wecode_bootcamp', content: name, cancel: 'X'})
            // this.state.Comment.push(
            //   {id: this.max_Comment_id, who: 'jotang', content: name})
            this.setState({Comment: Comments})  //this.state.Comment
            }}
           handleDelete = {this.handleDelete} 
          />

          
         <SubFeeds
          username='yoojinkim' 
          userphoto='https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/72954696_3062594683755547_5762162342318047232_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&oh=20046d40b6baa810f7d8a8f4635a3f11&oe=5EB1E419'
          mainphoto='https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/75458054_437600753584267_4189244771785573011_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_cat=107&oh=164953b4975a743cdbfe764a65f6fe7e&oe=5E82DF56'
          otherPhoto='https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/49913192_2237115383217792_4528914117368479744_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&oh=d585c9e799e53f29662309f79a889f7d&oe=5E6BF1FD'
          otherUser='sooin.ju'
          num={15}
          date={this.state.Comment1} 
          onSubmit={(name) => {
            this.max_Comment_id = this.max_Comment_id + 1;
            let Comments1 = this.state.Comment1.concat(
              {id: this.max_Comment_id, who: 'wecode_bootcamp', content: name, cancel: 'X'})
            // this.state.Comment.push(
            //   {id: this.max_Comment_id, who: 'jotang', content: name})
            this.setState({Comment1: Comments1})  //this.state.Comment
            }}
            />

        <SubFeeds
          username='donzzangu' 
          userphoto='https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/73077073_949081288795231_5021845886137794560_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&oh=762efc463a4f0177c864c3169d3c7c6c&oe=5E8EAA1D'
          mainphoto='https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/77407433_2628057677247697_3490988855492024222_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_cat=101&oh=3829d21e83210a72ac81fe413e7c1f00&oe=5E7B54E1'
          otherPhoto='https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/14498833_545780452289870_1784839089384587264_a.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=IpeIw2XoW2AAX9FKXEX&oh=b62290fde9e528f772330d01d6d570db&oe=5EB0DF8F'
          otherUser='kodak'
          num={110}
          date={this.state.Comment2} 
          onSubmit={(name) => {
            this.max_Comment_id = this.max_Comment_id + 1;
            let Comments2 = this.state.Comment2.concat(
              {id: this.max_Comment_id, who: 'wecode_bootcamp', content: name, cancel: 'X'})
            // this.state.Comment.push(
            //   {id: this.max_Comment_id, who: 'jotang', content: name})
            this.setState({Comment2: Comments2})  //this.state.Comment
            }}
            /> 
      </div>
    );
  }
}



export default SubFeedPage;




// onSubmit={(name) => {
//   this.max_Comment_id = this.max_Comment_id + 1;
//   let Comments = this.state.Comment.concat(
//     {id: this.max_Comment_id, who: 'wecode_bootcamp', content: name, cancel: 'X'})
//   // this.state.Comment.push(
//   //   {id: this.max_Comment_id, who: 'jotang', content: name})
//   this.setState({Comment: Comments})  //this.state.Comment
//   }}

// onClick={() => {
//   const newArr = Array.from(this.state.Comment)
//   console.log(this.state.Comment)
//   console.log(newArr[0].id)
//   if(newArr.id === this.state.Comment.id) {
//     newArr.splice(newArr.id, 1)
//     // console.log(newArr.splice(newArr.id, 1))
//   }
// }} 