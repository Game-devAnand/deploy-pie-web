// import React from 'react'
import HomeAbout from "./home_about";
import HomeEvents from "./home_events";
import HomeHero from "./home_hero";
import HomeInfoCard from "./home_info";

function Home() {
  return (
    <div>
      <HomeHero />
      <HomeAbout />
      <HomeInfoCard />
      <HomeEvents />
    </div>
  );
}

export default Home;
