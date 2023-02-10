'use client';

import { View } from 'reshaped';
import CardWithItems from '../CardWithItems';
import workflows from './workflowData.json';

export default function Workflow() {
  return (
    <View direction='row' gap={12} align='stretch' justify={'center'}>
      {workflows.map((workflow, index) => (
        <CardWithItems
          cardNumber={index + 1}
          icon={workflow.icon}
          items={workflow.items}
          stepTitle={workflow.step}
          key={index}
        />
      ))}
    </View>
  );
}
