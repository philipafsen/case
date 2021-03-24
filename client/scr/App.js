import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
//import PostPage from './PostPage.js'; <Route path="/post" component={PostPage} />
//import carPage from './getCars.js';
import {getEmployees, getCarModels, getTotalSales} from './testCase.js';

var employeeList = getEmployees();
var carList = getCarModels();
//var totSales = getTotalSales(); <Route path="/sales" component={sales} />

const Nav = () => (
  <div>
    <br />
      <Link to="/" className="btn btn-primary m2">Home</Link><br /><br />
      <Link to="/post" className="btn btn-primary">POST</Link><br /><br />
      <Link to="/carmodels" className="btn btn-primary">Car Models</Link><br /><br />
      <Link to="/deleted" className="btn btn-primary m2">DELETE</Link><br /><br />
      <Link to="/employees" className="btn btn-primary">Employee List</Link><br /><br />
      <Link to="/sales" className="btn btn-primary">Sales</Link><br /><br />
  </div>
);
const HomePage = () => <h1>HOME</h1>;
const deleted = () => <h1>DELETED</h1>;
const employees = () => <h1>{employeeList[0]}{<br />}{employeeList[1]}{<br />}{employeeList[2]}{<br />}{employeeList[3]}{<br />}</h1>;
const carModels = () => <h1>{carList[0]}{<br />}{carList[1]}{<br />}{carList[2]}{<br />}{carList[3]}{<br />}</h1>;
//const sales = () => <h1>{totSales[0]}{<br />}{totSales[1]}{<br />}{totSales[2]}{<br />}{totSales[3]}{<br />}{totSales[4]}{<br />}{totSales[5]}{<br />}{totSales[6]}{<br />}{totSales[7]}{<br />}</h1>;
class App extends React.Component{

render(){
  return (
    <div className="App">
      <Router>
        <div>
          <Nav />
          <Route exact path="/" component={HomePage} />
          <Route path="/carmodels" component={carModels} />
          <Route path="/deleted" component={deleted} />
          <Route path="/employees" component={employees} />
        </div>
      </Router>
    </div>
  );
}

}

export default App;