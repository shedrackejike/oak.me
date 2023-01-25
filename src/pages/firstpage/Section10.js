import { Box, Flex,Image } from '@chakra-ui/react'
import React from 'react'

function Section10() {
  return (
  <Flex mt={'15%'} bgColor='#F7F7F8'>
    <Box margin={'auto'} minH={'120vh'} w='90%' >
        <Box>
            <Box  textAlign={'center'} fontSize={'2xl'} textColor='#0354C2' fontWeight={'bold'}>Take a look at our latest blog posts</Box>
        </Box>

        <Flex justifyContent={{'xl':'space-around',}} flexDirection={{'base': "column",'lg': "row",'xl': "row"}}
         w={{'base': "90%",'lg': "86%",'xl': "86%"}} margin={'auto'}>

        <Box  minH='70vh' w={{'base': "100%",'lg': "50%",'xl': "30%"}}    boxShadow='dark-lg'  rounded='md' bg={'white'}  mt='6' >
            <Box>
                <Box>
                    <Box>

                         <Image
                            w='fit-content'
                            objectFit='contain'
                            src='/image/5c46ed4b-0643-4d31-a2c9-a03b1e289d22.jpeg'
                            alt='Dan Abramov'
                            />
                                            
                         </Box>
                </Box>

                <Box>
                    <Box h='40vh' w={'90%'} margin='auto' mt={'15px'}>
                        <Box>
                        <Box  fontSize={'16px'} textColor='#0354C2' fontWeight={'bold'}>The IoIC Profession Map: How to Achieve IC Success</Box>
                        <Box textColor={'black'} fontWeight='bold'>12 December 2022</Box>
                        <Box>Oak Engage shares six steps to internal
                             comms success using the updated 
                             professional map by IoIC for the rapid 
                             changes in organisational environments.</Box>
                        </Box>
                    </Box>
                </Box>
            </Box>

        </Box>


        <Box  minH='95vh' w={{'base': "100%",'lg': "50%",'xl': "30%"}}   boxShadow='dark-lg'  rounded='md' bg={'white'}  mt='7' >
            <Box>
                <Box>

                    <Image
                            w='fit-content'
                            objectFit='contain'
                            src='/image/11521619-f36d-4a78-9592-91ce6d5e7d5f.jpeg'
                            alt='Dan Abramov'
                            />
                </Box>

                <Box>
                    <Box  h='40vh' w={'90%'} margin='auto' mt={'15px'}>
                        <Box>
                        <Box  fontSize={'16px'} textColor='#0354C2' fontWeight={'bold'}>Intranet for the Hospitality Sector - Engage Your Frontline Workers</Box>
                        <Box textColor={'black'} fontWeight='bold'>20 September 2022</Box>
                        <Box>Turnover in the hospitality industry is
                             double the average rate. Engagement is a 
                             real issue in hospitality and is a challenge,
                              but not impossible. In this blog is how you
                               can inform, connect with and engage 
                               workers in hospitality with an intranet.
                             </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>

        </Box>



        <Box  minH='96vh' w={{'base': "100%",'lg': "50%",'xl': "30%"}}   boxShadow='dark-lg'  rounded='md' bg={'white'}   mt='6' >
            <Box>
                <Box>
                    <Box> 

                    <Image
                            w='fit-content'
                            objectFit='contain'
                            src='/image/educationintranet.png'
                            alt='Dan Abramov'
                            />
                    
                    </Box>
                </Box>

                <Box>
                    <Box h='40vh' w={'90%'} margin='auto' mt={'15px'}>
                        <Box>
                        <Box  fontSize={'16px'} textColor='#0354C2' fontWeight={'bold'}>An Intranet for the Education Sector
                          What It Needs and Why?
                         </Box>
                        <Box textColor={'black'} fontWeight='bold'>09 September 2022</Box>
                        <Box>Different schedules, timetables and daily
                             tasks mean that connection and 
                             engagement with news and information 
                             can sometimes fall by the wayside without
                              proper tools in place. An all in one intranet
                               is a must have educational institutions, 
                               learn why in our latest blog.


                             </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>

        </Box>
        </Flex>

        <Box m={'100px auto'}  display={'flex'} h='12' w={{'base': "70%",'lg': "86%",'xl': "30%"}} bgColor='#02397A' borderRadius={'3xl'} alignItems='center' justifyContent={'center'} textColor='white'>
            See all our blog posts
            </Box>

    </Box>
  </Flex>
  )
}

export default Section10
