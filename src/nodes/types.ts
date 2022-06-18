export type TNodeType = 'add' | 'output';
export type TNodeId = string;

export interface INodeDescriptor {
  connections: TNodeId[];
  id: TNodeId;
  process: VoidFunction;
  title: string;
  type: TNodeType;
}

export type TNodeFactory = () => INodeDescriptor;
