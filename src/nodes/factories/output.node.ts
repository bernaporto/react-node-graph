import { v4 as uuidV4 } from 'uuid';
import { INodeDescriptor } from '../types';

export const OUTPUT_NODE_TITLE = 'Output';

export function createOutputNode(): INodeDescriptor {
  return {
    id: uuidV4(),
    connections: [],
    title: OUTPUT_NODE_TITLE,
    type: 'output',
    process: () => {
      /* noop */
    },
  };
}
