import React from 'react'
import SubFeedPage from './Feeds/SubFeedPage'
import MainRight from './MainRight/MainRight'
import './MainFeedPage.scss'


function MainFeedPage() {
  return (
    <main className="feedsPage">
      <SubFeedPage />
      <MainRight />
    </main>
  );
}



export default MainFeedPage;