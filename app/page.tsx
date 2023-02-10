'use client';
import Image from 'next/image';
import { Text, View } from 'reshaped';
import StrengthCard from '@/components/UI/StrengthCard';
import Experiences from '@/components/UI/Experiences';
import strengthCardData from '../components/UI/StrengthCard/strengthCardData.json';
import Workflow from '@/components/UI/Workflow';

export default function Home() {
  return (
    <View>
      <View>
        <View
          gap={4}
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
              <Text>Develop, secure and scale your</Text>
              <View direction='row' justify='center'>
                <Text>software.</Text>
                <Text color='primary' as='span'>
                  Be independent
                </Text>
              </View>
            </Text>
          </View>

          <View paddingTop={3}>
            <Text variant='featured-2' color='neutral-faded'>
              <Text>
                I help you get through the jungle of tools & processes to make
              </Text>
              <View direction='row' justify='center'>
                <Text>software development easy for you.</Text>
              </View>
            </Text>
          </View>
        </View>
        <View>
          <View paddingTop={50} direction='row' justify='center'>
            <Workflow />
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
            <Text variant='body-medium-1' color='neutral'>
              <Text>
                Creator, mentor, tech-lover and philanthropist. Mike is
                passionate about helping people become the best version of
                themself in order to make a positive impact on our world. He
                believes that great tech products help support that mission.
              </Text>
              <br />
              <Text>
                He is currently helping Fauna enable thousands of developer to
                become more easily software creator by simplifying development,
                security and scaling at backend level.
              </Text>
            </Text>
          </View>
          <Experiences />
        </View>

        <View align='center' direction='column' paddingTop={18}>
          <View justify='center' paddingBottom={13}>
            <Text variant='title-3'>Strengths</Text>
          </View>
          <View direction='row' justify='center'>
            <View>
              {strengthCardData.map((cardData) => (
                <StrengthCard
                  width={395}
                  heading={cardData.heading}
                  icon={cardData.icon}
                  iconHeight={cardData.iconHeight}
                  description={cardData.description}
                />
              ))}
            </View>

            <View>
              <StrengthCard
                width={395}
                heading='Knowledge Hunger'
                icon='/cardKnowledge.svg'
                iconHeight={589}
                description=''
              />
            </View>

            <View>
              <StrengthCard
                width={395}
                heading='Performance'
                icon='/cardPerformance.svg'
                iconHeight={123}
                description='Being productive gives me immense satisfaction. I’m loving to achieve. Working with the best is activating my full passion.'
              />
              <StrengthCard
                width={395}
                heading='Synergies'
                icon='/cardSynergies.svg'
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
