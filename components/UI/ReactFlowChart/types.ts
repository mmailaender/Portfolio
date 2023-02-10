import { Edge } from 'reactflow';

export type ReactFlowChartPropType = {
  heading: string;
  nodes: any;
  edges: Edge<any>[];
};
