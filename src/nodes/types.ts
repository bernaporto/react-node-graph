export type TNodeType = 'add' | 'int' | 'output';
export type TNodeId = string;

export interface INodeConnection {
  type: 'input' | 'output';
  target: TNodeId;
}

export interface INodeDescriptor {
  connections: INodeConnection[];
  id: TNodeId;
  title: string;
  type: TNodeType;
  inConnectors?: string[];
  outConnectors?: string[];
}

export type TNodeFactory = () => INodeDescriptor;
