import React from "react";
import api from "../../api/api";
import SelectComponent from "./components/SelectComponent";
import Visual from "./Visual";

class VisualContainer extends React.Component {
  state = {
    data: [],
    subjectData: [],
    weekData: [],
    weekName: "",
    present: 0,
    absent: 0,
  };

  apiCall = async (id) => {
    const result = await api.get("/single", {
      params: {
        id: id,
      },
    });

    this.setState({ data: result.data.attendence });
    this.fetchExactData(this.state.data);
  };

  fetchExactData = (data) => {
    data.map((record) => {
      if (record.SemesterName === this.props.match.params.semname) {
        record.Subjects.map((d) => {
          if (d.SubjectName === this.props.match.params.subname) {
            this.setState({ subjectData: d.Subject });

            // Defaulting the pieChart to First Result
            this.setState({
              weekData: d.Subject[0].WeekData,
              weekName: d.Subject[0].Week,
            });
          }
        });
      }
    });
  };

  componentDidMount() {
    this.apiCall(this.props.match.params.id);
  }

  getDataFromComponent = (data, weekName) => {
    this.setState({ weekData: data, weekName: weekName });
  };

  render() {
    if (!this.state.subjectData) {
      return <div>No Subject Data</div>;
    }

    return (
      <div>
        <div className="row" style={{ height: "60px" }}>
          <SelectComponent
            data={this.state.subjectData}
            getWeekData={this.getDataFromComponent}
          />
        </div>
        <div className="row">
          <Visual records={this.state.weekData} week={this.state.weekName} />
        </div>
      </div>
    );
  }
}
export default VisualContainer;
