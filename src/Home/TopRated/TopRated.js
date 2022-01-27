import React from "react";
import "./TopRated.css";
import Rating from "react-rating";
const TopRated = () => {
  return (
    <div>
      <div className="row m-0">
        <div className="col-md-12">
          <h3>London</h3>
          <Rating
            style={{ color: "#FF9529", textAlign: "center" }}
            initialRating={5}
            emptySymbol="far fa-star"
            fullSymbol="fas fa-star"
            readonly
          ></Rating>
          <img
            className="img-fluid"
            src="https://i.ibb.co/LkkhTRt/destination-london-07-800x533.jpg"
            alt="architecture"
          />
          <br /> <br />
          <h3>New York</h3>
          <Rating
            style={{ color: "#FF9529", textAlign: "center" }}
            initialRating={4.8}
            emptySymbol="far fa-star"
            fullSymbol="fas fa-star"
            readonly
          ></Rating>
          <img
            className="img-fluid"
            src="https://i.ibb.co/TcrFGXp/japan-01-800x533.jpg"
            alt="architecture"
          />
          <br /> <br />
          <h3>Japan</h3>
          <Rating
            style={{ color: "#FF9529", textAlign: "center" }}
            initialRating={4.7}
            emptySymbol="far fa-star"
            fullSymbol="fas fa-star"
            readonly
          ></Rating>
          <img
            className="img-fluid"
            src="https://i.ibb.co/TgjpM0t/destination-sydney-08-800x533.jpg"
            alt="architecture"
          />
          <br /> <br />
          <h3>Barcelona</h3>
          <Rating
            style={{ color: "#FF9529", textAlign: "center" }}
            initialRating={4.6}
            emptySymbol="far fa-star"
            fullSymbol="fas fa-star"
            readonly
          ></Rating>
          <img
            className="img-fluid"
            src="https://i.ibb.co/bzKbbVY/destination-barcelona-02-800x533.jpg"
            alt="architecture"
          />
          <br /> <br />
          <h3>Venice</h3>
          <Rating
            style={{ color: "#FF9529", textAlign: "center" }}
            initialRating={4.5}
            emptySymbol="far fa-star"
            fullSymbol="fas fa-star"
            readonly
          ></Rating>
          <img
            className="img-fluid"
            src="https://i.ibb.co/px1Xk1W/venice-01-800x533.jpg"
            alt="architecture"
          />
        </div>
      </div>
    </div>
  );
};

export default TopRated;
