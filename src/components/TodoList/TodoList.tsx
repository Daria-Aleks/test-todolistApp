import React, { useState } from 'react';
import TodoItem from '../TodoItem/TodoItem'; 
import './TodoList.css';

interface TodoListProps {
    tasks: { id: number; text: string; completed: boolean }[];
    toggleTaskCompletion: (taskId: number) => void;
  }
  
  const TodoList: React.FC<TodoListProps> = ({ tasks, toggleTaskCompletion }) => {
    const [filter, setFilter] = useState<string>('all');

    const filteredTasks = tasks.filter((task) => {
      if (filter === 'completed') {
        return task.completed;
      } else if (filter === 'incomplete') {
        return !task.completed;
      }
      return true; 
    });
  
    return (
      <div className="todo-list">
        <h2>Задачи</h2>
  
        <div className="filters">
          <button onClick={() => setFilter('all')} className={filter === 'all' ? 'active' : ''}>
            Все задачи
          </button>
          <button
            onClick={() => setFilter('completed')}
            className={filter === 'completed' ? 'active' : ''}
          >
            Выполненные
          </button>
          <button
            onClick={() => setFilter('incomplete')}
            className={filter === 'incomplete' ? 'active' : ''}
          >
            Невыполненные
          </button>
        </div>
  
        <ul>
          {filteredTasks.map((task) => (
            <TodoItem
              key={task.id}
              task={task}
              toggleTaskCompletion={toggleTaskCompletion}
            />
          ))}
        </ul>
      </div>
    );
  };
  
  export default TodoList;