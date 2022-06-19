import React, { PropsWithChildren } from 'react';
import { act, renderHook } from '@testing-library/react';
import { NodeProvider, useNodes } from './useNodes';

const wrapper = ({ children }: PropsWithChildren) => (
  <NodeProvider>{children}</NodeProvider>
);

describe('useNode', () => {
  it('should add a new node with `addNode`', () => {
    const { result } = renderHook(() => useNodes(), { wrapper });

    act(() => result.current.addNode('reader'));

    expect(result.current.nodes.length).toBe(1);
  });

  it('should add a `query` node only once', () => {
    const { result } = renderHook(() => useNodes(), { wrapper });

    act(() => result.current.addNode('query'));
    act(() => result.current.addNode('query'));

    expect(result.current.nodes.length).toBe(1);
  });

  it('should update a node with onNodesChange', () => {
    const { result } = renderHook(() => useNodes(), { wrapper });

    act(() => result.current.addNode('reader'));

    expect(result.current.nodes.length).toBe(1);
    expect(result.current.nodes[0].selected).toBeFalsy();

    act(() => {
      const { id, selected } = result.current.nodes[0];
      result.current.onNodesChange([
        {
          id,
          selected: !selected,
          type: 'select',
        },
      ]);
    });

    expect(result.current.nodes[0].selected).toBeTruthy();
  });
});
