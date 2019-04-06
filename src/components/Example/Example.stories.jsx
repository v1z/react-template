import React from 'react';
import { storiesOf } from '@storybook/react';

import Example from './Example';

storiesOf('Example', module)
  .addParameters({
    info: {
      text: 'TODO',
    },
  })
  .add('Example default', () => <Example />);
