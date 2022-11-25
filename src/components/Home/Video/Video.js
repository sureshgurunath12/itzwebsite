import "./Video.css";
function VideoContent() {
  return (
    <div className="VideoContainer">
      <div className="playerCode">
        {/* <video width="100%" height="100%" controls>
          <source src="https://player.vimeo.com/video/364811340"/>
      </video> */}
        {/* <video src="http://player.vimeo.com/video/364811340" width="100%" height="100%" controls></video> */}

        <iframe
          width="100%"
          height="100%"
          src="https://player.vimeo.com/video/364811340?autoplay=1&loop=1&autopause=0&api=1&controls=0&muted=1?playsinline=0"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen=""
        ></iframe>
      </div>
    </div>
  );
}

export default VideoContent;
