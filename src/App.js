import React from "react";
import HelloWorld from "./components/HelloWorld";
import RenderForm from "./components/RenderForm";
import SideBar from './components/SideBar';
import { connect } from "react-redux";

import Header from "./components/Header";

const App = (props) => {
  return (
    <div>
      <div>
      <Header />
      <SideBar />
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
  return {
    increaseCounter: () => dispatch(increaseCounter()),

    decreaseCounter: () => dispatch(decreaseCounter()),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);