import './Board.css';
import React, { FC } from 'react';
import ReactFlow, { MiniMap, Controls, Background } from 'react-flow-renderer';
import { useNodes, useEdges } from '../store';

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
        <MiniMap />
        <Controls />
        <Background />
      </ReactFlow>
    </section>
  );
};
