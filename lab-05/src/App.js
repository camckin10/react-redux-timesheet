import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Redirect, Route} from 'react-router';
import Projects from "./projects/Projects";
import Employees from './employees/Employees';
import Timesheets from './timesheets/Timesheets';
import Navigation from './nav/Navigation';
import ProjectsDetail from './projects/ProjectsDetail';
import TimesheetsDetail from './timesheets/TimesheetsDetail';
import EmployeeDetail from './employees/EmployeeDetail';
import TimeunitsDetail from './timeunits/TimeunitsDetail';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navigation />
          <div className="container">
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/projects/detail/:_id?" component={ProjectsDetail} />
          <Route exact path="/employees" component={Employees} />
          <Route exact path="/employees/detail/:_id?" component={EmployeeDetail} />
          <Route exact path="/timesheets" component={Timesheets} />
          <Route exact path="/timesheets/detail/:_id?" component={TimesheetsDetail} />
        <Route exact path="/timesheets/detail/:timesheet_id/timeunits/detai:_id?" component={TimeunitsDetail}
         />

        <Redirect to="/employees" />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
