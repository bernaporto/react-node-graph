import './App.css';
import React, { FC } from 'react';
import { Board } from './components/Board';

export const App: FC = () => (
  <section data-testid="app-root" className="app">
    <Board />
  </section>
);
