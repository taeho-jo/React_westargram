import React from 'react';
import './RightProfile.scss'

function RightProfile(props) {
  return(
  <div className='RightProfile'>
    <div className="Box">
      <div className='Photo'>
        <img className='ProfilePhoto' src={props.photo} />
      </div>
      <div className='ProfileBox'>
        <div className='RightName'>{props.name}</div>
        <span className='RightText'>{props.text}</span>
      </div>
    </div>
      <button className='Follow'>{props.follow}</button>
    </div>
  );
}

export default RightProfile;