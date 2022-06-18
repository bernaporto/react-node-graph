import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useReducer,
} from 'react';
import { nodeFactories } from '../nodes';
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
  }
}

const noop = () => {
  /* noop */
};

const NodeContext = createContext<TNodeContext>({
  nodes: [],
  addNode: noop,
  removeNode: noop,
});

export function NodeProvider(props: PropsWithChildren) {
  const [nodes, dispatch] = useReducer(nodeReducer, []);

  return (
    <NodeContext.Provider
      value={{
        nodes,
        addNode: (payload) => dispatch({ type: 'add-node', payload }),
        removeNode: (payload) => dispatch({ type: 'remove-node', payload }),
      }}
    >
      {props.children}
    </NodeContext.Provider>
  );
}

export const useNodes = () => useContext(NodeContext);
