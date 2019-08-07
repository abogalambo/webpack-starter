import React, { Component } from "react";
import styles from './app.css';
import MainScreen from "./main_screen";

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <MainScreen />
      </div>
    );
  }
}

export default App
