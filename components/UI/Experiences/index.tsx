'use client';

import { useState } from 'react';
import { Button, Overlay, View } from 'reshaped';
import ArrowDown from '../DownArrow';
import ExperincesList from '../ExperiencesList';
import styles from './experience.module.css';

export default function Experiences() {
  const [expand, setExpand] = useState(false);

  return (
    <View>
      <Overlay
        position='bottom'
        fill={!expand}
        className={styles.overlay}
        scrimClassName={expand && styles.scrimOverlay}
        backgroundSlot={
          <View
            className={expand && styles.experienceList}
            maxHeight={expand ? 'auto' : '143px'}
            overflow='hidden'
          >
            <ExperincesList />
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
