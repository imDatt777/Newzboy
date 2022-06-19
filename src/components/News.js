import React, { useEffect, useState } from "react";
import { NewsItem } from "./NewsItem";
import "../styles/news.scss";
import Loader from "./Loader";


export const News = (props) => {
  const { newsCount, country, category } = props;
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [totalArticles, setTotalArticles] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  let newsUrl = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${process.env.REACT_APP_API_KEY}&pageSize=${newsCount}&page=${page}`;

  const prevClickHandler = async () => {
    let currentPage = page;
    if (currentPage > 1) {
      currentPage--;
    }
    setPage(currentPage);
    newsUrl = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${process.env.REACT_APP_API_KEY}&pageSize=${newsCount}&page=${page}`;
  };

  const nextClickHandler = async () => {
    let currentPage = page;
    currentPage++;
    setPage(currentPage);
    newsUrl = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${process.env.REACT_APP_API_KEY}&pageSize=${newsCount}&page=${page}`;
  };

  const getNews = async () => {
    const res = await fetch(newsUrl);
    const data = await res.json();
    setArticles(data.articles);
    console.log(data.articles);
    setTotalArticles(data.totalResults);
    setIsLoading(false);
  };

  console.log(articles);

  //  UseEffect would run getNews each time url changes
  useEffect(() => {
    getNews();
    // eslint-disable-next-line
  }, [newsUrl]);

  return (
    <div className="home-page-container">
      {category ? (
        <h1>
          Latest Stories -{" "}
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </h1>
      ) : (
        <h1>Latest Stories</h1>
      )}
      {isLoading && <Loader />}
      <div className="news-items-container">
        {articles.map((article, idx) => (
          <NewsItem
            key={idx}
            title={article.title ? article.title.slice(0, 60) : ""}
            desc={article.description ? article.description.slice(0, 200) : ""}
            imgUrl={article.urlToImage}
            newsUrl={article.url}
            date={article.publishedAt}
            author={article.author}
            src={article.source.name}
          />
        ))}
      </div>
      <div className="button-container">
        <button
          disabled={page <= 1}
          className="prev"
          onClick={prevClickHandler}
        >
          &larr; Previous
        </button>
        <button
          disabled={page + 1 > Math.ceil(totalArticles / newsCount)}
          className="next"
          onClick={nextClickHandler}
        >
          Next &rarr;
        </button>
      </div>
    </div>
  );
};
