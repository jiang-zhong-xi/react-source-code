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
  render() {
    return e('div', {}, [
      e(Test),
      e(
      'button',
      { onClick: () => {
        debugger
        this.setState({ liked: !this.state.liked }, () => {debugger; })}  },
        this.state.liked ? 'Like' : 'Unlike'
    )]);
  }
}
export default LikeButton;
