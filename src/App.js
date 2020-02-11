import React from 'react';
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";

const tasklist= [
  {
    name: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    name: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todolist: tasklist
    };

  }

  toggleItem = clickedId => {
    const newtodolist = this.state.todolist.map(item => {
      if (item.id === clickedId) {
        return {
          ...item,
          completed: !item.completed
        };
      } else {
        return item;
      }
    });

    this.setState({
      todolist: newtodolist
    });
  };

  addNewItem = itemText => {
    const newItem = {
      name: itemText,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todolist: [...this.state.todolist, newItem]
    });
  };
  clearCompleted = () => {
    this.setState({
      todolist: this.state.todolist.filter(item => {
        if (item.completed === false) {
          return {};
        }
      })
    });
  };

  render() {
    console.log('rendering...');
    return (
      <div className="App">
        <div className="header">
          <h1>Todo List</h1>
          <TodoForm addNewItem={this.addNewItem} />
        </div>
        <TodoList
          todo={this.state.todolist}
          toggleItem={this.toggleItem}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;