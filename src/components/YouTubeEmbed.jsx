import React from 'react';

const YouTubeEmbed = ({ videoId }) => {
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="video-responsive">
      <iframe
        width="300"
        height="165"
        src={embedUrl}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded YouTube Video"
      />
    </div>
  );
};

export default YouTubeEmbed;
