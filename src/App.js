import React, { Component } from 'react';
import VirtualizedContainer from './VirtualizedContainer';
import VirtualizedPanel from './VirtualizedPanel';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    let panels = [];
    for (let i=0; i<1000; i++) {
      panels.push( (
        <VirtualizedPanel header={"Test panel " + i} height={100} inView={false}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </VirtualizedPanel>
        ) );
    }
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Virtualized Lab</h2>
        </div>
        <p className="App-intro">
          This is an experiment at making a virualized list of React components
        </p>
        <VirtualizedContainer>
          {panels}
        </VirtualizedContainer>
      </div>
    );
  }
}

export default App;
