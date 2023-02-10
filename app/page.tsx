'use client';
import CardComponent from '@/components/UI/CardComponent';
import Experience from '@/components/UI/Experiences';
import Image from 'next/image';
import { Text, View } from 'reshaped';

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
      <View>
        <View
          gap={2}
          direction='row'
          align='center'
          justify='center'
          paddingTop={18}
        >
          <Image width={48} height={48} src='./mikeAvatar.svg' alt='emoji' />
          <Text variant='featured-3' color='neutral-faded'>
            Mike
          </Text>
        </View>

        <View align='center' paddingTop={12} direction='column'>
          <View>
            <Text variant='display-2'>
              Develop, secure and scale your
              <br />
              <View direction='row' justify='center'>
                software.
                <Text color='primary' as='span'>
                  Be independent
                </Text>
              </View>
            </Text>
          </View>

          <View paddingTop={3}>
            <Text variant='featured-2' color='neutral-faded'>
              I help you get through the jungle of tools & processes to make
              <br />
              <View direction='row' justify='center'>
                software development easy for you.
              </View>
            </Text>
          </View>
        </View>
      </View>
      <View align='center' paddingTop={20} gap={12} direction='column'>
        <View maxWidth='649px'>
          <View direction='row' align='center' paddingBottom={12}>
            <View paddingEnd={6}>
              <Image
                width={80}
                height={80}
                src='./mikeAvatar.svg'
                alt='emoji'
              />
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
              Creator, mentor, tech-lover and philanthropist. Mike is passionate
              about helping people become the best version of themself in order
              to make a positive impact on our world. He believes that great
              tech products help support that mission.
              <br />
              <br />
              He is currently helping Fauna enable thousands of developer to
              become more easily software creator by simplifying development,
              security and scaling at backend level.
            </Text>
          </View>
          <Experience />
        </View>

        <View align='center' direction='column' paddingTop={18}>
          <View justify='center' paddingBottom={13}>
            <Text variant='title-3'>Strengths</Text>
          </View>
          <View direction='row' justify='center'>
            <View>
              <CardComponent
                heading='Visionary'
                imagePath='/cardVisionary.svg'
                iconHeight={143}
                description='I’m excited to think about the future and create a strategy to reach it.'
              />
              <CardComponent
                heading='Focused'
                imagePath='/cardFocused.svg'
                iconHeight={103}
                description='I like it to visualize our progress and seeing it finished. Working
            with priorities, goals and continuous improvement of myself to
            achieve the higher goal.'
              />
            </View>

            <View>
              <CardComponent
                heading='Knowledge Hunger'
                imagePath='/cardKnowledge.svg'
                iconHeight={589}
                description=''
              />
            </View>

            <View>
              <CardComponent
                heading='Performance'
                imagePath='/cardPerformance.svg'
                iconHeight={123}
                description='Being productive gives me immense satisfaction. I’m loving to achieve. Working with the best is activating my full passion.'
              />
              <CardComponent
                heading='Synergies'
                imagePath='/cardSynergies.svg'
                iconHeight={123}
                description='True strength can be only reached by combining people & companies that are seeking the same goals.'
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
