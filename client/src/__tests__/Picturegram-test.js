// __tests__/Intro-test.js
import React from 'react';
import Picturegram from '../Picturegram';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<Picturegram />).toJSON();
  expect(tree).toMatchSnapshot();
});