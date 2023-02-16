'use client';
import ReactFlow, { SmoothStepEdge, Viewport } from 'reactflow';
import { View, Text } from '../../Reshaped/Reshaped';
import ChartCard from '../ChartCard';
import { ReactFlowChartPropType } from './types';
import './reactFlowChart.css';

export default function ReactFlowChart({
  heading,
  nodes,
  edges,
}: ReactFlowChartPropType) {
  return (
    <View gap={10}>
      {heading && (
        <Text align={'center'} variant='featured-1'>
          {heading}
        </Text>
      )}

      <View
        direction='row'
        justify='center'
        align='center'
        height={{ s: 80, m: 120, l: 130, xl: 175 }}
      >
        <ReactFlow
          nodes={nodes}
          edges={edges}
          nodeTypes={{ chartCard: ChartCard }}
          edgeTypes={{ default: SmoothStepEdge }}
          nodesDraggable={false}
          nodesConnectable={false}
          edgesFocusable={false}
          panOnDrag={false}
          zoomOnScroll={false}
          zoomOnPinch={false}
          zoomOnDoubleClick={false}
          selectNodesOnDrag={false}
          connectOnClick={false}
          fitView={true}
          preventScrolling={false}
          proOptions={{ hideAttribution: true }}
        />
      </View>
    </View>
  );
}
