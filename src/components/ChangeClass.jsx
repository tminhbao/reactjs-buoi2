import React, { Component } from "react";

const data = [
  {
    id: 1,
    price: 30,
    name: "GUCCI G8850U",
    url: "./glassesImage/v1.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 2,
    price: 50,
    name: "GUCCI G8759H",
    url: "./glassesImage/v2.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 3,
    price: 30,
    name: "DIOR D6700HQ",
    url: "./glassesImage/v3.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 4,
    price: 70,
    name: "DIOR D6005U",
    url: "./glassesImage/v4.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 5,
    price: 40,
    name: "PRADA P8750",
    url: "./glassesImage/v5.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 6,
    price: 60,
    name: "PRADA P9700",
    url: "./glassesImage/v6.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 7,
    price: 80,
    name: "FENDI F8750",
    url: "./glassesImage/v7.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 8,
    price: 100,
    name: "FENDI F8500",
    url: "./glassesImage/v8.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 9,
    price: 60,
    name: "FENDI F4300",
    url: "./glassesImage/v9.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
];

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
          className="d-inline m-1"
          style={{ width: "200px", border: "1px solid blue" }}
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
      <div className="container-fluid">
        <div className="row justify-content-center">
          <h3 className="text-center">Glasses Change App</h3>
          <div className="col-5" style={{ position: "relative" }}>
            <img
              src="./glassesImage/model.jpg"
              alt=""
              style={{ objectFit: "containe" }}
              className="w-50"
            />
            <img
              src={this.state.glassItem.url}
              alt=""
              style={{
                width: "200px",
                position: "absolute",
                top: "74px",
                left: "212px",
              }}
            />
            <div
              className="content-wrapper w-50"
              style={{
                backgroundColor: "transparent",
                border: "1px solid red",
                margin: "0 auto",
                transform: "translateY(-126px)",
              }}
            >
              <h4>{this.state.glassItem.name}</h4>
              <p>{this.state.glassItem.desc}</p>
            </div>
          </div>
          <div className="col-5">
            <img
              src="./glassesImage/model.jpg"
              alt=""
              style={{ objectFit: "containe" }}
              className="w-50"
            />
            <img
              src={this.state.glassItem.url}
              alt=""
              style={{
                width: "200px",
                position: "absolute",
                top: "120px",
                right: "328px",
              }}
            />
          </div>
        </div>
        <div className="row">
          <h3 className="text-center">Choose Glasses</h3>
          <div className="col-12">
            <div
              className="glass-wrapper w-75"
              style={{
                backgroundColor: "white",
                margin: "0 auto",

                borderRadius: "8px",
                padding: "8px",
              }}
            >
              {this.renderGlassesList()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
