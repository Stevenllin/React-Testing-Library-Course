import { render, screen } from '@testing-library/react';
import Header from '../Header';


describe("Header", () => {
  test('should render same test passed into title prop', () => {
    render(<Header title="My Header" />);
    const headingElement = screen.getByText(/my header/i);
    expect(headingElement).toBeInTheDocument();
  });
})
