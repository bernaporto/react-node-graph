export const nodeType = ['query', 'reader', 'retriever'] as const;
export type TNodeType = typeof nodeType[number];
export type TNodeIOType = 'default' | 'input' | 'output';

export interface INodeConfig {
  nodeType: TNodeType;
  ioType: TNodeIOType;
  label: string;
  max?: number;
}
