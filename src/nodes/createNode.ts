import { Node } from 'react-flow-renderer';
import { v4 as uuidV4 } from 'uuid';
import { capitalize } from '../tools';

export const nodeType = ['query', 'reader', 'retriever'] as const;
export type TNodeType = typeof nodeType[number];

type TNodeFactory = () => Node;

const nodeFactoryMap: Record<TNodeType, TNodeFactory> = {
  query: () => doCreateNode('query', 'input'),
  reader: () => doCreateNode('reader', 'output'),
  retriever: () => doCreateNode('retriever'),
};

export const createNode = (nodeType: TNodeType): Node =>
  nodeFactoryMap[nodeType]();

function doCreateNode(
  nodeType: TNodeType,
  type: 'default' | 'input' | 'output' = 'default'
): Node {
  return {
    type,
    id: uuidV4(),
    data: { label: capitalize(nodeType), nodeType },
    position: {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    },
  };
}
