import React from "react";
import Tour from "./Tour";
const tours = ({ tours, removeTour }) => {
  return (
    <div className="title">
      <h2>Our tours</h2>
      <div className="underline"></div>
      <div className="tours">
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
        })}
      </div>
    </div>
  );
};

export default tours;
