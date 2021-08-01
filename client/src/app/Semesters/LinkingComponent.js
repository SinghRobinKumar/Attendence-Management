import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const LinkingComponent = (props) => {
  const conditionRender = (sub) => {
    if (props.analytics === "false") {
      return (
        <Link
          to={`/attendance/${props.semname}/${sub.SubjectName}`}
          style={{
            textDecoration: "none",
            color: "white",
            textAlign: "center",
            marginBottom: "30px",
            height: "300px",
          }}
        >
          <div className="card">
            <div className="card-body">
              <div className="d-flex align-items-center align-self-start">
                <h4 className="mb-0 text-center">{sub.SubjectName}</h4>
              </div>
            </div>
          </div>
        </Link>
      );
    } else {
      return (
        <Link
          to={`/students/${props.semname}/${sub.SubjectName}`}
          style={{
            textDecoration: "none",
            color: "white",
            textAlign: "center",
            marginBottom: "30px",
            height: "300px",
          }}
        >
          <div className="card">
            <div className="card-body">
              <div className="d-flex align-items-center align-self-start">
                <h4 className="mb-0 text-center"> {sub.SubjectName}</h4>
              </div>
            </div>
          </div>
        </Link>
      );
    }
  };

  return <div>{conditionRender(props.data)}</div>;
};
export default LinkingComponent;
