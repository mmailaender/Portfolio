'use client';
import { useState } from 'react';
import Image from 'next/image';
import { Handle, Position, ReactFlowProvider } from 'reactflow';
import {
  View,
  Text,
  Popover,
  Timeline,
  Actionable,
} from '../../Reshaped/Reshaped';
import { ChartCardPropsType } from './types';
import styles from './chartCard.module.css';

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

export default function ChartCard({ data }: ChartCardPropsType) {
  const [parentPopoverProps, setParentPopoverProps] = useState<{
    active?: boolean;
  }>({});
  const hoverDetails = data.hoverDetails;

  return (
    <div>
      <ReactFlowProvider>
        <Handle
          type='target'
          position={Position.Top}
          id='a'
          style={{ visibility: 'hidden' }}
        />
        <Handle
          type='target'
          position={Position.Bottom}
          id='b'
          style={{ visibility: 'hidden' }}
        />
        <Handle
          type='source'
          position={Position.Top}
          id='a'
          style={{ visibility: 'hidden' }}
        />
        <Handle
          type='source'
          position={Position.Bottom}
          id='b'
          style={{ visibility: 'hidden' }}
        />
      </ReactFlowProvider>

      <Popover triggerType='hover' {...parentPopoverProps}>
        <Popover.Trigger>
          {(attributes) => (
            <Actionable attributes={attributes}>
              <View
                backgroundColor='page'
                borderColor='neutral-faded'
                borderRadius={'medium'}
                direction='column'
                width='325px'
                padding={4}
                className={styles.detailContainer}
              >
                <View direction='row' align='center' gap={4}>
                  <Image
                    src={data.logo}
                    height={48}
                    width={48}
                    alt={data.toolName}
                  />

                  <View direction='column'>
                    <Text color='primary' variant='caption-2'>
                      {data.toolType}
                    </Text>
                    <Text>{data.toolName}</Text>
                  </View>
                </View>
                <View
                  paddingTop={3}
                  paddingStart={15}
                  paddingEnd={10}
                  gap={2}
                  direction='row'
                  align={'center'}
                >
                  {data.relatedLogos.map((logo, index) => (
                    // TODO: Replace index as iterable
                    <Popover
                      triggerType='hover'
                      key={index}
                      onOpen={() => setParentPopoverProps({ active: false })}
                      onClose={() => setParentPopoverProps({})}
                    >
                      <Popover.Trigger>
                        {(attributes) => (
                          <Actionable attributes={attributes}>
                            <Icon attributes={attributes}>
                              <Image
                                src={logo.logo}
                                height={20}
                                width={20}
                                alt={logo.title}
                              />
                            </Icon>
                          </Actionable>
                        )}
                      </Popover.Trigger>
                      <Popover.Content>
                        <View paddingBottom={3}>
                          <Text color='primary' variant='body-strong-2'>
                            DATABASE
                          </Text>
                        </View>
                        <View width='250px'>
                          <View>
                            <View direction='row' align={'center'} gap={2}>
                              <Image
                                src='/fauna.svg'
                                height={32}
                                width={32}
                                alt='Fauna'
                              />
                              <View>
                                <Text variant='body-strong-1'>Fauna</Text>
                              </View>
                            </View>
                          </View>
                          <View paddingTop={3}>
                            <Text variant='caption-1'>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry.
                            </Text>
                          </View>
                        </View>
                      </Popover.Content>
                    </Popover>
                  ))}
                </View>
              </View>
            </Actionable>
          )}
        </Popover.Trigger>

        <Popover.Content>
          <View width='282px'>
            <View paddingBottom={3}>
              <Text color='primary' variant='body-strong-2'>
                {hoverDetails.title}
              </Text>
            </View>
            <View>
              <Timeline>
                {hoverDetails.items.map((item, index) => (
                  // TODO: Replace index as iterable
                  <Timeline.Item key={index}>
                    <View
                      direction='row'
                      align={'center'}
                      justify='start'
                      paddingEnd={5}
                      paddingBottom={5}
                    >
                      <View.Item columns={8}>
                        <View
                          direction='row'
                          align={'center'}
                          gap={2}
                          paddingStart={0}
                        >
                          <Image
                            src={item.logo}
                            height={28}
                            width={25}
                            alt={item.title}
                          />
                          <View>
                            <Text variant='body-strong-1'>{item.title}</Text>
                          </View>{' '}
                        </View>
                      </View.Item>

                      <View.Item columns={4}>
                        <View
                          direction='row'
                          align={'center'}
                          justify='end'
                          paddingStart={0}
                          gap={2}
                        >
                          <Image
                            src='/star.svg'
                            height={16}
                            width={16}
                            alt='Star'
                          />

                          <Text variant='body-2'>{item.ranking}</Text>
                        </View>
                      </View.Item>

                      <View.Item columns={12}>
                        <View paddingTop={3}>
                          <Text variant='caption-1'>{item.description}</Text>
                        </View>
                      </View.Item>
                    </View>
                  </Timeline.Item>
                ))}
              </Timeline>
            </View>
          </View>
        </Popover.Content>
      </Popover>
    </div>
  );
}
