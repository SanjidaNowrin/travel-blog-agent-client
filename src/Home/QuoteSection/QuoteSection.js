import React from "react";

const QuoteSection = () => {
  return (
    <div className="container">
      <div className="row m-0 gx-5">
        <div className="col-md-6 mt-5 mb-5">
          <h1 style={{ color: "#565454" }}>
            FINDING YOUR WAY <span style={{ color: "#00bcd9" }}>THROUGH</span>
          </h1>
          <p className="text-secondary">
            Through travel, our feet learn how to form their own paths and our
            heart begins to beat to a different rhythm. The more time we spend
            away from familiar routines, the more we learn to embrace the
            unknown and abandon ourselves into the great vastness of the
            universe.Thus, it is no surprise that in the wild, crazy shuffle of
            travel, we let go of who we were and re-emerge as new individuals.
          </p>
          <div className="row m-0 gx-5 mt-4">
            <div className="col-md-4">
              <img src="https://i.ibb.co/Qp6fdGy/h1-img-13.png" />{" "}
              <h6 className="text-secondary mt-2">ADVENTURE</h6>
            </div>
            <div className="col-md-4">
              <img src="https://i.ibb.co/C72Y4mV/h1-img-16.png" />
              <h6 className="text-secondary ms-2 mt-2">FRIENDLY</h6>
            </div>
            <div className="col-md-4">
              <img src="https://i.ibb.co/WgQ5cpG/h1-img-17.png" />
              <h6 className="text-secondary mt-2">LOW BUDGET</h6>
            </div>
          </div>
        </div>
        <div className="col-md-6 mt-5 mb-5">
          <img
            src="https://i.ibb.co/Mf9SdH6/h2-img-01.png"
            className="img-fluid  "
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default QuoteSection;
