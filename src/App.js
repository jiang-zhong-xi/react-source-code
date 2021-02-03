import React from 'react';
import './App.css';
const e = React.createElement;

class Test extends React.Component {
  componentDidMount() {
    let start = Date.now();
    setTimeout(() => {
      while (Date.now() - start < 10000) {
        // loop
      }
    }, 2000)
  }
  render() {
    return <div>hello</div>
  }
}

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }
  click = () => {
    setTimeout(() => {
      debugger
      this.setState((prev) => {
        return {liked: !prev.liked}
      })
      this.setState((prev) => {
        return {liked: !prev.liked}
      })
    }, 3000)
  }
  render() {
    return (
      <p>
        <div>
          <button onClick={this.click}>
            {this.state.liked ? '1' : '2'}
          </button>
          <button>click</button>
        </div>
      </p>
    )
  }
}
export default LikeButton;
