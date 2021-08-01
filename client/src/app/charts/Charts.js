import React from "react";
class Charts extends React.Component {
  render() {
    return (
      <div>
        <div className="page-header">
          <h3 className="page-title">Chart-js</h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="!#" onClick={(event) => event.preventDefault()}>
                  Charts
                </a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Chart-js
              </li>
            </ol>
          </nav>
        </div>
        <div className="col-md-6 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Pie Chart</h4>
              <Pie
                data={this.doughnutPieData}
                options={this.doughnutPieOptions}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
