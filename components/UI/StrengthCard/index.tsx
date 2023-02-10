'use client';
// import Image from 'next/image';
import { View, Text, Image } from '../../Reshaped/Reshaped';
import { StrengthCardPropsType } from './types';

export default function StrengthCard({
  width,
  heading,
  icon,
  iconHeight,
  description,
}: StrengthCardPropsType) {
  return (
    <View
      direction={'column'}
      justify='center'
      align='center'
      padding={5}
      gap={5}
      width={width ? (width) : ('100%')}
      maxWidth={100}
      backgroundColor='elevated'
      borderColor='neutral-faded'
      borderRadius='medium'>
      <Text variant='title-3' color='neutral-faded'>
        {heading}
      </Text>
      <Image src={icon} height="100%" width="100%" alt={heading} />

      {description ? (
        <Text align={'center'} variant='body-medium-1' color='neutral-faded'>
          {description}
        </Text>
      ) : (
        <></>
      )}
    </View>
  );
}
