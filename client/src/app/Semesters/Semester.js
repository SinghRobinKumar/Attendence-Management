import React from "react";

import api from "../../api/api";
import Semesters from "./Semesters";
import UserNaV from "./components/UserNav";

class Semester extends React.Component {
  state = { data: [], subjectData: [], Names: [] };

  apiCall = async () => {
    const result = await api.get("/list");
    this.setState({ data: result.data[0].attendence });
  };

  componentDidMount() {
    this.apiCall();
    this.setState({ Names: this.props.match.params.name });
  }

  whenClicked = (data) => {
    this.setState({ subjectData: data.Subjects });
  };

  render() {
    if (!this.state.subjectData) {
      return <div>No Data</div>;
    }
    if (!this.state.data) {
      return <div>No Data</div>;
    }

    return (
      <div>
        <h3>
          {this.props.match.params.name === "true"
            ? "Analytics"
            : "Enter Attendance"}
        </h3>
        <br />

        <h4>Choose Semester</h4>

        <div className="row">
          <Semesters
            semesters={this.state.data}
            analytics={this.props.match.params.name}
            whenClicked={this.whenClicked}
          />
        </div>
      </div>
    );
  }
}

export default Semester;
