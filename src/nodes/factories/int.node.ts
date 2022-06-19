import { v4 as uuidV4 } from 'uuid';
import { INodeDescriptor } from '../types';

export const INT_NODE_TITLE = 'Int';

export function createIntNode(): INodeDescriptor {
  return {
    id: uuidV4(),
    connections: [],
    title: INT_NODE_TITLE,
    type: 'int',
    process: () => {
      /* noop */
    },
  };
}
