import React from "react";
import dashboard from "../../assets/images/dashboard.png";
const DashboardHome = () => {
  return (
    <div className="container">
      <h1 style={{ color: "#00BCD9", textAlign: "center" }}>
        Welcome to Dashboard
      </h1>
      <img src={dashboard} className="img-fluid" alt="" />
    </div>
  );
};

export default DashboardHome;
