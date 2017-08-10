import React, { Component } from 'react';
import './App.css';
import Sample from './Sample';

const styles={
  sample:{
    textAlign:'center'
  }
}

class App extends Component {
  render() {
    return (
      <div style={styles.sample}>
        Hello
        <Sample/>
      </div>
    );
  }
}

export default App;
