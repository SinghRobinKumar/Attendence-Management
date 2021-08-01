import React from "react";
import { Link } from "react-router-dom";

import api from "../../../api/api";

import history from "../../../history/history";

class AddStudent extends React.Component {
  state = { name: "", rollno: "" };

  apiCall = async (e) => {
    e.preventDefault();
    console.log(this.state.name);

    history.push(
      `/attendance/${this.props.match.params.semname}/${this.props.match.params.subname}`
    );
    await api.post("/new", {
      params: { name: this.state.name, rollno: this.state.rollno },
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.apiCall}>
          <h3>Add Student</h3>
          <br />
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Name"
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label>Roll No</label>
            <input
              type="text"
              name="rollno"
              className="form-control"
              placeholder="Roll No"
              onChange={(e) => this.setState({ rollno: e.target.value })}
            />
          </div>

          <div className="row">
            <div className="col-6">
              <Link
                type="submit"
                className="btn btn-dark btn-lg btn-block"
                to={`/attendance/${this.props.match.params.semname}/${this.props.match.params.subname}`}
                s
              >
                Cancel
              </Link>
            </div>
            <div className="col-6">
              <input
                type="submit"
                value="Save"
                className="btn btn-dark btn-lg btn-block"
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default AddStudent;
