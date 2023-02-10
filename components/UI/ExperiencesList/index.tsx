'use client';

import { Text, Timeline, View } from 'reshaped';
import experiences from './experienceData.json';
import styles from './experienceList.module.css';

export default function ExperincesList() {
  return (
    <Timeline>
      {experiences.map((experience, index) => (
        // TODO: Replace index as iterable
        <View key={index}>
          <Text as='span' variant='body-strong-1' color='neutral'>
            {experience.role}
            {experience.company && (
              <Text
                as='span'
                variant='caption-1'
                className={styles.companyText}
              >
                {experience.company}
              </Text>
            )}
          </Text>
          <Text variant='body-1' color='primary'>
            {experience.workingPeriod}
          </Text>

          {(experience.description || experience.descriptionInItalicFont) && (
            <View paddingTop={4}>
              <Text variant='body-1' color='neutral-faded'>
                {experience.descriptionInItalicFont && (
                  <Text className={styles.italicFont}>
                    {experience.descriptionInItalicFont}
                  </Text>
                )}
                {experience.description}
              </Text>
            </View>
          )}
        </View>
      ))}
    </Timeline>
  );
}
