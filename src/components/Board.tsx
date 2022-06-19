import './Board.css';
import React, { FC } from 'react';
import ReactFlow, { Background, Controls } from 'react-flow-renderer';
import { useNodes, useEdges } from '../hooks';

export const Board: FC = () => {
  const { nodes, onNodesChange } = useNodes();
  const { edges, onConnect, onEdgesChange } = useEdges();

  return (
    <section className="board" data-testid="board-root">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onConnect={onConnect}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        fitView
      >
        <Controls />
        <Background />
      </ReactFlow>
    </section>
  );
};
