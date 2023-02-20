'use client';
import { Text, View, Image } from 'reshaped';
import StrengthCard from '@/components/UI/StrengthCard';
import Experiences from '@/components/UI/Experiences';
import strengthCardData from '../components/UI/StrengthCard/strengthCardData.json';
import Workflow from '@/components/UI/Workflow';
import ReactFlowChart from '@/components/UI/ReactFlowChart';
import { nodes } from '@/__mocks__/nodes';
import { edges } from '@/__mocks__/edges';

export default function Home() {
  return (
    <View gap={20} backgroundColor='page'>
      <View padding={5} gap={{ s: 20, l: 40 }}>
        <View align='center' direction='column' gap={3}>
          <View
            gap={4}
            direction='row'
            align='center'
            justify='center'
            padding={5}
          >
            <View width='48px'>
              <Image
                src='./mikeAvatar.svg'
                height='100%'
                width='100%'
                alt='Mike'
              />
            </View>

            <Text variant='featured-3' color='neutral-faded'>
              Mike
            </Text>
          </View>

          <View direction={'row'} justify='center'>
            <View.Item columns={{ s: 12, xl: 8 }}>
              <Text variant='display-2' align={'center'}>
                Develop, secure and scale your software.&nbsp;
                <Text color='primary' as='span'>
                  Be a creator
                </Text>
              </Text>
            </View.Item>
          </View>

          <Text variant='featured-2' color='neutral-faded' align={'center'}>
            I help you get through the jungle of tools & processes to make
            software development easy for you.
          </Text>
        </View>

        <View direction='row' justify='center'>
          <Workflow />
        </View>

        <View>
          <ReactFlowChart
            heading='Best in class JAMstack'
            edges={edges}
            nodes={nodes}
          />
        </View>
      </View>

      <View
        align='center'
        gap={21}
        padding={5}
        direction='column'
        backgroundColor='base'
      >
        <View
          width={{ s: '649px', m: '649px', l: '649px', xl: '649px' }}
          direction='column'
          gap={5}
        >
          <View.Item gapBefore={21}>
            <View direction='row' align='center' gap={6}>
              <View>
                <Image
                  width='100%'
                  height='100%'
                  src='./mikeAvatar.svg'
                  alt='Mike'
                />
              </View>

              <View>
                <Text variant='title-3' color='neutral'>
                  Mike
                </Text>
                <Text variant='body-medium-1' color='neutral-faded'>
                  CEO & Co-Founder, Personal Coach
                </Text>
              </View>
            </View>
          </View.Item>

          <Text variant='body-medium-1' color='neutral'>
            Creator, mentor, tech-lover and philanthropist. Mike is passionate
            about helping people become the best version of themself in order to
            make a positive impact on our world. He believes that great tech
            products help support that mission.
          </Text>

          <Experiences />
        </View>

        <View align='center' direction='column' gap={13}>
          <Text variant='title-3'>Strengths</Text>
          <View direction='row' justify='center' gap={5}>
            <View gap={5}>
              {strengthCardData.map((cardData) => (
                <StrengthCard
                  key={cardData.id}
                  heading={cardData.heading}
                  icon={cardData.icon}
                  iconHeight={cardData.iconHeight}
                  description={cardData.description}
                />
              ))}
            </View>

            <View>
              <StrengthCard
                heading='Knowledge Hunger'
                icon='/cardKnowledge.svg'
                iconHeight={147}
                description=''
              />
            </View>

            <View gap={5}>
              <StrengthCard
                heading='Performance'
                icon='/cardPerformance.svg'
                iconHeight={30}
                description="Being productive gives me immense satisfaction. I'm loving to achieve. Working with the best is activating my full passion."
              />
              <StrengthCard
                heading='Synergies'
                icon='/cardSynergies.svg'
                iconHeight={30}
                description='True strength can be only reached by combining people & companies that are seeking the same goals.'
              />
            </View>
          </View>
          <View />
        </View>
      </View>
    </View>
  );
}
