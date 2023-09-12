import { Box, Flex, Image } from '@chakra-ui/react';
import React from 'react';

function Section4() {
  return (
    <Flex>
      <Box
        flexDirection={{ base: 'column', lg: 'row', xl: 'row' }}
        w={{ base: '90%', lg: '86%', xl: '86%' }}
        margin={'auto'}
      >
        <Box
          textAlign={'center'}
          fontSize={'2xl'}
          fontWeight="bold"
          textColor={'#0354C2'}
          mt="10"
        >
          Trusted by the world's biggest brands
        </Box>{' '}
        <br />
        <Box textAlign={'center'}>
          Millions of interactions and personalised feeds delivered everyday
          from employees across the globe.
        </Box>{' '}
        <br />
        <Box>
          <Image
            h={'100%'}
            w="fit-content"
            objectFit="contain"
            src="/image/logos-main-1-2.png"
            alt="Dan Abramov"
          />
        </Box>
      </Box>
    </Flex>
  );
}

export default Section4;
