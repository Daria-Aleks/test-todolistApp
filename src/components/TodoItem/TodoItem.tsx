import React from 'react';
import './TodoItem.css';



interface TodoItemProps {
    task: { id: number; text: string; completed: boolean };
    toggleTaskCompletion: (taskId: number) => void;
  }
  
  const TodoItem: React.FC<TodoItemProps> = ({ task, toggleTaskCompletion }) => {
    return (
      <li
        className={`todo-item ${task.completed ? 'completed' : ''}`}
        onClick={() => toggleTaskCompletion(task.id)} 
      >
        <label className="custom-checkbox">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleTaskCompletion(task.id)} 
          />
          <span className="checkmark"></span>
        </label>
        <span>{task.text}</span>
      </li>
    );
  };
  
  export default TodoItem;