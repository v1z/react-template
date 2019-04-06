import React from 'react';
import { storiesOf } from '@storybook/react';
import Container from './Container';

storiesOf('Container', module).add('Default', () => (
  <div style={{ backgroundColor: 'lightblue' }}>
    <Container>
      <div style={{ padding: '20px', backgroundColor: '#ffdd2d' }}>Container content</div>
    </Container>
  </div>
));
