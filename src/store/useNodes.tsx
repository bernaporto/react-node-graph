import React, { createContext, PropsWithChildren, useContext } from 'react';
import { Node, OnNodesChange, useNodesState } from 'react-flow-renderer';
import { createNode, TNodeType } from '../nodes';

const noop = () => {
  /* noop */
};

const NodeContext = createContext<{
  nodes: Node[];
  onNodesChange: OnNodesChange;
  addNode: (type: TNodeType) => void;
}>({
  nodes: [],
  addNode: noop,
  onNodesChange: noop,
});

export function NodeProvider(props: PropsWithChildren) {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);

  return (
    <NodeContext.Provider
      value={{
        nodes,
        onNodesChange,
        addNode: (type: TNodeType) => {
          if (
            type === 'query' &&
            nodes.find((node) => node.data.nodeType === 'query')
          ) {
            return;
          }

          setNodes([...nodes, createNode(type)]);
        },
      }}
    >
      {props.children}
    </NodeContext.Provider>
  );
}

export const useNodes = () => useContext(NodeContext);
