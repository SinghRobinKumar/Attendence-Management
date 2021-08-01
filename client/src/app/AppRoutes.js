import React, { Component, Suspense, lazy } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Spinner from "../app/shared/Spinner";

const Dashboard = lazy(() => import("./dashboard/Dashboard"));
// const Subjects = lazy(() => import("./Semesters/Subjects"));

const Semester = lazy(() => import("./Semesters/Semester"));
const SingleSemester = lazy(() => import("./Semesters/SingleSemester"));
const ListRecords = lazy(() => import("./Semesters/ListRecords"));
const ListStudents = lazy(() => import("./Semesters/ListStudents"));

const AddStudent = lazy(() => import("./Semesters/components/AddStudent"));

const VisualContainer = lazy(() => import("./charts/VisualContainer"));
const ChartJs = lazy(() => import("./charts/ChartJs"));

const Error404 = lazy(() => import("./error-pages/Error404"));
const Error500 = lazy(() => import("./error-pages/Error500"));

const Login = lazy(() => import("./user-pages/Login"));
const Register1 = lazy(() => import("./user-pages/Register"));

class AppRoutes extends Component {
  render() {
    return (
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route exact path="/dashboard" component={Dashboard} />
          <Route path="/semesters/:name" component={Semester} />
          <Route path="/semester/:name/:analytics" component={SingleSemester} />
          <Route path="/attendance/:semname/:subname" component={ListRecords} />

          <Route
            path="/analytics/:semname/:subname/:id"
            component={VisualContainer}
          />
          <Route path="/students/:semname/:subname" component={ListStudents} />

          <Route path="/add-student/:semname/:subname" component={AddStudent} />

          <Route path="/charts/chart-js" component={ChartJs} />

          <Route path="/user-pages/login-1" component={Login} />
          <Route path="/user-pages/register-1" component={Register1} />

          <Route path="/error-pages/error-404" component={Error404} />
          <Route path="/error-pages/error-500" component={Error500} />

          <Redirect to="/dashboard" />
        </Switch>
      </Suspense>
    );
  }
}

export default AppRoutes;
