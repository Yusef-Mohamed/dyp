import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import "./ImageWithPopup.css";
function ImageWithPopup(props) {
  const [isPop, setIsPop] = useState(false);
  const [videos, setVideos] = useState([]);
  const apiKey = "AIzaSyDRnhF4TaPCW0VkkWkFu5CGqn7uxsmY5uw";

  useEffect(() => {
    const fetchPrivateVideos = async () => {
      const videoId = "w_gBUMIeeBE";
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/videos?part=id%2Csnippet&id=${videoId}&key=${apiKey}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch videos");
        }
        const data = await response.json();
        console.log(data);
        setVideos(data.items);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPrivateVideos();
  }, [apiKey]);

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
            <ul>
              {videos.map((video) => (
                <li key={video.id.videoId}>
                  {/* Display the video thumbnails or embed the videos here /}
            {/ For example, you can use the YouTube player iframe */}
                  <iframe
                    width="560"
                    height="315"
                    src={`https://www.youtube.com/embed/${video.id.videoId}`}
                    title={video.snippet.title}
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

export default ImageWithPopup;
