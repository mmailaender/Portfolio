import { Edge, MarkerType } from 'reactflow';

export const edges: Edge<any>[] = [
  {
    id: '4-1',
    source: '4',
    sourceHandle: 'a',
    target: '1',
    targetHandle: 'b',
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 30,
      height: 30,
    },
  },
  {
    id: '5-1',
    source: '5',
    sourceHandle: 'a',
    target: '1',
    targetHandle: 'b',
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 30,
      height: 30,
    },
  },
  {
    id: '4-2',
    source: '4',
    sourceHandle: 'a',
    target: '2',
    targetHandle: 'b',
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 30,
      height: 30,
    },
  },
  {
    id: '5-2',
    source: '5',
    sourceHandle: 'a',
    target: '2',
    targetHandle: 'b',
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 30,
      height: 30,
    },
  },
  {
    id: '4-3',
    source: '4',
    sourceHandle: 'a',
    target: '3',
    targetHandle: 'b',
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 30,
      height: 30,
    },
  },
  {
    id: '5-3',
    source: '5',
    sourceHandle: 'a',
    target: '3',
    targetHandle: 'b',
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 30,
      height: 30,
    },
  },
];
