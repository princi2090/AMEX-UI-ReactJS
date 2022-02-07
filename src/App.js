import React from "react";
import SideBar from './components/SideBar';
import { connect } from "react-redux";
import Header from "./components/Header";
import RoutesComponent from "./routing/router";
// import {TableDemo} from "./components/TableDemo"

const App = (props) => {
  return (
    <div>
      <div>
      <Header />
      <SideBar />
      <RoutesComponent />
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