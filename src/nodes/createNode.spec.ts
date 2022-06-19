import { isNode } from 'react-flow-renderer';
import { createNode } from './createNode';
import { nodeType } from './types';

describe('createNode', () => {
  it('should return a Node', () => {
    const nodes = nodeType.map((type) => createNode(type));

    expect(nodes.every(isNode)).toBeTruthy();
  });
});
