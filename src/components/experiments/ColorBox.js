import React, { Component } from "react";
import { fabricColor, colorSuffix } from "../fabricStyles";
import { Dropdown } from "office-ui-fabric-react/lib/Dropdown";

let animations = [
  "bounce",
  "flash",
  "pulse",
  "rubberBand",
  "shake",
  "headShake",
  "swing",
  "tada",
  "wobble",
  "jello",
  "bounceIn",
  "bounceInDown",
  "bounceInLeft",
  "bounceInRight",
  "bounceInUp",
  "bounceOut",
  "bounceOutDown",
  "bounceOutLeft",
  "bounceOutRight",
  "bounceOutUp",
  "fadeIn",
  "fadeInDown",
  "fadeInDownBig",
  "fadeInLeft",
  "fadeInLeftBig",
  "fadeInRight",
  "fadeInRightBig",
  "fadeInUp",
  "fadeInUpBig",
  "fadeOut",
  "fadeOutDown",
  "fadeOutDownBig",
  "fadeOutLeft",
  "fadeOutLeftBig",
  "fadeOutRight",
  "fadeOutRightBig",
  "fadeOutUp",
  "fadeOutUpBig",
  "flipInX",
  "flipInY",
  "flipOutX",
  "flipOutY",
  "lightSpeedIn",
  "lightSpeedOut",
  "rotateIn",
  "rotateInDownLeft",
  "rotateInDownRight",
  "rotateInUpLeft",
  "rotateInUpRight",
  "rotateOut",
  "rotateOutDownLeft",
  "rotateOutDownRight",
  "rotateOutUpLeft",
  "rotateOutUpRight",
  "hinge",
  "rollIn",
  "rollOut",
  "zoomIn",
  "zoomInDown",
  "zoomInLeft",
  "zoomInRight",
  "zoomInUp",
  "zoomOut",
  "zoomOutDown",
  "zoomOutLeft",
  "zoomOutRight",
  "zoomOutUp",
  "slideInDown",
  "slideInLeft",
  "slideInRight",
  "slideInUp",
  "slideOutDown",
  "slideOutLeft",
  "slideOutRight",
  "slideOutUp"
];

export class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animation: "bounce",
      color: "blue"
    };
    this._handleChangeColor = this._handleChangeColor.bind(this);
    this._handleChangeAnimation = this._handleChangeAnimation.bind(this);
    this._handleClick = this._handleClick.bind(this);
  }

  colorArray() {
    let arr = [];
    if (colorSuffix) {
      for (let key in colorSuffix) {
        if (colorSuffix.hasOwnProperty(key)) {
          arr.push({
            key: key,
            text: key
          });
        }
      }
      return arr;
    }
  }

  _animationArray() {
    return animations.sort().map(current => ({ key: current, text: current }));
  }

  _getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  _getRandomAnimation() {
    let index = this._getRandomInt(0, animations.length);
    return animations[index];
  }

  _handleChangeColor(options) {
    this.setState({ color: options.key });
  }

  _handleChangeAnimation(options) {
    this.setState({ animation: options.key });
  }

  _handleClick(e) {
    let animation = this._getRandomAnimation();
    this.setState({ animation });
  }

  render() {
    let divClass =
      fabricColor("bg", this.state.color) + " animated " + this.state.animation;
    let divStyles = {
      display: "inline-block",
      width: "100px",
      height: "100px",
      marginBottom: "1em",
      border: "5px solid #333",
      float: "right"
    };

    return (
      <div>
        <p className="ms-font-xl">ColorBox</p>
        <Dropdown
          label="Color"
          options={this.colorArray()}
          selectedKey={this.state.color}
          onChanged={this._handleChangeColor}
        />
        <Dropdown
          label="Animation"
          options={this._animationArray()}
          selectedKey={this.state.animation}
          onChanged={this._handleChangeAnimation}
        />

        <div
          onClick={this._handleClick}
          style={divStyles}
          className={divClass}
          id="colorBox"
        />
      </div>
    );
  }
}

export default ColorBox;
