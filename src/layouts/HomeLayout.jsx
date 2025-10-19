import React from "react";
import { Outlet, useNavigation } from "react-router";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";
import LeftAside from "../components/homelayout/LeftAside";
import RightAside from "../components/HomeLayout/RightAside";
import Loading from "../components/Loading";

const HomeLayout = () => {
  const { state } = useNavigation();

  return (
    <>
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
        <aside className="col-span-3 sticky top-0 h-fit">
          <LeftAside />
        </aside>
        <section className="col-span-6">
          {state == "loading" ? <Loading /> : <Outlet />}
        </section>
        <aside className="col-span-3 sticky top-0 h-fit">
          <RightAside />
        </aside>
      </main>
    </>
  );
};

export default HomeLayout;
