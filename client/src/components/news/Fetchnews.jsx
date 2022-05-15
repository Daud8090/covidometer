import React from "react";
import News from "./News";

function Fetchnews() {
  const [news, setNews] = React.useState([]);
  const apihitfun = () => {
    fetch(
      "/News")
      .then((res) => res.json())
      .then((json) => {
        setNews(json)
          console.log(json,"88888888889999------");
      })
  };
  apihitfun();
  return (
    <>
        {news.map((singleNews)=>{
          return <News title={singleNews.title} content={singleNews.content} image={singleNews.image} publish={singleNews.publishedAt} />
        })}
    </>
  );
}
export default Fetchnews;
