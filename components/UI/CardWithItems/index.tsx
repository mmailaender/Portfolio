'use client';

import Image from 'next/image';
import { Card, Text, View } from 'reshaped';
import styles from './cardWithItems.module.css';

type CardWithItemsPropsType = {
  cardNumber: number | string;
  stepTitle: string;
  icon: string;
  items: { icon: string; title: string }[];
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
        gap={12}
        paddingTop={12}
        paddingBottom={3}
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
        <View paddingStart={3} paddingEnd={3}>
          <Text variant='title-2' align='center'>
            {stepTitle}
          </Text>
        </View>
        <View
          paddingTop={4}
          paddingBottom={4}
          direction='row'
          justify='center'
          align='center'
        >
          <Image src={icon} alt='Customers' height={172} width={197} />
        </View>
        <View
          paddingStart={3}
          paddingEnd={3}
          borderRadius='medium'
          direction='row'
          align='end'
          width='100%'
          height='100%'
        >
          <Card padding={0} className={styles.itemsCard}>
            <View
              direction='column'
              justify='end'
              className={styles.listItems}
              as='ul'
            >
              {items.map((item, itemIndex) => (
                <View
                  key={itemIndex}
                  as='li'
                  direction='row'
                  gap={3}
                  paddingTop={3}
                  paddingBottom={3}
                  paddingEnd={4}
                  paddingStart={4}
                  backgroundColor='neutral'
                >
                  <Image
                    src={item.icon}
                    height={20}
                    width={20}
                    alt={item.title}
                  />
                  <Text variant='body-strong-2'>{item.title}</Text>
                </View>
              ))}
            </View>
          </Card>
        </View>
      </View>
    </>
  );
}
