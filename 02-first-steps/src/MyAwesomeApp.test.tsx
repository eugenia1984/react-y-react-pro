import { describe, expect, test } from "vitest";
import { render, screen } from '@testing-library/react';
import { MyAwesomeApp } from "./MyAwesomeApp";

describe('MyAwesomeApp', () => {
  test('should render firstName and lastName', () => {
    const { container } = render(<MyAwesomeApp />);

    const h1 = container.querySelector('h1'); 
    const h2 = container.querySelector('h2'); 

    expect(h1?.innerHTML).toContain('Costa'); // va a contener
    expect(h2?.innerHTML).toContain('María Eugenia');
  })

  test('should render firstName and lastName - screen', () => {
    render(<MyAwesomeApp />);
    screen.debug();

    const h1 = screen.getByTestId('first-name-title'); 
    const h2 = screen.getByRole('heading', {
      level: 2
    }); 
    
    expect(h1?.innerHTML).toContain('Costa');
    expect(h2?.innerHTML).toContain('Eugenia');
  })
});