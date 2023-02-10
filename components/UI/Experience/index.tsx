'use client';

import { useState } from 'react';
import { Button, Overlay, Text, Timeline, View } from 'reshaped';
import ArrowDown from '../DownArrow';
import styles from './experience.module.css';

const AllExperiences = ({ ...props }) => {
  return (
    <Timeline>
      <View>
        <Text variant='body-strong-1' color='neutral'>
          Personal Coach
          <Text variant='caption-1'>Dechea</Text>
        </Text>
        <Text variant='body-1' color='primary'>
          Jan 2022 - Present
        </Text>
        <View paddingTop={4}>
          <Text variant='body-1' color='neutral-faded'>
            Training continuously my interpersonal skills. I'm doing part-time
            personal coaching to help others and get to know more personalities.
          </Text>
        </View>
      </View>

      <View>
        <Text variant='body-strong-1' color='neutral'>
          Personal Coach
        </Text>
        <Text variant='body-1' color='primary'>
          Jan 2022 - Present
        </Text>
        <View paddingTop={4}>
          <Text variant='body-1' color='neutral-faded'>
            Training continuously my interpersonal skills. I'm doing part-time
            personal coaching to help others and get to know more personalities.
          </Text>
        </View>
      </View>

      <View>
        <Text variant='body-strong-1' color='neutral'>
          Personal Coach
        </Text>
        <Text variant='body-1' color='primary'>
          Jan 2022 - Present
        </Text>
        <View paddingTop={4}>
          <Text variant='body-1' color='neutral-faded'>
            Training continuously my interpersonal skills. I'm doing part-time
            personal coaching to help others and get to know more personalities.
          </Text>
        </View>
      </View>
    </Timeline>
  );
};

export default function Experience() {
  const [expand, setExpand] = useState(false);

  return (
    <View>
      <Overlay
        position='bottom'
        fill={!expand}
        attributes={{ style: { padding: '40px 0 12px 12px' } }}
        scrimClassName={expand && styles.scrimOverlay}
        backgroundSlot={
          <View maxHeight={expand ? 'auto' : '143px'} overflow='hidden'>
            <AllExperiences />
          </View>
        }
      >
        {!expand && (
          <View paddingTop={10} justify='center' direction='row'>
            <Button onClick={() => setExpand(!expand)} endIcon={<ArrowDown />}>
              Experience
            </Button>
          </View>
        )}
      </Overlay>
    </View>
  );
}
