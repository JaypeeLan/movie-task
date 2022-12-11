import React from "react";
import "./cards.css";

const Cards = ({ moviTitle }) => {
  return (
    <section id="cards">
      <p>movie category name</p>
      <div className="movies">
        <div>
          <p>{moviTitle}</p>
        </div>
      </div>
    </section>
  );
};

export default Cards;
