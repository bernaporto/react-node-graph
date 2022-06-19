import './App.css';
import React, { FC } from 'react';
import { Board } from './components/Board';
import { IOptionDescriptor, Menu } from './components/Menu';
import {
  ADD_NODE_TITLE,
  INT_NODE_TITLE,
  OUTPUT_NODE_TITLE,
  TNodeType,
} from './nodes';
import { useNodes } from './store';

const options: IOptionDescriptor<TNodeType>[] = [
  {
    type: 'add',
    label: ADD_NODE_TITLE,
  },
  {
    type: 'int',
    label: INT_NODE_TITLE,
  },
  {
    type: 'output',
    label: OUTPUT_NODE_TITLE,
  },
];

export const App: FC = () => {
  const { addNode } = useNodes();

  return (
    <section data-testid="app-root" className="app">
      <Board />
      <Menu options={options} onSelectOption={addNode} title="Add Node" />
    </section>
  );
};
