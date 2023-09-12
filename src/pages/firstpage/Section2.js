import { Box, Flex, Image } from '@chakra-ui/react';
import React from 'react';

function Section2() {
  return (
    <Flex mt={'80px'}>
      <Flex
        justifyContent={{ xl: 'space-between' }}
        flexDirection={{ base: 'column', lg: 'row', xl: 'row' }}
        w={{ base: '90%', lg: '86%', xl: '86%' }}
        margin={'auto'}
      >
        <Box minH="50vh" w={{ base: '100%', lg: '50%', xl: '50%' }}>
          <Box fontSize={'4xl'} textColor="#0354C2" fontWeight={'bold'}>
            A better way to mobilise, <br />
            motivate & engage <br />
            your people.
          </Box>
          <Box fontSize={'18'}>
            We’re Oak Engage. Our employee engagement and intranet solution{' '}
            <br />
            empowers you to reach every employee, every time.
          </Box>{' '}
          <br /> <br />
          <Box
            bgColor="#ADD9F0"
            borderRadius={'3xl'}
            h="12"
            w={{ base: '40%', lg: '86%', xl: '20%' }}
            justifyContent="center"
            display={'flex'}
            alignItems="center"
          >
            {' '}
            Get a Demo
          </Box>
        </Box>

        <Box minH="50vh" w={{ base: '100%', lg: '50%', xl: '50%' }}>
          <Image
            h={'100%'}
            w="fit-content"
            objectFit="contain"
            src="/image/Screenshot (2).png"
            alt="Dan Abramov"
          />
        </Box>
      </Flex>
    </Flex>
  );
}

export default Section2;
