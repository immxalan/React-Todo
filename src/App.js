import React from 'react';
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";

const tasks= [
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
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state = {
      todoList: tasks
    };
  }
  // handleChanges = element => {
  //   this.setState({
  //     newTodo: element.target.value
  //   })
//   // }

clearCompleted = () => {
  const newTodoList = this.state.todoList.filter(todo => {
      return !todo.completed
    });
    this.setState({
      todoList: newTodoList
    })
  }

  toggleTodo = clickedId => {
    console.log("hello")
      const newTodoList = this.state.todoList.map(todo => {
        if (todo.id === clickedId) {
          return {
        ...todo,
        completed: !todo.completed
      };
    } else {
      return todo;
    }
  });

  this.setState({
    todoList: newTodoList
  });
};

addNewTodo = todoText => {
  const newTodo = {
    name: todoText,
    id: Date.now(),
    completed: false
  };
  this.setState({
    todoList: [...this.state.todoList, newTodo]
  });
};

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addNewTodo={this.addNewTodo}/>
        <TodoList
          tasks={this.state.todoList}
          toggleTodo={this.toggleTodo}
          clearCompleted={this.clearCompleted}
          />
      </div>
    );
  }
}

export default App;