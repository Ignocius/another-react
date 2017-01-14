import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoItemsRender from './todoItemsRender.js';
// import Cica from './testComponent.js';

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
            <section className="todo-items-wrapper">
              <TodoItemsRender />
              {/* <ul>
                <li>Test1</li>
                <li>Test2</li>
                <li>Test3</li>
                <li>Test4</li>
              </ul> */}
            </section>
          </article>
        </article>
      </div>
    );
  }
}

export default App;
