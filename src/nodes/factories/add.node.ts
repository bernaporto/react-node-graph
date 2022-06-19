import { v4 as uuidV4 } from 'uuid';
import { INodeDescriptor } from '../types';

export const ADD_NODE_TITLE = 'Add';

export function createAddNode(): INodeDescriptor {
  return {
    id: uuidV4(),
    connections: [],
    title: ADD_NODE_TITLE,
    type: 'add',
    inConnectors: ['valueA', 'valueB'],
    outConnectors: ['result'],
  };
}
