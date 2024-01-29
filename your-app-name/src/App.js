import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    // App.js
import React, { useState } from 'react';
import AddTask from './AddTask';
import ListTask from './ListTask';

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, description: 'Task 1', isDone: false },
    { id: 2, description: 'Task 2', isDone: true },
    // Add more tasks as needed
  ]);

  const [filter, setFilter] = useState('all'); // 'all', 'done', 'notDone'
  const [editingTaskId, setEditingTaskId] = useState(null);

  const addTask = (description) => {
    const newTask = {
      id: tasks.length + 1,
      description,
      isDone: false,
    };
    setTasks([...tasks, newTask]);
  };

  const toggleTask = (taskId) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, isDone: !task.isDone } : task
    ));
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const editTask = (taskId) => {
    setEditingTaskId(taskId);
  };

  return (
    <div>
      <AddTask onAdd={addTask} />
      <div>
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('done')}>Done</button>
        <button onClick={() => setFilter('notDone')}>Not Done</button>
      </div>
      <ListTask
        tasks={tasks}
        filter={filter}
        onToggle={toggleTask}
        onDelete={deleteTask}
        onEdit={editTask}
      />
    </div>
  );
};

export default App;

  );
}

export default App;
