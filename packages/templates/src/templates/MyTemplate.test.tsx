import React from 'react';
import { create } from '../helpers/render';
import { MyTemplate } from './MyTemplate';

test('renders a template', async () => {
  expect(create(<MyTemplate user="John" />)).toMatchSnapshot();
});
