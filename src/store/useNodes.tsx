import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useReducer,
  useState,
} from 'react';
import { INodeDescriptor, nodeFactories, TNodeId } from '../nodes';
import { TNodeStoreState, TNodeContext, TNodeStoreAction } from './types';

function nodeReducer(
  state: TNodeStoreState,
  action: TNodeStoreAction
): TNodeStoreState {
  switch (action.type) {
    case 'add-node': {
      const createNode = nodeFactories[action.payload];

      return [...state, createNode()];
    }

    case 'remove-node':
      return state.filter((node) => node.id !== action.payload);

    case 'update-node': {
      const { data, id } = action.payload;
      const current = state.find((node) => node.id === id);

      if (!current) return state;

      return [
        ...state.filter((node) => node.id !== id),
        { ...current, ...data },
      ];
    }
  }
}

const noop = () => {
  /* noop */
};

const NodeContext = createContext<TNodeContext>({
  nodes: [],
  addNode: noop,
  removeNode: noop,
  updateNode: noop,
});

export function NodeProvider(props: PropsWithChildren) {
  const [nodes, dispatch] = useReducer(nodeReducer, []);

  return (
    <NodeContext.Provider
      value={{
        nodes,
        addNode: (payload) => dispatch({ type: 'add-node', payload }),
        removeNode: (payload) => dispatch({ type: 'remove-node', payload }),
        updateNode: (payload) => dispatch({ type: 'update-node', payload }),
      }}
    >
      {props.children}
    </NodeContext.Provider>
  );
}

export const useNodes = () => useContext(NodeContext);

export const useNode = (
  targetId: TNodeId
): {
  node: INodeDescriptor | null;
  update: (data: Partial<Omit<INodeDescriptor, 'id'>>) => void;
} => {
  const { nodes, updateNode } = useNodes();
  const [node, setNode] = useState<INodeDescriptor | null>(null);

  useEffect(() => {
    const maybeNode = nodes.find(({ id }) => id === targetId);

    if (!node && !maybeNode) return;
    if (!maybeNode) {
      setNode(null);
      return;
    }

    setNode(maybeNode);
  }, [nodes]);

  return {
    node,
    update: (data) => updateNode({ data, id: targetId }),
  };
};
