'use client';
import React from 'react';
import { View, Text } from '../../Reshaped/Reshaped';
import Image from 'next/image';

type CardType = {
  heading: string;
  path: any;
  description: any;
};
export default function CardComponent() {
  return (
    <View width='395px'>
      <View justify='center' align='center' paddingBottom={7}>
        <Text variant='title-3'>Heading </Text>
      </View>

      <View paddingBottom={11}>
        <Image src='/cardVisionary.svg' height={103} width={395} alt='Fauna' />
      </View>

      <View>
        <Text variant='body-medium-1'>
          I like it to visualize our progress and seeing it finished. Working
          with priorities, goals and continuous improvement of myself to achieve
          the higher goal.
        </Text>
      </View>
    </View>
  );
}
