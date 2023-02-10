'use client';
import CardComponent from '@/components/UI/CardComponent';
import Experience from '@/components/UI/Experience';
import Image from 'next/image';
import { Text, View } from 'reshaped';

const content = [
  'Creator, mentor, tech-lover and philanthropist. Mike is passionate about helping people become the best version of themself in order to make a positive impact on our world. He believes that great tech products help support that mission.',
  'He is currently helping Fauna enable thousands of developer to become more easily software creator by simplifying development, security and scaling at backend level.',
];

const Icon = ({ children, attributes }: any) => (
  <View
    attributes={attributes}
    padding={2}
    borderRadius={'circular'}
    backgroundColor='base'
  >
    {children}
  </View>
);

export default function Home() {
  return (
    <View>
      {/* <View align='center' paddingTop={24} direction='column'>
        <View justify='center'>
          <Text variant='display-2'>
            Develop, secure and scale your
            <br />
            software
            <br /> Be independent
          </Text>
        </View>
      </View> */}

      <View align='center' paddingTop={20} gap={12} direction='column'>
        <View maxWidth='649px'>
          <View direction='row' align='center' paddingBottom={12}>
            <View paddingEnd={6}>
              <Image width={80} height={80} src='./mike.svg' alt='emoji' />
            </View>

            <View.Item>
              <Text variant='title-3' color='neutral'>
                Mike
              </Text>
              <Text variant='body-medium-1' color='neutral-faded'>
                CEO & Co-Founder, Personal Coach
              </Text>
            </View.Item>
          </View>

          <View>
            <Text variant='body-medium-1'>
              {content[0]}
              <br />
              <br />
              {content[1]}
            </Text>
          </View>
          <Experience />
        </View>
        <CardComponent />
      </View>
    </View>
  );
}
