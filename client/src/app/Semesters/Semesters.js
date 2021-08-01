import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Semesters = (props) => {
  const whenClicked = (sem) => {
    props.whenClicked(sem);
  };

  if (!props.semesters) {
    return <div>No Semester Data</div>;
  }

  return props.semesters.map((sem) => {
    return (
      <React.Fragment>
        <div className="col-6" style={{ marginBottom: "30px" }}>
          <Link
            to={`/semester/${sem.SemesterName}/${props.analytics}`}
            onClick={() => whenClicked(sem)}
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
                  <h4 className="mb-0 text-center">{sem.SemesterName}</h4>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </React.Fragment>
    );
  });
};

export default Semesters;
