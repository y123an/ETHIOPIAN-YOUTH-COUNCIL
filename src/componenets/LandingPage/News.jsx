import React, { useEffect } from "react";
import NewsCard from "./NewsCard";
import { news1, news2 } from "../../assets/images";
import { useSiteStore } from "../../context/siteStore";

const News = () => {
  const News = useSiteStore((store) => store.News);
  const getNews = useSiteStore((store) => store.getNews);

  useEffect(() => {
    getNews();
  }, []);
  return (
    <div className="container mx-auto py-16 overflow-hidden">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold p-2 border-b-4 head-font border-primary inline-block">
          News And Updates
        </h1>
      </div>
      <div className="justify-items-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {News?.map((news) => (
          <div key={news.id} className="grid gap-3">
            <NewsCard
              date={news.date.slice(0, 10)}
              description={news.description}
              img={news.thumbnail_name}
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <button className="py-2 px-6 bg-primary transition ease-in-out delay-150 hover:-translate-y-1 hover:border-primary hover:text-black hover:border hover:bg-white duration-300 text-white">
          More News
        </button>
      </div>
    </div>
  );
};

export default News;
