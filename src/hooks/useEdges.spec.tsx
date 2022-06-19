import { renderHook } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { useEdges } from './useEdges';

describe('useEdges', () => {
  it('should create a new edge with `onConnect`', () => {
    const { result } = renderHook(() => useEdges());

    act(() =>
      result.current.onConnect({
        source: 'source-el',
        sourceHandle: 'source-handle-el',
        target: 'target-el',
        targetHandle: 'target-handle-el',
      })
    );

    expect(result.current.edges.length).toBe(1);
  });
});
