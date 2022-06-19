import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import { NodeProvider } from './hooks';

const element = document.createElement('main');
document.body.append(element);

const root = createRoot(element);
root.render(
  <NodeProvider>
    <App />
  </NodeProvider>
);
