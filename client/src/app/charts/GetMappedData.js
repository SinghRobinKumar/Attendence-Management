import React from "react";

import PieChartComponent from "./charts/PieChart";

const GetMappedData = (props) => {
  if (!props.records) {
    return <div>Loading...</div>;
  }
  let present = 0;
  let absent = 0;
  props.records.map((record) => {
    if (record.present === true) {
      present = present + 1;
    } else {
      absent = absent + 1;
    }
    return 1;
  });
  const getPercentage = (value, length) => {
    const percentage = (value / length) * 100;
    return parseFloat(percentage).toFixed(2);
  };

  const data = {
    present: parseFloat(getPercentage(present, props.records.length)),
    absent: parseFloat(getPercentage(absent, props.records.length)),
  };

  if (!data) {
    return <div>No data</div>;
  }

  return (
    <div>
      <PieChartComponent pieData={data} />
    </div>
  );
};

export default GetMappedData;
