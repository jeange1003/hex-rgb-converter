import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hexValue: '', red: '', green: '', blue: '', rgbValue: '' };
  }

  // https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
  rgbToHex = (r, g, b) => {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }

  hexToRgb = (hex) => {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }

  handleHexChange = (event) => {
    this.setState({ hexValue: event.target.value })
  }
  handlerRedChange = (event) => {
    this.setState({ red: event.target.value })
  }
  handleGreenChange = (event) => {
    this.setState({ green: event.target.value })
  }
  handleBlueChange = (event) => {
    this.setState({ blue: event.target.value })
  }
  handleRgbValueChange = (event) => {
    this.setState({ rgbValue: event.target.value })
  }

  convertToRgb = () => {
    const result = this.hexToRgb(this.state.hexValue)
    this.setState({ red: result.r })
    this.setState({ green: result.g })
    this.setState({ blue: result.b })
    this.setState({ rgbValue: `rgb(${result.r},${result.g},${result.b})` })
  }
  convertToHex = () => {
    const { red, green, blue } = this.state;
    this.setState({ hexValue: this.rgbToHex(red, green, blue) })
  }
  render() {
    return (
      <div className="app">
        <div>
          <h4>hex</h4>
          <input value={this.state.hexValue} onChange={this.handleHexChange} />
        </div>
        <div className="buttons">
          <button onClick={this.convertToRgb}>
            convert to rgb &gt;&gt;&gt;
          </button>
          <button onClick={this.convertToHex}>
            &lt;&lt;&lt; convert to hex
        </button>
        </div>
        <div className="rgb">
          <h4>rgb</h4>
          <span>red: <input value={this.state.red} onChange={this.handlerRedChange} /></span>
          <span>green: <input value={this.state.green} onChange={this.handleGreenChange} /></span>
          <span>blue: <input value={this.state.blue} onChange={this.handleBlueChange} /></span>
          <span>rgb: <input value={this.state.rgbValue} onChange={this.handleRgbValueChange} /></span>
        </div>
      </div>
    )
  }
}

export default App;
