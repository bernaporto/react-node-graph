import './App.css';
import React, { FC } from 'react';
import { Board } from './components/Board';
import { Menu } from './components/Menu';

export const App: FC = () => {
  return (
    <section data-testid="app-root" className="app">
      <Board />
      <Menu />
    </section>
  );
};
