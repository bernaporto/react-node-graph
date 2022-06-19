export type { INodeDescriptor, TNodeId, TNodeType } from './types';
export { ADD_NODE_TITLE } from './factories/add.node';
export { INT_NODE_TITLE } from './factories/int.node';
export { OUTPUT_NODE_TITLE } from './factories/output.node';

import { createAddNode } from './factories/add.node';
import { createIntNode } from './factories/int.node';
import { createOutputNode } from './factories/output.node';
import { TNodeType, TNodeFactory } from './types';

export const nodeFactories: Record<TNodeType, TNodeFactory> = {
  add: createAddNode,
  int: createIntNode,
  output: createOutputNode,
};
