import { Flex, Box, Text, Image } from '@chakra-ui/react';
import React from 'react';

function Customer() {
  return (
    <Flex mt={'80px'}>
      <Box minH={'100vh'} w={'100%'}>
        <Flex
          display={'flex'}
          justifyContent="space-around"
          flexDirection={'column'}
          minH="95%"
          w="100%"
          margin={'auto'}
          alignItems="center"
        >
          <Flex
            justifyContent={{ xl: 'space-between' }}
            flexDirection={{ base: 'column', lg: 'row', xl: 'row' }}
            w={{ base: '90%', lg: '86%', xl: '90%' }}
            margin={'auto'}
          >
            <Box minH="50vh" w={{ base: '100%', lg: '50%', xl: '45%' }}>
              <Text
                paddingBlock={'10px'}
                fontSize={'37px'}
                fontWeight="extrabold"
                textColor={'#0354C2'}
              >
                {' '}
                Oak Engage is trusted by the world's biggest brands
              </Text>
              <Box fontSize={'2xl'} textColor="#0354C2">
                Intranet solutions for any industry
              </Box>{' '}
              <br />
              <Box>
                Aldi, Five Guys, Boohoo and many more of the world’s most
                successful brands have one thing in common. They all use Oak
                intranet to keep their people connected and engaged. From
                improving communication to enhancing workplace culture, Oak
                Engage is the definitive workplace solution for employees and
                organisations worldwide.
              </Box>
              <Box
                mt={'5%'}
                display={'flex'}
                h="10"
                w={{ base: '80%', lg: '86%', xl: '50%' }}
                bgColor="#0354C2"
                borderRadius={'3xl'}
                alignItems="center"
                justifyContent={'center'}
                textColor="white"
              >
                See how Oak can work for you
              </Box>
            </Box>
            <Box minH="50vh" w={{ base: '100%', lg: '50%', xl: '45%' }}>
              <Image
                h="100%"
                w={'fit-content'}
                objectFit="cover"
                src="/image/five-guys-2x.png"
              />
            </Box>
          </Flex>

          <Box
            minH="110vh"
            w={'100%'}
            margin="auto"
            bgColor={'#F7F7F8'}
            mt="7%"
          >
            <Box textAlign={'center'}>
              <Box fontSize={'3xl'} textColor="#0354C2" fontWeight={'bold'}>
                {' '}
                Our Intranet Success Stories
              </Box>
            </Box>
            <Flex
              justifyContent={{ xl: 'space-between' }}
              flexDirection={{ base: 'column', lg: 'row', xl: 'row' }}
              wrap="wrap"
              w={{ base: '90%', lg: '86%', xl: '86%' }}
              margin={'auto'}
            >
              <Flex
                flexDirection={'column'}
                minH="95vh"
                w={{ base: '100%', lg: '50%', xl: '29%' }}
                mt="7"
                boxShadow="dark-lg"
                rounded="md"
                bg={'white'}
              >
                <Image
                  h="40%"
                  w={'100%'}
                  objectFit="cover"
                  src="/image/aldi.png"
                />

                <Box h="40vh" w={'90%'} margin="auto" bgColor={'white'} mt="5">
                  <Image
                    h="30%"
                    w={'fit-content'}
                    objectFit="cover"
                    src="/image/aldi (1).png"
                  />
                  <Text
                    fontSize={'20px'}
                    textColor="#0354C2"
                    fontWeight={'bold'}
                  >
                    A mobile-first platform designed to engage and connect their
                    large store-based workforce
                  </Text>
                  <Text>
                    Looking for a way to transform the way they communicated
                    with their 40,000 strong workforce, Aldi partnered with Oak
                    Engage.
                  </Text>
                </Box>
                <Text
                  mt={'5%'}
                  mb="5"
                  ml={'5'}
                  display={'flex'}
                  h="10"
                  w={{ base: '70%', lg: '50%', xl: '45%' }}
                  bgColor="#0354B2"
                  borderRadius={'3xl'}
                  alignItems="center"
                  justifyContent={'center'}
                  textColor="white"
                >
                  {' '}
                  Read more about Aldi
                </Text>
              </Flex>

              <Flex
                flexDirection={'column'}
                minH="95vh"
                w={{ base: '100%', lg: '50%', xl: '29%' }}
                mt="7"
                bgColor="white"
                boxShadow="dark-lg"
                rounded="md"
                bg={'white'}
              >
                <Image
                  h="40%"
                  w={'100%'}
                  objectFit="cover"
                  src="/image/fiveguys.png"
                />

                <Box h="41vh" w={'90%'} margin="auto" mt="5">
                  <Image
                    h="30%"
                    w={'fit-content'}
                    objectFit="cover"
                    src="/image/fg-padding.png"
                  />
                  <Text
                    fontSize={'19px'}
                    textColor="#0354C2"
                    fontWeight={'bold'}
                  >
                    Connecting their workforce with Oak Engage
                  </Text>

                  <Text>
                    Recognised as the fastest-growing burger restaurant in the
                    world, Five Guys, partnered with Oak Engage to meet the
                    engagement needs of their workforce throughout the UK,
                    France, Germany and Spain.
                  </Text>
                </Box>
                <Text
                  mt={'5%'}
                  mb="5"
                  ml={'5'}
                  display={'flex'}
                  h="10"
                  w={{ base: '80%', lg: '50%', xl: '70%' }}
                  bgColor="#0354B2"
                  borderRadius={'3xl'}
                  alignItems="center"
                  justifyContent={'center'}
                  textColor="white"
                >
                  {' '}
                  Read more about Five Guys
                </Text>
              </Flex>

              <Flex
                flexDirection={'column'}
                minH="95vh"
                w={{ base: '100%', lg: '50%', xl: '29%' }}
                mt="7"
                bgColor="white"
                boxShadow="dark-lg"
                rounded="md"
                bg={'white'}
              >
                <Image
                  h="40%"
                  w={'100%'}
                  objectFit="cover"
                  src="/image/boohoo-curved-image.png"
                />

                <Box h="40vh" w={'90%'} margin="auto" mt="5">
                  <Image
                    h="30%"
                    w={'fit-content'}
                    objectFit="cover"
                    src="/image/boohoo-curved-logo.png"
                  />
                  <Text fontSize={'20px'} textColor="#0354C2" fontWeight="bold">
                    Oak is boohoo's 'constant cost saver' and their hub for
                    'absolutely everything'{' '}
                  </Text>

                  <Text>
                    Leading online retailer boohoo PLC were keen to implement an
                    internal comms platform that integrated with their creative,
                    modern brand.{' '}
                  </Text>
                </Box>
                <Text
                  mt={'5%'}
                  mb="5"
                  ml={'5'}
                  display={'flex'}
                  h="10"
                  w={{ base: '80%', lg: '50%', xl: '70%' }}
                  bgColor="#0354B2"
                  borderRadius={'3xl'}
                  alignItems="center"
                  justifyContent={'center'}
                  textColor="white"
                >
                  Read more about boohoo
                </Text>
              </Flex>

              <Flex
                flexDirection={'column'}
                minH="95vh"
                w={{ base: '100%', lg: '50%', xl: '29%' }}
                mt="7%"
                bgColor="white"
                boxShadow="dark-lg"
                rounded="md"
                bg={'white'}
              >
                <Image
                  h="40%"
                  w={'100%'}
                  objectFit="cover"
                  src="/image/miller_curved.png"
                />

                <Box h="42vh" w={'90%'} margin="auto" mt="5">
                  <Image
                    h="30%"
                    w={'fit-content'}
                    objectFit="cover"
                    src="/image/millerhomes.png"
                  />
                  <Text fontSize={'20px'} textColor="#0354C2" fontWeight="bold">
                    Miller Homes transform its communication process
                  </Text>

                  <Text>
                    Leading UK homebuilder Miller Homes was keen to find a
                    platform that would help improve business communication,
                    easily upload company news and showcase its new housing
                    developments.
                  </Text>
                </Box>
                <Text
                  mt={'5%'}
                  mb="5"
                  ml={'5'}
                  display={'flex'}
                  h="12"
                  w={{ base: '80%', lg: '50%', xl: '70%' }}
                  bgColor="#0354B2"
                  borderRadius={'3xl'}
                  alignItems="center"
                  justifyContent={'center'}
                  textColor="white"
                >
                  Read more about Miller Homes
                </Text>
              </Flex>

              <Flex
                flexDirection={'column'}
                minH="95vh"
                w={{ base: '100%', lg: '50%', xl: '29%' }}
                mt="7%"
                bgColor="white"
                boxShadow="dark-lg"
                rounded="md"
                bg={'white'}
              >
                <Image
                  h="40%"
                  w={'100%'}
                  objectFit="cover"
                  src="/image/hss-hire-image-curved.png"
                />

                <Box h="40vh" w={'90%'} margin="auto" mt="5">
                  <Image
                    h="30%"
                    w={'fit-content'}
                    objectFit="cover"
                    src="/image/group-70.png"
                  />
                  <Text fontSize={'20px'} textColor="#0354C2" fontWeight="bold">
                    HSS Hire Use Oak Engage to Modernise Communications{' '}
                  </Text>

                  <Text>
                    HSS Hire are a market-leading supplier of tool and equipment
                    hire in the United Kingdom and Ireland, as well as being a
                    logistical and technical partner to businesses of all sizes.
                  </Text>
                </Box>
                <Text
                  mt={'5%'}
                  mb="5"
                  ml={'5'}
                  display={'flex'}
                  h="12"
                  w={{ base: '80%', lg: '50%', xl: '70%' }}
                  bgColor="#0354B2"
                  borderRadius={'3xl'}
                  alignItems="center"
                  justifyContent={'center'}
                  textColor="white"
                >
                  Read more about HSS Hire
                </Text>
              </Flex>

              <Flex
                flexDirection={'column'}
                minH="95vh"
                w={{ base: '100%', lg: '50%', xl: '29%' }}
                mt="7%"
                bgColor="white"
                boxShadow="dark-lg"
                rounded="md"
                bg={'white'}
              >
                <Image
                  h="40%"
                  w={'100%'}
                  objectFit="cover"
                  src="/image/pizzaexpress.png"
                />

                <Box h="42vh" w={'90%'} margin="auto" mt="5">
                  <Image
                    h="30%"
                    w={'fit-content'}
                    objectFit="cover"
                    src="/image/pizzaexpress-logo.png"
                  />
                  <Text fontSize={'20px'} textColor="#0354C2" fontWeight="bold">
                    PizzaExpress simplify their communication process and
                    onboard employees with ease
                  </Text>

                  <Text>
                    With over 360 restaurants in the UK, leading restaurant
                    group, PizzaExpress needed to upgrade its intranet to keep
                    its large workforce updated with ease.{' '}
                  </Text>
                </Box>

                <Text
                  mt={'5%'}
                  mb="5"
                  ml={'5'}
                  display={'flex'}
                  h="12"
                  w={{ base: '80%', lg: '50%', xl: '70%' }}
                  bgColor="#0354B2"
                  borderRadius={'3xl'}
                  alignItems="center"
                  justifyContent={'center'}
                  textColor="white"
                >
                  {' '}
                  Read more about PizzaExpress
                </Text>
              </Flex>

              <Flex
                flexDirection={'column'}
                minH="95vh"
                w={{ base: '100%', lg: '50%', xl: '29%' }}
                mt="7%"
                bgColor="white"
                boxShadow="dark-lg"
                rounded="md"
                bg={'white'}
              >
                <Image
                  h="40%"
                  w={'100%'}
                  objectFit="cover"
                  src="/image/paperchase-resize.png"
                />

                <Box h="42vh" w={'90%'} margin="auto" mt="5">
                  <Image
                    h="30%"
                    w={'fit-content'}
                    objectFit="cover"
                    src="/image/images.png"
                  />
                  <Text fontSize={'20px'} textColor="#0354C2" fontWeight="bold">
                    Improving their internal communication strategy with Oak
                    Engage{' '}
                  </Text>

                  <Text>
                    Leading UK stationery company, Paperchase needed a seamless
                    internal communications platform to align all of their
                    stores.{' '}
                  </Text>
                </Box>
                <Text
                  mt={'5%'}
                  mb="5"
                  ml={'5'}
                  display={'flex'}
                  h="12"
                  w={{ base: '80%', lg: '50%', xl: '70%' }}
                  bgColor="#0354B2"
                  borderRadius={'3xl'}
                  alignItems="center"
                  justifyContent={'center'}
                  textColor="white"
                >
                  {' '}
                  Read more about Paperchase
                </Text>
              </Flex>

              <Flex
                flexDirection={'column'}
                minH="95vh"
                w={{ base: '100%', lg: '50%', xl: '29%' }}
                mt="7%"
                bgColor="white"
                boxShadow="dark-lg"
                rounded="md"
                bg={'white'}
              >
                <Image
                  h="40%"
                  w={'100%'}
                  objectFit="cover"
                  src="/image/halfords-2x.png"
                />

                <Box h="42vh" w={'90%'} margin="auto" mt="5">
                  <Image
                    h="30%"
                    w={'fit-content'}
                    objectFit="cover"
                    src="/image/halfords.png"
                  />
                  <Text fontSize={'20px'} textColor="#0354C2" fontWeight="bold">
                    Expectations exceeded with 1500 unique content views per
                    week
                  </Text>

                  <Text>
                    After looking at a number of corporate company intranet
                    examples, the Halfords team chose Oak Engage to
                    revolutionise how they work.
                  </Text>
                </Box>
                <Text
                  mt={'5%'}
                  mb="5"
                  ml={'5'}
                  display={'flex'}
                  h="12"
                  w={{ base: '80%', lg: '50%', xl: '70%' }}
                  bgColor="#0354B2"
                  borderRadius={'3xl'}
                  alignItems="center"
                  justifyContent={'center'}
                  textColor="white"
                >
                  {' '}
                  Read more about Halfords
                </Text>
              </Flex>

              <Flex
                flexDirection={'column'}
                minH="95vh"
                w={{ base: '100%', lg: '50%', xl: '29%' }}
                mt="7%"
                bgColor="white"
                boxShadow="dark-lg"
                rounded="md"
                bg={'white'}
              >
                <Image
                  h="40%"
                  w={'100%'}
                  objectFit="cover"
                  src="/image/bucks-uni-case-study-cover-image.png"
                />

                <Box h="42vh" w={'90%'} margin="auto" mt="5">
                  <Image
                    h="30%"
                    w={'fit-content'}
                    objectFit="cover"
                    src="/image/logo.png"
                  />
                  <Text fontSize={'20px'} textColor="#0354C2">
                    Buckinghamshire New University upgrade to an intuitive
                    intranet platform
                  </Text>

                  <Text>
                    Buckinghamshire New University (BNU) needed a platform to
                    improve business communication and maximise employee
                    engagement.{' '}
                  </Text>
                </Box>
                <Text
                  mt={'5%'}
                  mb="5"
                  ml={'5'}
                  display={'flex'}
                  h="12"
                  w={{ base: '80%', lg: '50%', xl: '70%' }}
                  bgColor="#0354B2"
                  borderRadius={'3xl'}
                  alignItems="center"
                  justifyContent={'center'}
                  textColor="white"
                >
                  {' '}
                  Read more about BNU
                </Text>
              </Flex>

              <Flex
                flexDirection={'column'}
                minH="95vh"
                w={{ base: '100%', lg: '50%', xl: '29%' }}
                mt="7%"
                bgColor="white"
                boxShadow="dark-lg"
                rounded="md"
                bg={'white'}
              >
                <Image
                  h="40%"
                  w={'100%'}
                  objectFit="cover"
                  src="/image/severfield.png"
                />

                <Box h="42vh" w={'90%'} margin="auto" mt="5">
                  <Image
                    h="30%"
                    w={'fit-content'}
                    objectFit="cover"
                    src="/image/severfield (1).png"
                  />
                  <Text fontSize={'20px'} textColor="#0354C2" fontWeight="bold">
                    Connecting their remote workforce with Oak Engage
                  </Text>

                  <Text>
                    With a workforce made up of 1400 people, national leading
                    structural steel company, Serverfield, needed a solution to
                    keep their staff engaged and stay connected to their remote
                    workers.
                  </Text>
                </Box>
                <Text
                  mt={'5%'}
                  mb="5"
                  ml={'5'}
                  display={'flex'}
                  h="12"
                  w={{ base: '80%', lg: '50%', xl: '70%' }}
                  bgColor="#0354B2"
                  borderRadius={'3xl'}
                  alignItems="center"
                  justifyContent={'center'}
                  textColor="white"
                >
                  {' '}
                  Read more about Serverfield
                </Text>
              </Flex>

              <Flex
                flexDirection={'column'}
                minH="95vh"
                w={{ base: '100%', lg: '50%', xl: '29%' }}
                mt="7%"
                bgColor="white"
                boxShadow="dark-lg"
                rounded="md"
                bg={'white'}
              >
                <Image
                  h="40%"
                  w={'100%'}
                  objectFit="cover"
                  src="/image/oec.png"
                />

                <Box h="40vh" w={'90%'} margin="auto" mt="5">
                  <Image
                    h="30%"
                    w={'fit-content'}
                    objectFit="cover"
                    src="/image/oec (1).png"
                  />
                  <Text fontSize={'20px'} textColor="#0354C2" fontWeight="bold">
                    OEC see increased employee engagement with Oak
                  </Text>

                  <Text>
                    With so many employees globally, OEC faced the challenge of
                    connecting and communicating with everyone quickly and
                    efficiently.
                  </Text>
                </Box>
                <Text
                  mt={'5%'}
                  mb="5"
                  ml={'5'}
                  display={'flex'}
                  h="12"
                  w={{ base: '80%', lg: '50%', xl: '70%' }}
                  bgColor="#0354B2"
                  borderRadius={'3xl'}
                  alignItems="center"
                  justifyContent={'center'}
                  textColor="white"
                >
                  {' '}
                  Read more about OEC
                </Text>
              </Flex>

              <Flex
                flexDirection={'column'}
                minH="95vh"
                w={{ base: '100%', lg: '50%', xl: '29%' }}
                mt="7%"
                bgColor="white"
                boxShadow="dark-lg"
                rounded="md"
                bg={'white'}
              >
                <Image
                  h="40%"
                  w={'100%'}
                  objectFit="cover"
                  src="/image/wing-yip-2x.png"
                />

                <Box h="42vh" w={'90%'} margin="auto" mt="5">
                  <Image
                    h="30%"
                    w={'fit-content'}
                    objectFit="cover"
                    src="/image/wingyip.png"
                  />
                  <Text fontSize={'20px'} textColor="#0354C2" fontWeight="bold">
                    A successful digital network that could be accessed by all
                    employees of the company
                  </Text>

                  <Text>
                    Widely recognised as the UK’s leading Oriental grocer, Wing
                    Yip needed a solution which was available and accessible
                    their entire workforce.
                  </Text>
                </Box>
                <Text
                  mt={'5%'}
                  mb="3"
                  ml={'3'}
                  display={'flex'}
                  h="12"
                  w={{ base: '80%', lg: '50%', xl: '70%' }}
                  bgColor="#0354B2"
                  borderRadius={'3xl'}
                  alignItems="center"
                  justifyContent={'center'}
                  textColor="white"
                >
                  {' '}
                  Read more about Wing Yip
                </Text>
              </Flex>

              <Flex
                pt={'6'}
                justifyContent={{ xl: 'space-between' }}
                flexDirection={{ base: 'column', lg: 'row', xl: 'row' }}
                w={{ base: '90%', lg: '86%', xl: '65%' }}
              >
                <Flex
                  flexDirection="column"
                  minH="90vh"
                  w={{ base: '110%', lg: '50%', xl: '45%' }}
                  bgColor="white"
                  boxShadow="dark-lg"
                  rounded="md"
                  bg={'white'}
                >
                  <Image
                    h="40%"
                    w={'100%'}
                    objectFit="cover"
                    src="/image/nep-image-pod_2.png"
                  />

                  <Box minH="42px" w={'90%'} margin="auto">
                    <Image
                      h="30%"
                      w={'fit-content'}
                      objectFit="cover"
                      src="/image/nep.png"
                    />
                    <Text
                      fontSize={'20px'}
                      textColor="#0354C2"
                      paddingBlock={'8px'}
                      fontWeight="bold"
                    >
                      NEP Finds a partner in Oak Engage{' '}
                    </Text>

                    <Text paddingBlock={'10px'}>
                      Pennsylvania based international production company, NEP
                      were looking for a new intranet to enhance communication
                      within the business.{' '}
                    </Text>
                  </Box>
                  <Flex
                    mb={'5'}
                    justify={'center'}
                    minH="12"
                    ml={'20px'}
                    w={{ base: '90%', lg: '50%', xl: '70%' }}
                    bgColor="#0354B2"
                    borderRadius={'3xl'}
                    alignItems="center"
                    justifyContent={'center'}
                    textColor="white"
                  >
                    {' '}
                    Read more about NEP
                  </Flex>
                </Flex>

                <Flex
                  flexDirection="column"
                  minH="95vh"
                  w={{ base: '110%', lg: '50%', xl: '45%' }}
                  bgColor="white"
                  boxShadow="dark-lg"
                  rounded="md"
                  bg={'white'}
                  mt="6"
                >
                  <Image
                    h="40%"
                    w={'100%'}
                    objectFit="cover"
                    src="/image/mfa-oil-image-pod.png"
                  />

                  <Box minH="42px" w={'90%'} margin="auto">
                    <Image
                      h="30%"
                      w={'fit-content'}
                      objectFit="cover"
                      src="/image/mfa_oil_company.jpeg"
                    />
                    <Text
                      fontSize={'18px'}
                      textColor="#0354C2"
                      paddingBlock={'8px'}
                      fontWeight="bold"
                    >
                      Oak Engage is the clear winner for MFA Oil{' '}
                    </Text>

                    <Text paddingBlock={'10px'}>
                      We've partnered with MFA Oil, an energy cooperative based
                      in Columbia Missouri. We spoke with their team on why they
                      selected us as their intranet of choice over the
                      competition.{' '}
                    </Text>
                  </Box>
                  <Flex
                    mb={'5'}
                    mt="5"
                    justify={'center'}
                    minH="12"
                    ml={'20px'}
                    w={{ base: '90%', lg: '32%', xl: '70%' }}
                    bgColor="#0354B2"
                    borderRadius={'3xl'}
                    alignItems="center"
                    justifyContent={'center'}
                    textColor="white"
                  >
                    Read more about MFA Oil
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          </Box>

          <Box
            h={'60vh'}
            bgColor="white"
            minH="95vh"
            w={{ base: '100%', lg: '50%', xl: '100%' }}
            mt="5%"
          >
            <Box mt={'12'}>
              <Text
                textAlign={'center'}
                fontSize="2xl"
                textColor={'blue'}
                fontWeight="bold"
              >
                "Oak is almost addictive!"
              </Text>{' '}
              <br /> <br />
              <Text textAlign={'center'}>
                {' '}
                "Oak is almost addictive it feel like a window into our
                restaurants. we're celebrating promotions, <br />
                we're celebrating new hires to the business and that gives us
                confidence."{' '}
              </Text>{' '}
              <br /> <br />
              <Text fontSize={'20px'} textAlign="center" fontWeight={'bold'}>
                Five Guys
              </Text>{' '}
              <br /> <br />
              <Text
                textAlign={'center'}
                fontSize="2xl"
                textColor={'black'}
                fontWeight="bold"
              >
                Chris Raaff, Head of Recruitment & Internal Communication
              </Text>
            </Box>
          </Box>

          <Box
            bgColor={'#0354B2'}
            minH="60vh"
            w={{ base: '100%', lg: '50%', xl: '100%' }}
          >
            <Text
              fontSize={{ base: '18px', lg: '20px', xl: '25px' }}
              textColor="white"
              textAlign={'center'}
              mt="10"
            >
              Want to see more?
            </Text>{' '}
            <br />
            <Text
              fontSize={{ base: '18px', lg: '20px', xl: '25px' }}
              textColor="white"
              textAlign={'center'}
              fontWeight="bold"
            >
              Get a demo with one of our employee engagement <br />
              experts and see how Oak could work for you
            </Text>
            <Box
              h={'12'}
              w={{ base: '90%', lg: '50%', xl: '20%' }}
              alignItems={'center'}
              justifyContent={'center'}
              display="flex"
              margin={'auto'}
              bgColor="white"
              borderRadius={'3xl'}
              mt="5"
              textColor={'#0354B2'}
              fontWeight="bold"
            >
              Arrange a demo ›
            </Box>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
}

export default Customer;
