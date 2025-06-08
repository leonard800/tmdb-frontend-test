"use client";
import React from "react";
import NowPlaying from "../components/NowPlaying";
import TopRated from "../components/TopRated";

const Home = () => {
  return (
    <div className="homepage">
      <NowPlaying />
      <TopRated />
    </div>
  );
};

export default Home;
