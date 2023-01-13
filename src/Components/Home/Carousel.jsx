import React from "react";
import Slider from "react-touch-drag-slider";
import vid1 from './bookCoverVideos/book float.webm';
import vid2 from './bookCoverVideos/cover-pronites animation.webm';
import vid3 from './bookCoverVideos/creators camp-humor fest animation.webm';
import vid4 from './bookCoverVideos/humor fest-proshows animation.webm';
import vid5 from './bookCoverVideos/pronites-creators camp.webm';
import './BookCover.css';

// Whatever you render out in the Slider will be draggable 'slides'
function App() {
    const videos = [
        {
            url:vid1,
            title:'vid1'
        },
        {
            url:vid2,
            title:'vid1'
        },
        {
            url:vid5,
            title:'vid1'
        },
        {
            url:vid3,
            title:'vid1'
        },
        {
            url:vid4,
            title:'vid1'
        },
    ];
  return (
    <main>
      <Slider autoPlay loop
      activeIndex={0}
      threshHold={2}
      transition={0.1}
      >
        {videos.map(({ url, title }, index) => (
          <video autoPlay muted>
            <source src={url}></source>
          </video>
        ))}
      </Slider>
    </main>
  );
}

export default App;
