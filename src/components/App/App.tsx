import React, { useState } from 'react';
import InputField from '../InputField/InputField';
import TodoList from '../TodoList/TodoList';
import './App.css';

interface Task {
  id: number;
  text: string;
  completed: boolean;
}
const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, text: 'Компоненты', completed: false },
    { id: 2, text: 'Стили', completed: true },
    { id: 3, text: 'Тесты', completed: false },
  ]);

  const addTask = (taskText: string) => {
    const newTask: Task = {
      id: tasks.length + 1, 
      text: taskText,
      completed: false,
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const toggleTaskCompletion = (taskId: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="App">
      <h1>ToDo App</h1>
      <InputField addTask={addTask}/>
      <TodoList tasks={tasks} toggleTaskCompletion={toggleTaskCompletion} />
    </div>
  );
};

export default App;