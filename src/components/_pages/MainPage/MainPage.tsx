import React from 'react';
import { Container } from '../../_ui/Container';
import { Example } from '../../../features/counter/components/Example';

// import s from './MainPage.css';

export const MainPage = () => (
  <main>
    <Container>
      <Example />
      <Example incBy={2} />
    </Container>
  </main>
);
