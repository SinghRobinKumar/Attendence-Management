import React, { useState } from "react";
import api from "../../api/api";

const SingleRecord = (props) => {
  const [present, setPresent] = useState("");
  const [absent, setAbsent] = useState("");

  if (!props.data) {
    return (
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    );
  }
  const week = "Week1";

  const ifPresent = (record) => {
    api.post("/update", {
      params: {
        id: record._id,
        semname: props.semname,
        subname: props.subname,
        week: week,
        present: true,
        date: new Date(),
      },
    });
    setPresent("yes");
    setAbsent("");
  };
  const ifAbsent = (record) => {
    api.post("/update", {
      params: {
        id: record._id,
        semname: props.semname,
        subname: props.subname,
        week: week,
        present: false,
        date: new Date(),
      },
    });
    setAbsent("yes");
    setPresent("");
  };

  return props.data.map((record) => {
    return (
      <tr key={record._id}>
        <td className="py-1">{record.rollno}</td>
        <td> {record.name} </td>
        <td>
          <button
            type="button"
            className={`btn btn-success`}
            // disabled={present}
            onClick={() => ifPresent(record)}
          >
            Present
          </button>
        </td>
        <td>
          <button
            type="button"
            className={`btn btn-danger`}
            // disabled={absent}
            onClick={() => ifAbsent(record)}
          >
            Absent
          </button>
        </td>
      </tr>
    );
  });
};

export default SingleRecord;
