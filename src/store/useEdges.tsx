import { useCallback } from 'react';
import { addEdge, Connection, useEdgesState } from 'react-flow-renderer';

export function useEdges() {
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  const onConnect = useCallback(
    (params: Connection) => setEdges((value) => addEdge(params, value)),
    []
  );

  return {
    edges,
    onEdgesChange,
    onConnect,
  };
}
