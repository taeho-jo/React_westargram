import React from 'react'
import SubFeedPage from './Feeds/SubFeedPage'
import MainRight from './MainRight/MainRight'


function MainFeedPage() {
  return (
    <main className="feedsPage">
      <SubFeedPage />
      <MainRight />
    </main>
  );
}



export default MainFeedPage;