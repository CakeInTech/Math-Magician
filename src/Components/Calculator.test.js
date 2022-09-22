import React from 'react';
import Calculator from './Calculator';
import renderer from 'react-test-renderer';

it("renders and test's agianst the dom", () => {
  const linker = renderer.create(<Calculator />).toJSON();
  expect(linker).toMatchInlineSnapshot();
});