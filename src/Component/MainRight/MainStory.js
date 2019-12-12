import React from 'react';
import People from './People';


function MainStory() {
  return (
    <div className='story'>
      <div className="story1">
        <span>스토리</span>
        <p><a href="#">모두 보기</a></p>
      </div>
      <People />
    </div>
  );
}

export default MainStory;