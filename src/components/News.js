import React, { useEffect, useState } from "react";
import { NewsItem } from "./NewsItem";
import Loader from "./Loader";
import InfiniteScroll from "react-infinite-scroll-component";

// Importing Fallback assets
import defaultFallback from "../images/default.jpg";
import businessFallback from "../images/business.jpg";
import entertainmentFallback from "../images/entertainment.jpg";
import healthFallback from "../images/health.jpeg";
import scienceFallback from "../images/science.webp";
import sportsFallback from "../images/sports.jpeg";
import techFallback from "../images/tech.webp";

export const News = (props) => {
  const { newsCount, country, category, setProgress } = props;
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [totalArticles, setTotalArticles] = useState(null);
  // eslint-disable-next-line
  const [isLoading, setIsLoading] = useState(true);

  const getNews = async () => {
    setProgress(0);
    const newsUrl = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${process.env.REACT_APP_API_KEY}&pageSize=${newsCount}&page=${page}`;
    const res = await fetch(newsUrl);
    setProgress(20);
    const data = await res.json();
    setProgress(40);
    setArticles(data.articles);
    setProgress(60);
    setTotalArticles(data.totalResults);
    setProgress(80);
    setIsLoading(false);
    setProgress(100);
  };

  //  UseEffect would run getNews each time url changes
  useEffect(() => {
    getNews();
    // eslint-disable-next-line
  }, []);

  const fetchMoreArticles = async () => {
    const newsUrl = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${process.env.REACT_APP_API_KEY}&pageSize=${newsCount}&page=${page}`;
    setPage(page + 1);
    let res = await fetch(newsUrl);
    let data = await res.json();
    setArticles(articles.concat(data.articles));
    setTotalArticles(data.totalArticles);
  };

  const fallbackImages = (category) => {
    switch (category) {
      case "business":
        return businessFallback;

      case "entertainment":
        return entertainmentFallback;

      case "health":
        return healthFallback;

      case "science":
        return scienceFallback;

      case "sports":
        return sportsFallback;

      case "technology":
        return techFallback;

      default:
        return defaultFallback;
    }
  };

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
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreArticles}
        hasMore={articles.length !== totalArticles}
        loader={<Loader />}
      >
        <div className="news-items-container">
          {articles.map((article, idx) => (
            <NewsItem
              key={idx}
              title={article.title ? article.title.slice(0, 60) : ""}
              desc={
                article.description ? article.description.slice(0, 150) : ""
              }
              imgUrl={article.urlToImage}
              newsUrl={article.url}
              date={article.publishedAt}
              author={article.author}
              src={article.source.name}
              fallback={fallbackImages(category)}
            />
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};
