import React from "react";

import api from "../../api/api";
import SingleItem from "./SingleItem";
import { Link } from "react-router-dom";

class ListRecords extends React.Component {
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

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-9">
            <h3 className="page-title">{this.props.match.params.subname}</h3>
          </div>
          <div className="col-3">
            <Link
              className="btn btn-primary"
              to={`/add-student/${this.props.match.params.semname}/${this.props.match.params.subname}`}
            >
              Add Student
            </Link>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-lg-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th> Roll No </th>
                        <th> Name </th>
                        <th> Present </th>
                        <th> Absent </th>
                      </tr>
                    </thead>
                    <tbody>
                      <SingleItem
                        subname={this.props.match.params.subname}
                        semname={this.props.match.params.semname}
                        data={this.state.data}
                      />
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ListRecords;
