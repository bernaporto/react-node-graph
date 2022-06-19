import './Board.css';
import React, { FC } from 'react';
import { useNodes } from '../store';
import { Node } from './Node';

export const Board: FC = () => {
  const { nodes, removeNode } = useNodes();

  return (
    <section className="board" data-testid="board-root">
      <div>
        {nodes.map((node) => (
          <Node
            key={node.id}
            removeNode={() => removeNode(node.id)}
            {...node}
          />
        ))}
      </div>

      <BoardGrid />
    </section>
  );
};

const BoardGrid: FC = () => (
  <svg className="board-bg">
    <pattern
      id="grid-fill"
      width="40"
      height="40"
      patternUnits="userSpaceOnUse"
    >
      <g id="cross">
        <path d="M 40 0 v 40" stroke="lightgray" strokeWidth="1"></path>
        <path d="M 0 40 h 40" stroke="lightgray" strokeWidth="1"></path>
      </g>

      <use x="0" y="0" xlinkHref="#cross" />
    </pattern>

    <rect width="100%" height="100%" fill="url(#grid-fill)"></rect>
  </svg>
);
