import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="p-2 m-2 w-72 rounded-lg shadow-lg">
      <img src={thumbnails.medium.url} className="rounded-lg" />
      <ul>
        <li className="font-bold">{channelTitle}</li>
        <li>{title}</li>
        <li>{statistics.viewCount} Views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
