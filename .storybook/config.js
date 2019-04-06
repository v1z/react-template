import { configure } from '@storybook/react';
import '../src/styles/default.css';

const req = require.context('../src/components', true, /\.stories\.jsx?$/);

const loadStories = () => {
  req.keys().forEach(filename => req(filename));
};

configure(loadStories, module);
