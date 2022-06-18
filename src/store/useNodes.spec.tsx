import React, { FC, useEffect } from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { NodeProvider, useNodes } from './useNodes';

const TEST_NODE_ID = 'test-node';
const TEST_REMOVE_BUTTON_ID = 'test-button';

const TestNodesComponent: FC = () => {
  const { nodes, removeNode } = useNodes();

  const removeLastNode = () => {
    const lastNode = nodes[nodes.length - 1];

    if (!lastNode) return;

    removeNode(lastNode.id);
  };

  return (
    <div data-testid="test-nodes-root">
      {nodes.map(({ id }) => (
        <div key={id} data-testid={TEST_NODE_ID}></div>
      ))}

      <button data-testid={TEST_REMOVE_BUTTON_ID} onClick={removeLastNode} />
    </div>
  );
};

const TestAddNodeComponent: FC = () => {
  const { addNode } = useNodes();

  useEffect(() => {
    addNode('add');
  }, []);

  return null;
};

describe('useNode', () => {
  it('should add a new node with `addNode`', () => {
    const testComponent = render(
      <NodeProvider>
        <TestNodesComponent />
        <TestAddNodeComponent />
      </NodeProvider>
    );

    expect(testComponent.queryAllByTestId(TEST_NODE_ID).length).toBe(1);
  });

  it('should remove a node with `removeNode`', async () => {
    const testComponent = render(
      <NodeProvider>
        <TestNodesComponent />
        <TestAddNodeComponent />
      </NodeProvider>
    );

    expect(testComponent.queryAllByTestId(TEST_NODE_ID).length).toBe(1);
    const btnRemove = testComponent.queryByTestId(TEST_REMOVE_BUTTON_ID);
    expect(btnRemove).toBeTruthy();

    await userEvent.click(btnRemove!);

    expect(testComponent.queryAllByTestId(TEST_NODE_ID).length).toBe(0);
  });
});
