import React, { Component } from "react";
import data from "../data/dataGlasses.json";

export default class ChangeClass extends Component {
  state = {
    glassItem: {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./glassesImage/v1.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  };
  renderGlassesList = () => {
    return data.map((item, index) => {
      return (
        <img
          src={item.url}
          className="d-inline m-1 p-3"
          style={{
            width: "200px",
            border: "1px solid blue",
            cursor: "pointer",
          }}
          key={index}
          onClick={() => {
            this.setState({ glassItem: item });
          }}
        ></img>
      );
    });
  };
  render() {
    return (
      <div
        className="container-fluid"
        style={{
          backgroundImage: "url(./glassesImage/background.jpg)",
          backgroundSize: "contain",
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(0,0,0,0.3)",
            minHeight: "1000px",
            width: "100%",
          }}
        >
          <h3
            className="text-center text-light p-5"
            style={{ backgroundColor: "rgba(23,43,54,0.3)" }}
          >
            TRY APP GLASSESS ONLINE
          </h3>
          <div className="row mt-5 text-center">
            <div className="col-6 ">
              <div className="position-relative">
                <img
                  src="./glassesImage/model.jpg"
                  alt=""
                  className="position-absolute w-50"
                  style={{
                    left: "50%",
                    transform: "translateX(-50%)",
                  }}
                />
                <img
                  src={this.state.glassItem.url}
                  alt=""
                  className="position-absolute glassesStyle"
                  style={{
                    width: "200px",
                    top: "100px",
                    left: "0px",
                    opacity: 0.7,
                    left: "50%",
                    transform: "translateX(-50%)",
                  }}
                />
                <div
                  className="position-relative "
                  style={{
                    top: "267px",
                    left: "177px",
                    backgroundColor: "rgba(255,127,0,0.7)",
                    textAlign: "left",
                    width: "360px",
                    padding: "10px",
                  }}
                >
                  <p
                    style={{
                      color: "#AB82FF",
                      fontSize: "24px",
                      fontWeight: "bold",
                    }}
                  >
                    {this.state.glassItem.name}
                  </p>
                  <p
                    style={{
                      fontSize: "18px",
                      fontWeight: "400",
                    }}
                  >
                    {this.state.glassItem.desc}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="position-relative">
                <img
                  src="./glassesImage/model.jpg"
                  alt=""
                  className="position-absolute w-50"
                  style={{
                    left: "50%",
                    transform: "translateX(-50%)",
                  }}
                />
                <img
                  src={this.state.glassItem.url}
                  alt=""
                  className="position-absolute glassesStyle"
                  style={{
                    width: "200px",
                    top: "100px",
                    left: "0px",
                    opacity: 0.7,
                    left: "50%",
                    transform: "translateX(-50%)",
                  }}
                />
              </div>
            </div>
          </div>
          <div
            className="bg-light container p-3"
            style={{ marginTop: "300px" }}
          >
            <div className="row">{this.renderGlassesList()}</div>
          </div>
        </div>
      </div>
    );
  }
}
