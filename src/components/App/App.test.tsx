import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App', () => {

  it('renders the app correctly', () => {
    render(<App />);
    expect(screen.getByText(/ToDo App/i)).toBeInTheDocument();
  });

  it('adds new task when addTask is called', () => {
    render(<App />);

    const input = screen.getByPlaceholderText(/Введите новую задачу/i); 
    const button = screen.getByText(/Добавить задачу/i); 

    fireEvent.change(input, { target: { value: 'Новая задача' } });

    fireEvent.click(button);

    expect(screen.getByText(/Новая задача/i)).toBeInTheDocument();
  });

});