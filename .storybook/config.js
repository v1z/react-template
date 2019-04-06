import { Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Container } from '../src/components/Container';
import { configure, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { configureViewport, INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import '../src/styles/default.css';

// turn on Info addon
addDecorator(
  withInfo({
    inline: true, // show component documentation by default
    header: false, // drop useless info
    source: false, // cause we have 'story source' addon and <Fragment> issues
    propTablesExclude: [Fragment, BrowserRouter, Container], // clear propTypes tables from useless sections
  })
);

// configure custom media breakpoints
const newViewports = {
  mobile: {
    name: 'mobile',
    styles: {
      width: '320px',
      height: '640px',
    },
  },
  mobileLarge: {
    name: 'mobile-large',
    styles: {
      width: '414px',
      height: '640px',
    },
  },
  tablet: {
    name: 'tablet',
    styles: {
      width: '640px',
      height: '1080px',
    },
  },
  tabletLarge: {
    name: 'tablet-large',
    styles: {
      width: '1024px',
      height: '1240px',
    },
  },
  desktop: {
    name: 'desktop',
    styles: {
      width: '1366px',
      height: '768px',
    },
  },
  desktopLarge: {
    name: 'desktop-large',
    styles: {
      width: '1600px',
      height: '900px',
    },
  },
  desktopExtraLarge: {
    name: 'desktop-extra-large',
    styles: {
      width: '1921px',
      height: '1080px',
    },
  },
};

// turn on Viewport addon with some custom viewport options
configureViewport({
  defaultViewport: 'responsive',
  viewports: {
    ...newViewports,
    ...INITIAL_VIEWPORTS,
  },
});

const req = require.context('../src/components', true, /\.stories\.jsx?$/);

const loadStories = () => {
  req.keys().forEach(filename => req(filename));
};

configure(loadStories, module);
