import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from './Home';
import Quote from './Quotes';

afterEach(() => {
  cleanup();
});

describe('User interaction test', () => {
  it('Checks when clicked if the home component works', () => {
    render(<Home />);
    const element = screen.getByTestId('home');
    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent('Welcome to our page!Lorem ipsum dolor sit amet consectetur adipisicing elit. In eaque illo et asperiores temporibus tempore ad aperiam at fuga distinctio labore quasi maiores laudantium odio consectetur eveniet earum consequatur, dignissimos, deleniti eos minus.');
  });
});

it('Checks when clicked if the Quote component works', () => {
  render(<Quote />);
  const element = screen.getByTestId('quote');
  expect(element).toBeInTheDocument();
  expect(element).toHaveTextContent(
    'Mathematics is not about numbers, equations, computations, or algorithms: it is about understanding. -William Paul Thurston',
  );
});
