import React from 'react';
import renderer from 'react-test-renderer';
import Quote from './Quotes';

it('renders correctly', () => {
  const Linker = renderer.create(<Quote />).toJSON();
  expect(Linker).toMatchSnapshot();
});
