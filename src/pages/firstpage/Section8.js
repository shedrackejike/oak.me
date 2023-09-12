import { Box, Flex, Image } from '@chakra-ui/react';
import React from 'react';

function Section8() {
  return (
    <Flex>
      <Box margin={'auto'} h={'50vh'} mt="8">
        <Box
          minH="50vh"
          w={{ base: '100%', lg: '50%', xl: '90%' }}
          margin="auto"
        >
          <Image
            h={'100%'}
            w="fit-content"
            objectFit="contain"
            src="/image/Screenshot (7).png"
            alt="Dan Abramov"
          />
        </Box>
      </Box>
    </Flex>
  );
}

export default Section8;
