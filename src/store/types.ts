import { INodeDescriptor, TNodeId, TNodeType } from '../nodes';

type TActionType = 'add-node' | 'remove-node';

export type TNodeStoreState = INodeDescriptor[];

interface IStoreAction<T extends TActionType, P> {
  payload: P;
  type: T;
}

type TAddNodePayload = TNodeType;
type TRemoveNodePayload = TNodeId;

export type TNodeStoreAction =
  | IStoreAction<'add-node', TAddNodePayload>
  | IStoreAction<'remove-node', TRemoveNodePayload>;

export interface INodeHandler {
  addNode: (payload: TAddNodePayload) => void;
  removeNode: (payload: TRemoveNodePayload) => void;
}

export type TNodeContext = INodeHandler & {
  nodes: TNodeStoreState;
};
