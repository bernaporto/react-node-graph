import { isNode } from 'react-flow-renderer';
import { createNode, nodeType } from './createNode';

describe('createNode', () => {
  it('should return a Node', () => {
    const nodes = nodeType.map((type) => createNode(type));

    expect(nodes.every(isNode)).toBeTruthy();
  });
});
