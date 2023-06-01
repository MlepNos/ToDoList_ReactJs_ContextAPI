import './App.css';
import TaskCreate from './Components/TaskCreate';
import TaskList from './Components/TaskList';
import {useEffect,useContext } from 'react';
import TasksContext from './Context/Tasks';




//https://www.npmjs.com/package/json-server/v/0.16.1
//first open a API folder and create a .json file
//then open a new terminal and write npm install -g json-server   to the terminal
//then write json-server --watch task/API/db.json --port  3004  to the terminal
// you also need to install axios with npm install axios
function App() {
  
  const { fetchTasks } = useContext(TasksContext);
  useEffect(() => { 
    fetchTasks();
  }, []);
  

 

  return (
    <div className="App">
      <TaskCreate/>
      <h1>TASKS</h1>
      <TaskList/>
    </div>
  );
}

export default App;
