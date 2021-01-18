import React from 'react';
import './App.css';

class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      count: true,
      list: [1,2,3,4]
    }
  }
  clickHandler = () => {
   this.setState({
     list: [1,3,2,4]
   })
  }
  render() {
    return (
      <div className="App" onClick={this.clickHandler}>
        <ul>
        {
          this.state.list &&
          this.state.list.map(item => {
          return <li key={item}>{item}</li>
          })
        }
        </ul>
      </div>
    );
  }
}
export default App;
