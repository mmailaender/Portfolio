'use client';

import { Text, Timeline, View } from 'reshaped';
import experiences from './experienceData.json';

export default function ExperincesList() {
  return (
    <Timeline>
      {experiences.map((experience) => (
        <View key={experience.id} gap={4}>
          <View>
            <Text as='span' variant='body-strong-1' color='neutral'>
              {experience.role}
              {experience.company && (
                <Text
                  as='span'
                  variant='caption-1'
                  attributes={{
                    style: { fontStyle: 'italic', marginLeft: '5px' },
                  }}
                >
                  {experience.company}
                </Text>
              )}
            </Text>
            <Text variant='body-1' color='primary'>
              {experience.workingPeriod}
            </Text>
          </View>

          {(experience.description || experience.descriptionInItalicFont) && (
            <Text variant='body-1' color='neutral-faded'>
              {experience.descriptionInItalicFont && (
                <Text
                  attributes={{
                    style: { fontStyle: 'italic' },
                  }}
                >
                  {experience.descriptionInItalicFont}
                </Text>
              )}
              {experience.description}
            </Text>
          )}
        </View>
      ))}
    </Timeline>
  );
}
