import { Box, Flex, Image } from '@chakra-ui/react';
import React from 'react';

function Section3() {
  return (
    <Flex bgColor={'#F3FAFD'} pt="5">
      <Flex
        justifyContent={{ xl: 'space-between' }}
        flexDirection={{ base: 'column', lg: 'row', xl: 'row' }}
        w={{ base: '90%', lg: '86%', xl: '90%' }}
        margin={'auto'}
      >
        <Box
          minH="50vh"
          w={{ base: '100%', lg: '50%', xl: '45%' }}
          alignItems="center"
        >
          <Image
            h={'100%'}
            w="fit-content"
            objectFit="contain"
            src="/image/award-image-2-1.png"
            alt="Dan Abramov"
          />
        </Box>

        <Box minH="50vh" w={{ base: '100%', lg: '50%', xl: '45%' }}>
          <Box fontSize={'16px'} textColor="#0354C2" fontWeight={'bold'}>
            The Nation’s Best Intranet
          </Box>{' '}
          <br />
          <Box>
            We won Best Intranet at the Institute of Internal Communication
            (IoIC) Awards <br />
            2022 with NatWest Group. Oak Engage powers NatWest’s award-winning{' '}
            <br />
            platform and has transformed the way they communicate with their
            people. <br />
          </Box>{' '}
          <br />
          <Box textColor={'#219387'} fontWeight="bold">
            Find out more ›
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
}

export default Section3;
