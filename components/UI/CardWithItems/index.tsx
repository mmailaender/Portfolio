'use client';

import { Card, Text, View, Image } from 'reshaped';

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
        gap={12}
        backgroundColor='base'
        borderColor='neutral-faded'
        borderRadius='large'
        attributes={{ style: { minWidth: '322px' } }}
      >
        <View
          position='absolute'
          borderRadius='circular'
          padding={3}
          backgroundColor='base'
          textAlign='center'
          attributes={{
            style: {
              border: '4px solid var(--rs-color-background-page)',
              top: '-28px',
              left: '50%',
              transform: 'translateX(-50%)',
              height: '50px',
              width: '50px',
              boxSizing: 'border-box',
            },
          }}
        >
          <Text color='neutral-faded' variant='body-strong-1'>
            {cardNumber}
          </Text>
        </View>
        <View direction='column'>
          <View.Item gapBefore={9}>
            <Text variant='title-2' align='center'>
              {stepTitle}
            </Text>
          </View.Item>
        </View>
        <View direction='column'>
          <View direction='row' justify='center' align='center'>
            <View>
              <Image src={icon} alt='Customers' height='100%' width='100%' />
            </View>
          </View>
        </View>
        <View
          direction='column'
          align='stretch'
          justify='end'
          width='100%'
          height='100%'
        >
          <View
            borderRadius='medium'
            direction='row'
            align='end'
            width='100%'
            height='100%'
          >
            <Card padding={0} attributes={{ style: { width: '100%' } }}>
              <View
                direction='column'
                justify='end'
                gap={0.5}
                width='100%'
                height='100%'
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
        </View>
      </View>
    </>
  );
}
