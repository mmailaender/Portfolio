'use client';
import Image from 'next/image';
import { View, Text } from '../../Reshaped/Reshaped';
import { StrengthCardPropsType } from './types';

export default function StrengthCard({
  width,
  heading,
  icon,
  iconHeight,
  description,
}: StrengthCardPropsType) {
  return (
    <View paddingBottom={5} paddingEnd={5}>
      <View
        width={`${width}px`}
        backgroundColor='elevated'
        borderColor='neutral-faded'
        borderRadius='medium'
      >
        <View justify='center' align='center' paddingTop={6} paddingBottom={4}>
          <Text variant='title-3' color='neutral-faded'>
            {heading}
          </Text>
        </View>

        <View paddingBottom={3}>
          <Image src={icon} height={iconHeight} width={395} alt={heading} />
        </View>

        {description ? (
          <View padding={8}>
            <Text variant='body-medium-1' color='neutral-faded'>
              {description}
            </Text>
          </View>
        ) : (
          <View paddingBottom={8} />
        )}
      </View>
    </View>
  );
}
