import './BaseNode.css';
import React, { FC, forwardRef, PropsWithChildren } from 'react';
import { makeDraggable } from '../../events';
import { TNodeProps } from './types';

type TProps = PropsWithChildren<TNodeProps>;

const NODE_DRAG_TARGET_ID = 'node-header';

export const Connector: FC = () => {
  return <div></div>;
};

const NodeWithRef = forwardRef<HTMLElement, TProps>(function Node(props, ref) {
  const {
    children,
    id,
    title,
    removeNode,
    inConnectors = [],
    outConnectors = [],
  } = props;

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
      <div className="node-body">
        {createConnectors(inConnectors)}
        <div className="node-content">{children}</div>
        {createConnectors(outConnectors)}
      </div>
    </section>
  );
});

function createConnectors(connectors: string[]) {
  return (
    <div className="node-connectors-root">
      {connectors.map((name, index) => (
        <div key={`${name}_${index}`} className="node-connector"></div>
      ))}
    </div>
  );
}

export const BaseNode = makeDraggable(NodeWithRef, NODE_DRAG_TARGET_ID);
