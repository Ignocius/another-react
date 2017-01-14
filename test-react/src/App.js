import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Cica from './testComponent.js';

// console.log("123");

class App extends Component {
  render() {
    return (
      <div className="App">
        <article className="todo-wrapper">
          <article className="">
            <section className="title">
              <h1>React All the ToDos</h1>
            </section>
            <aside className="todo-data-input">
              <input type="text" name="todo-input" />
              <button />
            </aside>
          </article>
        </article>
      </div>
    );
  }
}

export default App;
