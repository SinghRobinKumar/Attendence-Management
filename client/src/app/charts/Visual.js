import React from "react";

import GetMappedData from "./GetMappedData";

class Visual extends React.Component {
  state = {
    data: [],
    percentage: {},
  };

  percentage = { present: 0, absent: 0 };

  apiCall = async () => {
    await this.props.records;
  };

  static getDerivedStateFromProps(props, state) {
    if (props.records !== state.records) {
      return {
        data: props.records,
      };
    }
    return null;
  }

  render() {
    if (!this.props.records) {
      return <div>No Records</div>;
    }

    return (
      <div>
        <h3>{this.props.week}</h3>
        <GetMappedData records={this.state.data} />
      </div>
    );
  }
}

export default Visual;
