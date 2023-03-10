'use client';
// import { useState } from 'react';
import { Handle, Position, ReactFlowProvider } from 'reactflow';
import {
  View,
  Text,
  Popover,
  // Timeline,
  Actionable,
  Image,
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
  // const [parentPopoverProps, setParentPopoverProps] = useState<{
  //   active?: boolean;
  // }>({});
  // const hoverDetails = data.hoverDetails;

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

      {/* <Popover triggerType='hover' {...parentPopoverProps}>
        <Popover.Trigger> */}
      {/* {(attributes) => (
            <Actionable attributes={attributes}> */}
      <View
        backgroundColor='page'
        borderColor='neutral-faded'
        borderRadius={'medium'}
        direction='row'
        attributes={{ style: { minWidth: '325px' } }}
        padding={4}
        className={styles.detailContainer}
        gap={4}
      >
        <View direction='column' align='start' width={{ s: '48px' }}>
          <Image
            src={data.logo}
            height='100%'
            width='100%'
            alt={data.toolName}
          />
        </View>

        <View gap={6} direction='column' align='start'>
          <View direction='column'>
            <Text color='primary' variant='caption-2'>
              {data.toolType}
            </Text>
            <Text>{data.toolName}</Text>
          </View>

          <View direction='row' gap={2}>
            {data.relatedLogos.map((logo) => (
              <Popover
                triggerType='hover'
                key={logo.id}
                // onOpen={() => setParentPopoverProps({ active: false })}
                // onClose={() => setParentPopoverProps({})}
              >
                <Popover.Trigger>
                  {(attributes) => (
                    <Actionable attributes={attributes}>
                      <Icon attributes={attributes}>
                        <View width={{ s: '20px' }}>
                          <Image
                            src={logo.logo}
                            height='100%'
                            width='100%'
                            alt={logo.title}
                          />
                        </View>
                      </Icon>
                    </Actionable>
                  )}
                </Popover.Trigger>
                <Popover.Content>
                  <View gap={3}>
                    <Text color='primary' variant='body-strong-2'>
                      {logo.category}
                    </Text>

                    <View gap={3}>
                      <View direction='row' align={'center'} gap={2}>
                        <View width={{ s: '32px' }}>
                          <Image
                            src={logo.logo}
                            height='100%'
                            width='100%'
                            alt={logo.title}
                          />
                        </View>

                        <Text variant='body-strong-1'>{logo.title}</Text>
                      </View>

                      <View width='250px'>
                        <Text variant='caption-1'>{logo.description}</Text>
                      </View>
                    </View>
                  </View>
                </Popover.Content>
              </Popover>
            ))}
          </View>
        </View>
      </View>
      {/* </Actionable>
          )} */}
      {/* </Popover.Trigger> */}

      {/* <Popover.Content>
          <View width='282px'>
            <View paddingBottom={3}>
              <Text color='primary' variant='body-strong-2'>
                {hoverDetails.title}
              </Text>
            </View>
            <View>
              <Timeline>
                {hoverDetails.items.map((item) => (
                  <Timeline.Item key={item.id}>
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
                          <View>
                            4
                            <Image
                              src={item.logo}
                              height='100%'
                              width='100%'
                              alt={item.title}
                            />
                          </View>
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
                          <View>
                            5
                            <Image
                              src='/star.svg'
                              height='100%'
                              width='100%'
                              alt='Star'
                            />
                          </View>
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
        </Popover.Content> */}
      {/* </Popover> */}
    </div>
  );
}
