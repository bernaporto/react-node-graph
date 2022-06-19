import { INodeDescriptor, TNodeId, TNodeType } from '../nodes';

type TActionType = 'add-node' | 'remove-node' | 'update-node';

export type TNodeStoreState = INodeDescriptor[];

interface IStoreAction<T extends TActionType, P> {
  payload: P;
  type: T;
}

type TAddNodePayload = TNodeType;
type TRemoveNodePayload = TNodeId;
type TUpdateNodePayload = {
  id: TNodeId;
  data: Partial<Omit<INodeDescriptor, 'id'>>;
};

export type TNodeStoreAction =
  | IStoreAction<'add-node', TAddNodePayload>
  | IStoreAction<'remove-node', TRemoveNodePayload>
  | IStoreAction<'update-node', TUpdateNodePayload>;

export interface INodeHandler {
  addNode: (payload: TAddNodePayload) => void;
  removeNode: (payload: TRemoveNodePayload) => void;
  updateNode: (payload: TUpdateNodePayload) => void;
}

export type TNodeContext = INodeHandler & {
  nodes: TNodeStoreState;
};
