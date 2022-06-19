import { INodeConfig, TNodeType } from './types';

export const nodeConfig: Record<TNodeType, INodeConfig> = {
  query: {
    ioType: 'input',
    label: 'Query',
    nodeType: 'query',
    max: 1,
  },
  retriever: {
    ioType: 'default',
    label: 'Retreiver',
    nodeType: 'retriever',
  },
  reader: {
    ioType: 'output',
    label: 'Reader',
    nodeType: 'reader',
  },
};
