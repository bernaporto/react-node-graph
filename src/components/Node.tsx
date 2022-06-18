import './Node.css';
import React, { FC } from 'react';
import { INodeDescriptor } from '../nodes';

export type TNodeProps = Pick<INodeDescriptor, 'id' | 'title'> & {
  removeNode: VoidFunction;
};

export const Node: FC<TNodeProps> = (props) => {
  const { id, title, removeNode } = props;

  return (
    <section data-testid="node-root" id={`node_${id}`} className="node-root">
      <div className="node-header">
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
};
