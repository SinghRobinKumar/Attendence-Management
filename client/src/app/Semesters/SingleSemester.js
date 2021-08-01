import React from "react";

import api from "../../api/api";
import UserNav from "./components/UserNav";

import Subjects from "./Subjects";

class SingleSemester extends React.Component {
  state = { data: [], SubjectsData: [], semName: "" };

  apiCall = async () => {
    const result = await api.get("/list");
    this.setState({ data: result.data[0].attendence });
    this.semesterMap(this.state.data);
  };

  componentDidMount() {
    this.setState({ semName: this.props.match.params.name });
    this.apiCall();
  }

  semesterMap = (data) => {
    return data.map((sem) => {
      if (sem.SemesterName === this.state.semName) {
        this.setState({ SubjectsData: sem.Subjects });
        return 1;
      }
      return 0;
    });
  };

  render() {
    if (!this.state.SubjectsData) {
      return (
        <div>
          <div>
            <div>{this.state.semName}</div>
          </div>
          <div>No data</div>
        </div>
      );
    }
    return (
      <div>
        <h3>Choose Subjects</h3>
        <br />
        <div className="row">
          <Subjects
            subjects={this.state.SubjectsData}
            semname={this.state.semName}
            analytics={this.props.match.params.analytics}
          />
        </div>
      </div>
    );
  }
}

export default SingleSemester;
