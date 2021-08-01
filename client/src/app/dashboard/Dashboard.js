import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Dashboard extends Component {
  render() {
    return (
      <div className="row" style={{ marginTop: "5%" }}>
        <div
          className="col-xl-3 col-sm-6 grid-margin stretch-card center-text"
          style={{ height: "130px", textAlign: "center" }}
        >
          <div className="card">
            <Link style={{ textDecoration: "none" }} to="/Semesters/false">
              <div className="card-body" style={{ marginTop: "20px" }}>
                <h3 style={{ color: "white" }}>Enter Attendence</h3>
              </div>
            </Link>
          </div>
        </div>
        <div
          className="col-xl-3 col-sm-6 grid-margin stretch-card"
          style={{ height: "130px", textAlign: "center" }}
        >
          <div className="card">
            <Link style={{ textDecoration: "none" }} to="/Semesters/true">
              <div className="card-body" style={{ marginTop: "20px" }}>
                <h3 style={{ color: "white" }}>Analytics</h3>
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
