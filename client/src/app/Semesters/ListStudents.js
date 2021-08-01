import React from "react";
import { Link } from "react-router-dom";

import api from "../../api/api";

class ListStudents extends React.Component {
  state = {
    data: [],
  };

  apiCall = async () => {
    const result = await api.get("/list");

    this.setState({ data: result.data });
  };

  componentDidMount() {
    this.apiCall();
  }

  ListStudents = (data) => {
    return data.map((record) => {
      return (
        <tr key={record._id}>
          <td className="py-1" style={{ color: "white" }}>
            {record.rollno}
          </td>
          <td style={{ color: "white" }}> {record.name} </td>
          <td>
            <Link
              to={`/analytics/${this.props.match.params.semname}/${this.props.match.params.subname}/${record._id}`}
              className="btn btn-success"
            >
              View Data
            </Link>{" "}
          </td>
        </tr>
      );
    });
  };

  render() {
    return (
      <div>
        <div>
          <div className="page-header"></div>
          <div className="row">
            <div className="col-lg-12 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <div className="card-title" style={{ fontSize: "20px" }}>
                    Students List
                  </div>
                  <div className="table-responsive">
                    <table className="table table-striped">
                      <thead>
                        <tr>
                          <th style={{ color: "white" }}> Roll No </th>
                          <th style={{ color: "white" }}> Name </th>
                          <th style={{ color: "white" }}> Analytics </th>
                        </tr>
                      </thead>
                      <tbody>{this.ListStudents(this.state.data)}</tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ListStudents;
