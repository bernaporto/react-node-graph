export type { INodeDescriptor, TNodeId, TNodeType } from './types';
export { ADD_NODE_TITLE } from './factories/add.node';
export { OUTPUT_NODE_TITLE } from './factories/output.node';

import { createAddNode } from './factories/add.node';
import { createOutputNode } from './factories/output.node';
import { TNodeType, TNodeFactory } from './types';

export const nodeFactories: Record<TNodeType, TNodeFactory> = {
  add: createAddNode,
  output: createOutputNode,
};
