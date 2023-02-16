'use client';

import { Card, Text, View, Image } from 'reshaped';
import styles from './cardWithItems.module.css';

type CardWithItemsPropsType = {
  cardNumber: number | string;
  stepTitle: string;
  icon: string;
  items: { icon: string; title: string; id: number | string }[];
};

export default function CardWithItems({
  cardNumber,
  stepTitle,
  icon,
  items,
}: CardWithItemsPropsType) {
  return (
    <>
      <View
        direction='column'
        padding={3}
        // gap={12}
        // paddingTop={12}
        // paddingBottom={3}
        backgroundColor='base'
        borderColor='neutral-faded'
        borderRadius='large'
        width='322px'
      >
        <View
          position='absolute'
          borderRadius='circular'
          padding={3}
          backgroundColor='base'
          className={styles.cardCountContainer}
          textAlign='center'
        >
          <Text color='neutral-faded' variant='body-strong-1'>
            {cardNumber}
          </Text>
        </View>
        <View>
          <View direction='column'>
            <View.Item gapBefore={9}>
              <Text variant='title-2' align='center'>
                {stepTitle}
              </Text>
            </View.Item>
          </View>
        </View>
        <View>
          <View direction='column'>
            <View.Item gapBefore={3}>
              <View direction='row' justify='center' align='center'>
                <View>
                  <Image
                    src={icon}
                    alt='Customers'
                    height='100%'
                    width='100%'
                  />
                </View>
              </View>
            </View.Item>
          </View>
        </View>
        <View
          direction='column'
          align='stretch'
          justify='end'
          width='100%'
          height='100%'
        >
          <View.Item gapBefore={3}>
            <View
              borderRadius='medium'
              direction='row'
              align='end'
              width='100%'
              height='100%'
            >
              <Card padding={0}>
                <View
                  direction='column'
                  justify='end'
                  gap={0.2}
                  width='100%'
                  height='100%'
                  // align='stretch'
                >
                  {items.map((item) => (
                    <View
                      key={item.id}
                      direction='row'
                      gap={3}
                      padding={3}
                      backgroundColor='neutral'
                    >
                      <View>
                        <Image
                          src={item.icon}
                          alt={item.title}
                          height='100%'
                          width='100%'
                        />
                      </View>
                      <Text variant='body-strong-2'>{item.title}</Text>
                    </View>
                  ))}
                </View>
              </Card>
            </View>
          </View.Item>
        </View>
      </View>
    </>
  );
}
