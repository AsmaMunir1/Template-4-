import React from "react";
import Hero from "./components/Hero";
import Featured from "./components/featured";
import Unique from "./components/unique";
import TrendingProducts from "./components/Trendingproducts";
import Discount from "./components/Discount";
import TopCategories from "./components/TopCategores";
import Newslater from "./components/Newslater";
import Offers from "./components/offers";
import LatestProducts from "./components/LatestProducts";
//


export default function Home() {
  return (
    <div>
     
     

      <Hero/>
      <Featured/>
      <LatestProducts/>
      <Offers/>
      <Unique/>
      <TrendingProducts/>
      <Discount/>
      <TopCategories/>
      <Newslater/>
    
    
    </div>

    
  );
}


