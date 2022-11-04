import React, { Component } from "react";

export default class ChangeClass extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-6">
            <img src="./glassesImage/model.jpg" alt="" className="w-100" />
          </div>
          <div className="col-6">
            <img src="./glassesImage/model.jpg" alt="" className="w-100" />
          </div>
        </div>
      </div>
    );
  }
}
