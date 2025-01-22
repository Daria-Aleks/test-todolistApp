import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from './TodoList';

describe('TodoList', () => {

  const tasks = [
    { id: 1, text: 'Task 1', completed: false },
    { id: 2, text: 'Task 2', completed: true },
    { id: 3, text: 'Task 3', completed: false },
  ];

  const toggleTaskCompletion = jest.fn();

  it('renders tasks correctly', () => {
    render(<TodoList tasks={tasks} toggleTaskCompletion={toggleTaskCompletion} />);
    
    expect(screen.getByText('Task 1')).toBeInTheDocument();
    expect(screen.getByText('Task 2')).toBeInTheDocument();
    expect(screen.getByText('Task 3')).toBeInTheDocument();
  });

  it('filters tasks correctly', () => {
    render(<TodoList tasks={tasks} toggleTaskCompletion={toggleTaskCompletion} />);
    
    fireEvent.click(screen.getByText('Все задачи'));
    expect(screen.getByText('Task 1')).toBeInTheDocument();
    expect(screen.getByText('Task 2')).toBeInTheDocument();
    expect(screen.getByText('Task 3')).toBeInTheDocument();

    fireEvent.click(screen.getByText('Выполненные'));
    expect(screen.queryByText('Task 1')).not.toBeInTheDocument();
    expect(screen.queryByText('Task 3')).not.toBeInTheDocument();
    expect(screen.getByText('Task 2')).toBeInTheDocument();

    fireEvent.click(screen.getByText('Невыполненные'));
    expect(screen.queryByText('Task 2')).not.toBeInTheDocument();
    expect(screen.getByText('Task 1')).toBeInTheDocument();
    expect(screen.getByText('Task 3')).toBeInTheDocument();
  });

  it('active filter button is highlighted', () => {
    render(<TodoList tasks={tasks} toggleTaskCompletion={toggleTaskCompletion} />);

    expect(screen.getByText('Все задачи')).toHaveClass('active');

    fireEvent.click(screen.getByText('Выполненные'));
    expect(screen.getByText('Выполненные')).toHaveClass('active');
    expect(screen.getByText('Все задачи')).not.toHaveClass('active');

    fireEvent.click(screen.getByText('Невыполненные'));
    expect(screen.getByText('Невыполненные')).toHaveClass('active');
    expect(screen.getByText('Выполненные')).not.toHaveClass('active');
  });
});