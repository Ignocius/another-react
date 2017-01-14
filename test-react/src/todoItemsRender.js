import React from 'react';
import TodoItem from './todoItem.js';
import io from 'socket.io';


class TodoItemsRender extends React.Component {
  render() {
    var socket = io.connect(document.location.protocol+'//'+document.location.hostname+':3001');
    io.emit('sendevent', 1);
    io.on('recive', function(res){
      console.log(res);
    });
    return (
      <ul>

      </ul>
    )
  }
}

export default TodoItesmRender;
