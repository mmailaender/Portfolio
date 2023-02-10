'use client';
import React from 'react';
import ReactFlow, { SmoothStepEdge, Edge } from 'reactflow';
import { View, Text } from '../../Reshaped/Reshaped';
import styles from '../../../app/page.module.css';
import ChartCard from '../ChartCard';

type ReactFlowType = {
  heading: string;
  nodes: any;
  edges: Edge<any>[];
};
export default function ReactFlowChart({
  heading,
  nodes,
  edges,
}: ReactFlowType) {
  return (
    <>
      {heading && (
        <View paddingTop={53}>
          <Text variant='featured-1' className={styles.subText}>
            {heading}
          </Text>
        </View>
      )}

      <View
        height={155}
        paddingTop={26.75}
        width='100%'
        justify='center'
        align='center'
      >
        <View width='1200px' height='100%'>
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
            proOptions={{ hideAttribution: true }}
          />
        </View>
      </View>
    </>
  );
}
