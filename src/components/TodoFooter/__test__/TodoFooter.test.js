import { render, screen } from '@testing-library/react';
import TodoFooter from '../TodoFooter';
import { BrowserRouter } from 'react-router-dom';

const MockTodoFooter = ({numberOfIncompleteTasks}) => {
  return (
    <BrowserRouter>
      <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
    </BrowserRouter>
  )
}

test('should render same test passed into title prop 1', () => {
  render(
    <MockTodoFooter numberOfIncompleteTasks={5} />
  );
  const paragraphElement = screen.getByText(/5 tasks left/i);
  expect(paragraphElement).toBeInTheDocument();
});

test('should render task when the number of incomplete tasks is one', () => {
  render(
    <MockTodoFooter numberOfIncompleteTasks={1} />
  );
  const paragraphElement = screen.getByText(/1 task left/i);
  expect(paragraphElement).toHaveTextContent("1 task left");
});

test('should render task when the number of incomplete tasks is one 1', () => {
  render(
    <MockTodoFooter numberOfIncompleteTasks={1} />
  );
  const paragraphElement = screen.getByText(/1 task left/i);
  expect(paragraphElement.textContent).toBe("1 task left");
});
