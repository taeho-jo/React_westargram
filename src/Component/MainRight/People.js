import React from 'react';
import RightProfile from './RightProfile';

function People() {
  return (
    <div className='people'>
      <RightProfile 
        name= 'meekukin'
        text= '42분 전'
        photo= 'https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/79375877_591639114941830_2605723754738745344_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&oh=0677a7b00335bec9d1f91b2ad8388ccf&oe=5EB247F8'
      />
      <RightProfile 
        name= 'jotang'
        text= '1시간 전'
        photo= 'https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/51484237_2139045932855894_3924096547867852800_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&oh=745f1f29e2cce7aa7ce6f6db9b5ed892&oe=5E8A1675'
      />
      <RightProfile 
        name= 'donzzangu'
        text= '3시간전'
        photo= 'https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/73077073_949081288795231_5021845886137794560_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&oh=762efc463a4f0177c864c3169d3c7c6c&oe=5E8EAA1D'
      />
      <RightProfile 
        name= 'jellee619'
        text= '12시간전'
        photo= 'https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/72708583_3212434652161171_1258902597184520192_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&oh=3f551c3cc426717a2d7893452b0098ad&oe=5EB21238'
      />
      <RightProfile 
        name= 'yoojinkim'
        text= '12시간전'
        photo= 'https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/72954696_3062594683755547_5762162342318047232_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&oh=20046d40b6baa810f7d8a8f4635a3f11&oe=5EB1E419'
      />
    </div>
  );
}

export default People;