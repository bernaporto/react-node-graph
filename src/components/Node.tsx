import React, { FC } from 'react';
import { INodeDescriptor } from '../nodes';

type TNodeProps = Pick<INodeDescriptor, 'id' | 'title'>;

export const Node: FC<TNodeProps> = (props) => {
  const { title } = props;

  return <div>{title}</div>;
};
