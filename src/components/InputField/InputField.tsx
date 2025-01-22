import React, { useState } from 'react';

interface InputFieldProps {
  addTask: (taskText: string) => void; 
}

const InputField: React.FC<InputFieldProps> = ({ addTask }) => {
  const [taskText, setTaskText] = useState<string>(''); 

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTaskText(event.target.value);
  };

  const handleAddTask = () => {
    if (taskText.trim()) { 
      addTask(taskText); 
      setTaskText(''); 
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleAddTask(); 
    }
  };

  return (
    <div className="input-field">
      <input 
        type="text" 
        value={taskText} 
        onChange={handleChange} 
        onKeyUp={handleKeyPress} 
        placeholder="Введите новую задачу" 
      />
      <button onClick={handleAddTask}>Добавить задачу</button>
    </div>
  );
};

export default InputField;