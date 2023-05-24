import React from "react";

const dateFormatter = (date) => {
  const d = new Date(date);
  return d.toGMTString().slice(0, 16);
};

export const NewsItem = (props) => {
  const { title, desc, imgUrl, newsUrl, date, author, src, fallback } = props;
  return (
    <div className="news-item-container">
      <div className="image-box">
        <img src={imgUrl ? imgUrl : fallback} alt="News" />
      </div>
      <p className="src-tag">{src}</p>
      <div className="news-text">
        <h1 className="title">{title}...</h1>
        <p className="description">{desc}...</p>
      </div>
      <p className="author">By: {author ? author : "anonymous"}</p>
      <p className="date">{dateFormatter(date)}</p>
      <div className="line-break"></div>
      <a className="more" href={`${newsUrl}`}>
        Read More
      </a>
    </div>
  );
};
