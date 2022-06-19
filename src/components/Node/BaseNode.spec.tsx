import React from 'react';
import { render } from '@testing-library/react';
import { BaseNode } from './BaseNode';
import { TNodeProps } from './types';

const nodeProps: TNodeProps = {
  connections: [],
  id: 'test-id',
  title: 'test-title',
  type: 'add',
  removeNode: () => {
    /* noop */
  },
};

describe('Node', () => {
  it('should render', () => {
    const nodeComponent = render(<BaseNode {...nodeProps} />);

    expect(nodeComponent.queryByTestId('node-root')).toBeTruthy();
  });
});
