import './Node.css';
import React, { ChangeEventHandler, FC, useState } from 'react';
import { TNodeType } from '../../nodes';
import { BaseNode } from './BaseNode';
import { TNodeProps } from './types';

export const IntNode: FC<TNodeProps> = (props) => {
  const [value, setValue] = useState<number>(0);

  const handleOnChange: ChangeEventHandler<HTMLInputElement> = (evt) => {
    setValue(Number(evt.target.value));
  };

  return (
    <BaseNode {...props}>
      <input
        className="int-node-input"
        type="number"
        value={value}
        onChange={handleOnChange}
      />
    </BaseNode>
  );
};

export const OutputNode: FC<TNodeProps> = (props) => {
  return <BaseNode {...props}>{JSON.stringify('result')}</BaseNode>;
};

const nodeComponentMap: Record<TNodeType, FC<TNodeProps>> = {
  add: BaseNode,
  int: IntNode,
  output: OutputNode,
};

export const Node: FC<TNodeProps> = (props) => {
  const Component = nodeComponentMap[props.type];

  return <Component {...props} />;
};
