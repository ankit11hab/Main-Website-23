import React, { useEffect, useRef, useState } from "react";
import vid1 from "./bookCoverVideos/book float.webm";
import vid2 from "./bookCoverVideos/cover-pronites animation.webm";
import vid3 from "./bookCoverVideos/creators camp-humor fest animation.webm";
import vid4 from "./bookCoverVideos/humor fest-proshows animation.webm";
import vid5 from "./bookCoverVideos/pronites-creators camp.webm";
import rvid1 from "./bookCoverVideos/pronites_cc_reverse.webm";
import rvid2 from "./bookCoverVideos/humorfest__cc__reverse.webm";
import rvid3 from "./bookCoverVideos/proshows-_humorfest_reverse.webm";
import bg1 from "./images/cover1.webp";
import bg2 from "./images/creators camp.webp";
import bg3 from "./images/humor fest.webp";
import bg4 from "./images/pronites.webp";
import bg5 from "./images/proshows.webp";
import "./BookCover.css";
import mobvid1 from "./bookcovervideos_mob/cover-pronites.webm";
import mobvid2 from "./bookcovervideos_mob/creators camp-humorfest.webm";
import mobvid3 from "./bookcovervideos_mob/humor fest-proshows.webm";
import mobvid4 from "./bookcovervideos_mob/pronites-creators camp.webm";
import rmobvid1 from "./bookcovervideos_mob/creatorscamp-pronites_rev.webm";
import rmobvid2 from "./bookcovervideos_mob/humorfest-creatorscamp_rev.webm";
import rmobvid3 from "./bookcovervideos_mob/proshows-humorfest_rev.webm";
import mob_bg1 from "./images/cover_mob.webp";
import mob_bg2 from "./images/creators_camp_mob.webp";
import mob_bg3 from "./images/humorfest_mob.webp";
import mob_bg4 from "./images/pronites_mob.webp";
import mob_bg5 from "./images/proshows_mob.webp";
import leftbutton from '../Campaigns/images/left.svg';
import rightbutton from '../Campaigns/images/right.svg';

function App() {
    const videos = [vid1, vid2, vid5, vid3, vid4];
    const rvideos = ["bgg", rvid1, rvid2, rvid3, "ghgght"];
    const bgimg = [bg1, bg4, bg2, bg3, bg5];
    const mob_videos = [mobvid1, mobvid4, mobvid2, mobvid3];
    const rmob_videos = [rmobvid1, rmobvid2, rmobvid3, "fggh"];
    const mob_bgimg = [ mob_bg4, mob_bg2, mob_bg3, mob_bg5];
    var index = 0;
    const videoSrc = useRef();
    const videoSrcMob = useRef();
    const videoBg = useRef();
    const videoBgMob = useRef();
    const openBook = useRef();
    const nextBtn = useRef();
    const nextBtnMob = useRef();
    const prevBtn = useRef();
    const prevBtnMob = useRef();
    const timeout = () => {
        setTimeout(() => {
            prevBtnMob.current.disabled = false;
            prevBtn.current.disabled = false;
            nextBtn.current.disabled = false;
            nextBtnMob.current.disabled = false;
            openBook.current.disabled = false;
        }, 1700);
    };
    useEffect(() => {
        videoSrc.current.addEventListener("ended", () => {
            if (index === 0) {
                openBook.current.style.display = "block";
            }
        });
    }, [videoSrc.current]);
    const timeout1 = () => {
        setTimeout(() => {
            if (index <= 4) {
                videoBg.current.src = bgimg[index];
                videoBgMob.current.src = mob_bgimg[index];
            }
        }, 2000);
    };

    function showNext(e) {
        if (index <= 5) {
            index = index + 1;
        }
        if (index > 1) {
            prevBtn.current.style.display = "block";
        }
        if (index < 5) {
            videoSrc.current.src = videos[index];
            prevBtn.current.disabled = true;
            nextBtn.current.disabled = true;
            timeout();
            timeout1();
        }
        if (index === 4) {
            nextBtn.current.style.display = "none";
        }
        return true;
    }
    function showNextMob(e) {
        videoBgMob.current.style.display = "block";
        if (index <= 4) {
            index = index + 1;
        }
        if (index >= 1) {
            prevBtnMob.current.style.display = "block";
        }
        if (index < 4) {
            videoSrcMob.current.src = mob_videos[index];
            prevBtn.current.disabled = true;
            nextBtn.current.disabled = true;
            timeout();
            timeout1();
        }
        if (index === 3) {
            nextBtnMob.current.style.display = "none";
        }
        return true;
    }
    function showNext1(e) {
        openBook.current.style.display = "none";
        openBook.current.style.opacity='0';
        openBook.current.style.zIndex='-1';
        index = index + 1;
        videoBg.current.style.display = "block";
        prevBtn.current.style.display = "none";
        nextBtn.current.style.display = "block";
        videoSrc.current.src = videos[index];
        prevBtn.current.setAttribute("disabled", "true");
        nextBtn.current.disabled = true;
        timeout1();
        timeout();
    }
    function showPrevious(e) {
        if (index > 0) {
            index = index - 1;
        }
        if (index <= 1) {
            prevBtn.current.style.display = "none";
        }
        if (1 <= index <= 4) {
            nextBtn.current.style.display = "block";
            videoSrc.current.src = rvideos[index];
            prevBtn.current.disabled = true;
            nextBtn.current.disabled = true;
            timeout1();
            timeout();
        }
    }
    function showPreviousMob(e) {
        if (index > 0) {
            index = index - 1;
        }
        if (index <= 0) {
            prevBtnMob.current.style.display = "none";
        }
        if (1 <= index <= 3) {
            nextBtnMob.current.style.display = "block";
            videoSrcMob.current.src = rmob_videos[index];
            prevBtnMob.current.disabled = true;
            nextBtnMob.current.disabled = true;
            timeout1();
            timeout();
        }
    }
    useEffect(() => {
        if (index === 0) {
            prevBtnMob.current.style.display = 'none';
            openBook.current.style.display = "none";
            openBook.current.disabled = true;
            prevBtn.current.style.display = "none";
            nextBtn.current.style.display = "none";
            videoBg.current.style.display = "none";
            videoBgMob.current.style.display = "none";
            const f = () => {
                timeout(() => {
                    openBook.current.disabled = false;
                });
            };
            f();
        }
    });
    return (
        <div className="main__cont">
            <div className="video_mobile">
                <div className="leftbutton_mob" onClick={()=>{showPreviousMob()}}>
                    <img  ref={prevBtnMob} src={leftbutton} style={{'marginLeft':'2vw'}} className='mob__buttons'   alt=''></img>
                </div>
                <div>
                    <div className="mob_bg_img">
                        <img ref={videoBgMob} className="bg__img" src={mob_bgimg[index]} alt='' />
                    </div>
                    <div className="mob_video">
                        <video ref={videoSrcMob} className='video____' src={mob_videos[index]} autoPlay muted></video>
                    </div>
                </div>
                <div className="rightbutton_mob" onClick={()=>{showNextMob()}}>
                <img className='mob__buttons' src={rightbutton} style={{'marginRight':'2vw'}}  ref={nextBtnMob} alt=''></img>
                </div>
            </div>
            <div className="video_desktop">
                <div className="leftbutton_desktop">
                    <button
                         className="desktop__buttons previousbtn"
                        onClick={(e) => {
                            showPrevious();
                        }}
                        ref={prevBtn}
                        style={{'marginLeft':'0vw'}}
                    >
                        PREVIOUS
                    </button>
                </div>
                <div>
                    <div className="desktop_bg_img">
                        <img ref={videoBg} className="bg__img" src={bgimg[index]} alt='' />
                    </div>
                    <div className="desktop_video">
                        <video ref={videoSrc} className='video____' src={videos[index]} autoPlay muted></video>
                    </div>
                </div>
                <div>
                    <button ref={openBook} className="openbookBtn" onClick={(e) => {showNext1();}}>
                            Open
                    </button>
                </div>
                <div className="rightbutton_desktop">
                    <button className="desktop__buttons nextbtn" style={{'marginRight':'4vw'}} onClick={(e) => {
                            showNext();
                        }}
                        ref={nextBtn}
                    >
                        NEXT
                    </button>
                </div>
            </div>
        </div>
    );
}

export default App;