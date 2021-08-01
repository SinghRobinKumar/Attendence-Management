import React from "react";

import LinkingComponent from "./LinkingComponent";

const Subjects = (props) => {
  return props.subjects.map((sub) => {
    return (
      <React.Fragment>
        <div className="col-6" style={{ marginBottom: "30px" }}>
          <LinkingComponent
            data={sub}
            analytics={props.analytics}
            semname={props.semname}
          />
        </div>
      </React.Fragment>
    );
  });
};

export default Subjects;
