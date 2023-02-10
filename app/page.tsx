'use client';
import Image from 'next/image';
import { Text, View, Avatar } from 'reshaped';
import styles from './page.module.css';
import { Edge, MarkerType } from 'reactflow';
import 'reactflow/dist/style.css';
import ReactFlowChart from '@/components/UI/ReactFlowChart';

const edges: Edge<any>[] = [
  {
    id: '4-1',
    source: '4',
    sourceHandle: 'a',
    target: '1',
    targetHandle: 'b',
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 30,
      height: 30,
    },
  },
  {
    id: '5-1',
    source: '5',
    sourceHandle: 'a',
    target: '1',
    targetHandle: 'b',
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 30,
      height: 30,
    },
  },
  {
    id: '4-2',
    source: '4',
    sourceHandle: 'a',
    target: '2',
    targetHandle: 'b',
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 30,
      height: 30,
    },
  },
  {
    id: '5-2',
    source: '5',
    sourceHandle: 'a',
    target: '2',
    targetHandle: 'b',
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 30,
      height: 30,
    },
  },
  {
    id: '4-3',
    source: '4',
    sourceHandle: 'a',
    target: '3',
    targetHandle: 'b',
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 30,
      height: 30,
    },
  },
  {
    id: '5-3',
    source: '5',
    sourceHandle: 'a',
    target: '3',
    targetHandle: 'b',
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 30,
      height: 30,
    },
  },
];

const nodes = [
  {
    id: '1',
    data: {
      logo: '/vercelIcon.svg',
      toolType: 'FRONTEND',
      toolName: 'Vercel',
      relatedLogos: [
        { logo: '/devCycle.svg', title: 'DevCycle' },
        { logo: '/doppler.svg', title: 'Doppler' },
        { logo: '/clerk.svg', title: 'Clerk' },
        { logo: '/beagle.svg', title: 'Beagle Security' },
      ],
      hoverDetails: {
        title: 'DATABASE',
        items: [
          {
            logo: '/fauna.svg',
            title: 'Fauna',
            ranking: 4,
            description:
              ' Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          },
          {
            logo: '/github.svg',
            title: 'Github',
            ranking: 4,
            description:
              ' Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          },
          {
            logo: '/vercelIcon.svg',
            title: 'Vercel',
            ranking: 4,
            description:
              ' Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          },
          {
            logo: '/beagle.svg',
            title: 'Beagle',
            ranking: 4,
            description:
              ' Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          },
        ],
      },
    },
    position: { x: 50, y: 0 },
    type: 'chartCard',
  },
  {
    id: '2',
    data: {
      logo: '/workers.svg',
      toolType: 'FUNCTIONS',
      toolName: 'Workers',
      relatedLogos: [
        { logo: '/doppler.svg', title: 'Doppler' },
        { logo: '/clerk.svg', title: 'Clerk' },
        { logo: '/beagle.svg', title: 'Beagle Security' },
      ],
      hoverDetails: {
        title: 'Database',
        items: [
          {
            logo: '/fauna.svg',
            title: 'Fauna',
            ranking: 4,
            description:
              ' Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          },
          {
            logo: '/github.svg',
            title: 'Github',
            ranking: 4,
            description:
              ' Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          },
          {
            logo: '/vercelIcon.svg',
            title: 'Vercel',
            ranking: 4,
            description:
              ' Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          },
          {
            logo: '/beagle.svg',
            title: 'Beagle',
            ranking: 4,
            description:
              ' Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          },
        ],
      },
    },
    position: { x: 450, y: 0 },
    type: 'chartCard',
  },
  {
    id: '3',
    data: {
      logo: '/fauna.svg',
      toolType: 'DATABASE',
      toolName: 'Fauna',
      relatedLogos: [
        { logo: '/meiliSearch.svg', title: 'MeiliSearch' },
        { logo: '/vertex.svg', title: 'Vertex' },
        { logo: '/clerk.svg', title: 'Clerk' },
        { logo: '/beagle.svg', title: 'Beagle Security' },
      ],
      hoverDetails: {
        title: 'Database',
        items: [
          {
            logo: '/fauna.svg',
            title: 'Fauna',
            ranking: 4,
            description:
              ' Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          },
          {
            logo: '/github.svg',
            title: 'Github',
            ranking: 4,
            description:
              ' Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          },
          {
            logo: '/vercelIcon.svg',
            title: 'Vercel',
            ranking: 4,
            description:
              ' Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          },
          {
            logo: '/beagle.svg',
            title: 'Beagle',
            ranking: 4,
            description:
              ' Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          },
        ],
      },
    },
    position: { x: 850, y: 0 },
    type: 'chartCard',
  },
  {
    id: '4',
    data: {
      logo: '/github.svg',
      toolType: 'CODE REPOSITORY',
      toolName: 'GitHub',
      relatedLogos: [
        { logo: '/sonarCloud.svg', title: 'SonarCloud' },
        { logo: '/doppler.svg', title: 'Doppler' },
      ],
      hoverDetails: {
        title: 'Database',
        items: [
          {
            logo: '/fauna.svg',
            title: 'Fauna',
            ranking: 4,
            description:
              ' Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          },
          {
            logo: '/github.svg',
            title: 'Github',
            ranking: 4,
            description:
              ' Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          },
          {
            logo: '/vercelIcon.svg',
            title: 'Vercel',
            ranking: 4,
            description:
              ' Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          },
          {
            logo: '/beagle.svg',
            title: 'Beagle',
            ranking: 4,
            description:
              ' Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          },
        ],
      },
    },
    position: { x: 150, y: 300 },
    type: 'chartCard',
  },
  {
    id: '5',
    data: {
      logo: '/bit.svg',
      toolType: 'COMPONENTS',
      toolName: 'Bit',
      relatedLogos: [
        { logo: '/figma.svg', title: 'Figma' },
        { logo: '/plasmic.svg', title: 'Plasmic' },
      ],
      hoverDetails: {
        title: 'Database',
        items: [
          {
            logo: '/fauna.svg',
            title: 'Fauna',
            ranking: 4,
            description:
              ' Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          },
          {
            logo: '/github.svg',
            title: 'Github',
            ranking: 4,
            description:
              ' Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          },
          {
            logo: '/vercelIcon.svg',
            title: 'Vercel',
            ranking: 4,
            description:
              ' Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          },
          {
            logo: '/beagle.svg',
            title: 'Beagle',
            ranking: 4,
            description:
              ' Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          },
        ],
      },
    },
    position: { x: 750, y: 300 },
    type: 'chartCard',
  },
];

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
