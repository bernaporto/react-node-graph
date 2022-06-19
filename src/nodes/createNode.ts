import { Node } from 'react-flow-renderer';
import { v4 as uuidV4 } from 'uuid';
import { nodeConfig } from './constants';
import { TNodeType } from './types';

export const createNode = (nodeType: TNodeType): Node => {
  const { label, ioType } = nodeConfig[nodeType];
  return doCreateNode(nodeType, label, ioType);
};

function doCreateNode(
  nodeType: TNodeType,
  label: string,
  ioType: 'default' | 'input' | 'output'
): Node {
  return {
    type: ioType,
    id: uuidV4(),
    data: { label, nodeType },
    position: {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    },
    className: 'custom-node-theme',
  };
}
