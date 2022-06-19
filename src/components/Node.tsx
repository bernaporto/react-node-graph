import './Node.css';
import React, { forwardRef } from 'react';
import { INodeDescriptor } from '../nodes';
import { makeDraggable } from '../events';

const NODE_DRAG_TARGET_ID = 'node-header';

export type TNodeProps = Pick<INodeDescriptor, 'id' | 'title'> & {
  removeNode: VoidFunction;
};

const Node = forwardRef<HTMLElement, TNodeProps>(function Node(props, ref) {
  const { id, title, removeNode } = props;

  return (
    <section
      data-testid="node-root"
      id={`node_${id}`}
      className="node-root"
      ref={ref}
    >
      <div id={NODE_DRAG_TARGET_ID} className="node-header">
        {title}
        <button
          className="button button-clear node-remove-btn"
          onClick={removeNode}
        >
          {'\u2715'}
        </button>
      </div>
      <div className="node-content"></div>
    </section>
  );
});

export const DraggableNode = makeDraggable(Node, NODE_DRAG_TARGET_ID);
