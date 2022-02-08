import React from "react";
import SideBar from './components/SideBar';
import { connect } from "react-redux";
import Header from "./components/Header";
import RoutesComponent from "./routing/router";
import {TableDemo} from "./components/TableDemo"
import {TableDemo1} from "./components/TableDemo1"
import TableDemo2 from "./components/TableDemo2"

const App = (props) => {
  return (
    <div>
      <div>
      <Header />
      <SideBar />
      <RoutesComponent />
       <TableDemo/> 
       {/* <TableDemo1/> */}
      {/* <TableDemo2/> */}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    count: state.app.count,
  }
}

const mapDispatchToProps = dispatch => {
  return {};
  // return {
  //   increaseCounter: () => dispatch(increaseCounter()),

  //   decreaseCounter: () => dispatch(decreaseCounter()),
  // }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);