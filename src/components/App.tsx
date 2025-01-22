import React, { useState } from 'react';
import InputField from './InputField';
import TodoList from './TodoList';
import './App.css';

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (taskText: string) => {
    const newTask: Task = {
      id: Date.now(),
      text: taskText,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const toggleTaskCompletion = (taskId: number) => {
    setTasks(tasks.map(task =>
      task.id === taskId
        ? { ...task, completed: !task.completed }
        : task
    ));
  };

  return (
    <div className="App">
      <h1>Todo App</h1>
      <InputField addTask={addTask} />
      <TodoList tasks={tasks} toggleTaskCompletion={toggleTaskCompletion} />
    </div>
  );
};

export default App
