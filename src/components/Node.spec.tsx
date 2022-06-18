import React from 'react';
import { render } from '@testing-library/react';
import { Node, TNodeProps } from './Node';

const nodeProps: TNodeProps = {
  id: 'test-id',
  title: 'test-title',
  removeNode: () => {
    /* noop */
  },
};

describe('Node', () => {
  it('should render', () => {
    const nodeComponent = render(<Node {...nodeProps} />);

    expect(nodeComponent.queryByTestId('node-root')).toBeTruthy();
  });
});
