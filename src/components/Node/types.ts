import { INodeDescriptor } from '../../nodes';

export type TNodeProps = INodeDescriptor & {
  removeNode: VoidFunction;
};
