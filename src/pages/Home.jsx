import React from "react";

import Footer from "../components/Footer";



import Lecturers from "../components/Lecturers";

import UnderNav from "../components/UnderNav";
import Navbar from "../components/Navbar";
import Rank from "../components/Rank";
import News from "../components/News";

const Home = () => {
  return (
    <div>
     <Navbar />

     <UnderNav />
    <Rank />
      <Lecturers/>
      <News />
      
      <Footer />
    

    </div>
  );
};

export default Home;
