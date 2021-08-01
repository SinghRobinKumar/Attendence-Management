import React from "react";

import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

class PieChartComponent extends React.Component {
  state = { present: [], absent: 0.0 };

  COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#AF19FF"];

  CustomTooltip = ({ active, payload, label }) => {
    if (active) {
      return (
        <div
          className="custom-tooltip"
          style={{
            backgroundColor: "#ffff",
            padding: "5px",
            border: "1px solid #cccc",
          }}
        >
          <label>{`${payload[0].name} : ${payload[0].value}%`}</label>
        </div>
      );
    }

    return null;
  };

  pieData = () => {
    return [
      {
        name: "Present",
        value: this.props.pieData.present,
      },
      {
        name: "Absent",
        value: this.props.pieData.absent,
      },
    ];
  };

  render() {
    return (
      <div
        className="ui grid center container aligned grid"
        style={{ marginTop: "50px" }}
      >
        <PieChart width={730} height={300}>
          <Pie
            data={this.pieData()}
            color="#000000"
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={120}
            fill="#8884d8"
          >
            {this.pieData().map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={this.COLORS[index % this.COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip content={<this.CustomTooltip />} />
          <Legend />
        </PieChart>
      </div>
    );
  }
}

export default PieChartComponent;
