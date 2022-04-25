import { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form/Form";
import TodoList from "./components/TodoList/TodoList";
const App = () => {
  const [taskList, setTaskList] = useState([]);
  const [status, setStatus] = useState("all");
  const [filterTasks, setFilterTasks] = useState([]);
  const [errorText, setErrorText] = useState("");

  useEffect(() => {
    filterHandler();
  }, [taskList, status]);

  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilterTasks(taskList.filter((item) => item.completed === true));
        break;
      case "uncompleted":
        setFilterTasks(taskList.filter((item) => item.completed === false));
        break;
      default:
        setFilterTasks(taskList);
        break;
    }
  }; 
  return (
    <div className="App">
      <header>
        <h2>To Do List</h2>
      </header>
      <Form
        setstatus={setStatus}
        tasklist={taskList}
        settasklist={setTaskList}
        setErrorText={setErrorText}
      />
      <p className="error">{errorText}</p>
      <TodoList
        filterTasks={filterTasks}
        tasklist={taskList}
        settasklist={setTaskList}
      />
    </div>
  );
};

export default App;
