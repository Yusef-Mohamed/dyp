import React, { useState } from "react";
import ReactPlayer from "react-player";
import "./ImageWithPopup.css";
function ImageWithPopup(props) {
  const [isPop, setIsPop] = useState(false);
  return (
    <>
      {props.style ? (
        <img
          src={props.src}
          alt=""
          className={`${props.class} cursor-pointer`}
          onClick={() => setIsPop(true)}
          style={props.style}
        />
      ) : (
        <img
          src={props.src}
          alt=""
          className={`${props.class} cursor-pointer`}
          onClick={() => setIsPop(true)}
        />
      )}

      {isPop && (
        <div className="vidPopup" onClick={() => setIsPop(false)}>
          <div>
            <span onClick={() => setIsPop(false)}>X</span>
            <ReactPlayer url={props.youtube} />
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/Qofi4qwhG8M&apikey=AIzaSyB03NB5yW6Dkri9ABeLtiGBesoIRVTP41I"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
}

export default ImageWithPopup;
