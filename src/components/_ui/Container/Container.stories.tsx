import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { Container } from './Container';

const knobs = () => ({
  role: text('Role', ''),
});

storiesOf('ui/Container', module)
  .addDecorator(withKnobs)
  .add('Default', () => (
    <div style={{ backgroundColor: 'lightblue' }}>
      <Container {...knobs()}>
        <div style={{ padding: '20px', backgroundColor: '#ffdd2d' }}>Container content</div>
      </Container>
    </div>
  ));
