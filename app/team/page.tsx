'use client';
import Image from 'next/image';
import { Text, View, Avatar } from 'reshaped';
import ReactFlowChart from '@/components/UI/ReactFlowChart';
import { edges } from '../../__mocks__/edges';
import { nodes } from '../../__mocks__/nodes';
import styles from './page.module.css';

const userAvatars = [
  '/defaultAvatar.svg',
  '/defaultAvatar.svg',
  '/defaultAvatar.svg',
  '/defaultAvatar.svg',
];

export default function Home() {
  return (
    <View align='center' gap={2} direction='column' paddingTop={11}>
      <Image src='/upArrow.svg' height={104} width={104} alt='Up arrow' />
      <View paddingBottom={8} justify='center'>
        <Text className={styles.mainText} variant='body-medium-1'>
          We’ll Level-up
          <br /> your business
        </Text>
      </View>

      <View
        direction='row'
        borderRadius='circular'
        backgroundColor='base'
        padding={3}
        borderColor='neutral-faded'
        className={styles.userAvatar}
      >
        {userAvatars.map((avatar) => (
          <Avatar src={avatar} size={16} />
        ))}
      </View>
      <ReactFlowChart
        heading='Best in class JAMstack'
        nodes={nodes}
        edges={edges}
      />
    </View>
  );
}
