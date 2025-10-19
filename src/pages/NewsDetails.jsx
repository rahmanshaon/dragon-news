import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";
import RightAside from "../components/HomeLayout/RightAside";
import NewsDetailsCard from "../components/NewsDetailsCard";
import { useLoaderData, useParams } from "react-router";

const NewsDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const [news, setNews] = useState({});
//   console.log(data, id, news);

  useEffect(() => {
    const newsDetails = data.find((singleNews) => singleNews.id == id);
    setNews(newsDetails);
  }, [data, id]);

  return (
    <div>
      <header className="mt-10">
        <Header />
        <section className="w-11/12 mx-auto my-5">
          <LatestNews />
        </section>
        <nav className="w-11/12 mx-auto my-5">
          <Navbar />
        </nav>
      </header>
      <main className="w-11/12 mx-auto my-5 grid grid-cols-12 gap-5">
        <section className="col-span-9">
          <h2 className="font-bold text-primary mb-5">Dragon News</h2>
          <NewsDetailsCard news={news} />
        </section>
        <aside className="col-span-3 sticky top-0 h-fit">
          <RightAside />
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;
