import React from 'react';
import renderer from 'react-test-renderer';
import Home from './Home';

it('renders correctly', () => {
  const linker = renderer.create(<Home />).toJSON();
  expect(linker).toMatchSnapshot();
});
