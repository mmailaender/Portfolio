'use client';
import { Text, View, Avatar, Image } from 'reshaped';
import ReactFlowChart from '@/components/UI/ReactFlowChart';
import { edges } from '../../__mocks__/edges';
import { nodes } from '../../__mocks__/nodes';
import styles from './page.module.css';

const users = [
  { id: 1, avatar: '/defaultAvatar.svg' },
  { id: 1, avatar: '/defaultAvatar.svg' },
  { id: 1, avatar: '/defaultAvatar.svg' },
  { id: 1, avatar: '/defaultAvatar.svg' },
];

export default function Home() {
  return (
    <View align='center' gap={2} direction='column' paddingTop={11}>
      <View>
        <Image src='/upArrow.svg' height='100%' width='100%' alt='Up arrow' />
      </View>

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
        {users.map((user) => (
          <Avatar key={user.id} src={user.avatar} size={16} />
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
