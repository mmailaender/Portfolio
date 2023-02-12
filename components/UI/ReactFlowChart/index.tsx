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
    <>
      {heading && (
        <Text align={'center'} variant='featured-1'>
          {heading}
        </Text>
      )}

      <View
        height={155}
        paddingTop={10}
        direction='row'
        justify='center'
        align='center'
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
    </>
  );
}
