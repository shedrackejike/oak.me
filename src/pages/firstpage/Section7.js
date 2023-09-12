import { Flex, Box, Image } from '@chakra-ui/react';
import React from 'react';

function Section7() {
  return (
    <Flex mt={'20'}>
      <Flex
        justifyContent={{ xl: 'space-between' }}
        flexDirection={{ base: 'column', lg: 'row', xl: 'row' }}
        w={{ base: '90%', lg: '86%', xl: '86%' }}
        margin={'auto'}
      >
        <Box minH="50vh" w={{ base: '100%', lg: '50%', xl: '45%' }}>
          <Box fontSize={'2xl'} fontWeight="bold" textColor={'#0354C2'}>
            Influence culture. Inspire action. Improve engagement.
          </Box>{' '}
          <br />
          <Box>
            We enable you to have productive dialogues with your employees.{' '}
            <br />
            Conversations that enrich, engage and encourage people to change{' '}
            <br />
            how they act.
          </Box>{' '}
          <br />
          <Box textColor={'#219387'} fontWeight="bold">
            Find out more ›
          </Box>
        </Box>
        <Box minH="50vh" w={{ base: '100%', lg: '50%', xl: '45%' }}>
          <Image
            h={'100%'}
            w="fit-content"
            objectFit="contain"
            src="/image/bh-quote-c1.png"
            alt="Dan Abramov"
          />
        </Box>
      </Flex>
    </Flex>
  );
}

export default Section7;
