import React from "react";
import "../css/Home.css";

const Home = () => {
  return (
    <div className="home-section">

      <div className="home-grid">
        <div className="text-cont">
          <h1 className="hi">Hi, I'm Eganh 👋</h1>
          <p className="description">Full-stack Software Engineer</p>
        </div>


        <div className="image=cont">
          <img className="profile-pic" src="images/pfp.jpeg" alt="Eganh's picture" />
        </div>
      </div>
    </div>
  );
};

export default Home;
