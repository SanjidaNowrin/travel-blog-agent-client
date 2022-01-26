import React from "react";
import "./TopRated.css";
const TopRated = () => {
  return (
    <div>
      <div className="row m-0">
        <div className="col-md-8" style={{ backgroundColor: "#EFEFEF" }}>
          <div class="image-grid">
            <img
              class="image-grid-col-2 image-grid-row-2"
              src="https://i.ibb.co/LkkhTRt/destination-london-07-800x533.jpg"
              alt="architecture"
            />
            <img
              src="https://i.ibb.co/TcrFGXp/japan-01-800x533.jpg"
              alt="architecture"
            />
            <img
              src="https://i.ibb.co/TgjpM0t/destination-sydney-08-800x533.jpg"
              alt="architecture"
            />
            <img
              src="https://i.ibb.co/bzKbbVY/destination-barcelona-02-800x533.jpg"
              alt="architecture"
            />
            <img
              src="https://i.ibb.co/px1Xk1W/venice-01-800x533.jpg"
              alt="architecture"
            />
          </div>
        </div>
        <div className="col-md-4 shadow-sm">
          <h1
            style={{ color: "#565454", marginTop: "18rem" }}
            className="container text-center toptitle"
          >
            <i className="fas fa-angle-double-left me-2 titleicon"></i> Top
            Places
          </h1>
        </div>
      </div>
    </div>
  );
};

export default TopRated;
