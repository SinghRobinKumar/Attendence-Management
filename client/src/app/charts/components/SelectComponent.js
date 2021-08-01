import React from "react";
import { Dropdown } from "react-bootstrap";

const SelectComponent = (props) => {
  let month = 0;

  let month1 = [];
  let month2 = [];

  let semesterData = [];
  let semesterDataFull = [];

  const dropdownItems = (data) => {
    return data.map((week) => {
      return (
        <Dropdown.Item
          key={week._id}
          onClick={() => props.getWeekData(week.WeekData, week.Week)}
        >
          {week.Week}
        </Dropdown.Item>
      );
    });
  };

  const getMonth = (data) => {
    return data.map((m) => {
      month = month + 1;
      // if (month == 4) {
      //   return (
      //     <Dropdown.Item
      //       key={m._id}
      //       onClick={() => props.getWeekData(m.WeekData, m.Week)}
      //     >
      //       m.week
      //     </Dropdown.Item>
      //   );
      // } else {
      // month1.push(m.WeekData);
      // console.log(m.WeekData);
      // }
    });
  };
  // console.log(month1);

  const getSemester = (data) => {
    data.map((week) => {
      week.WeekData.map((w) => {
        semesterData.push(w);
      });
    });
    props.getWeekData(semesterData, "Semester");
  };

  return (
    <div className="row">
      <div className="col-6">
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Weeks
          </Dropdown.Toggle>

          <Dropdown.Menu>{dropdownItems(props.data)}</Dropdown.Menu>
        </Dropdown>
      </div>
      {/* <div className="col-4">
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Month
          </Dropdown.Toggle>

          <Dropdown.Menu>{getMonth(props.data)}</Dropdown.Menu>
        </Dropdown>
      </div> */}
      <div className="col-6">
        <button
          className="btn btn-primary"
          onClick={() => getSemester(props.data)}
        >
          Semester
        </button>
      </div>
    </div>
  );
};
export default SelectComponent;
