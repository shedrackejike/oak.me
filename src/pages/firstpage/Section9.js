import { Box, Flex,Image,Text } from '@chakra-ui/react'
import React from 'react'

function Section9() {
  return (
    <Flex  bgColor={'#F3FAFD'} mt='10' h={'auto'} pt='5'>

        <Box justifyContent={{'xl':'space-between',}} flexDirection={{'base': "column",'lg': "row",'xl': "row"}}
     w={{'base': "90%",'lg': "86%",'xl': "86%"}} margin={'auto'}>
            <Box >
                  <Box  textAlign={'center'} fontSize={'2xl'} textColor='#0354C2' fontWeight={'bold'}>Oak will help you succeed in these key areas</Box>  
            </Box>

            <Box mt={'10'} display='flex' flexWrap={'wrap '} flexDirection='columnS' justifyContent={'space-around'}>

            <Box minH='50vh' w={{'base': "100%",'lg': "50%",'xl': "26%"}}  bgColor='white' mb={'5'} boxShadow='dark-lg'  rounded='md' bg={'white'} mt='7'>
                <Box alignItems={'center'} flex='start'>

                    <Box margin={'auto'} h={'40px'} mt="-8" alignItems={'center'} justifyContent='center' display={'flex'}> 

                     
                     <Image
                        h={'100%'}
                        w='fit-content'
                        boxSize={'80px'}
                        objectFit='contain'
                        src='/image/target-icon.png'
                        alt='Dan Abramov'
                        />
                      </Box>
                     <Box >
                        <Box textAlign={'center'} fontSize={'2xl'}  textColor={'#0354C2'} mt='5' fontWeight={'bold'} mb='4'>Omnichannel delivery</Box>
                     </Box>


                     <Box display={'flex'} alignItems='center' justifyContent={'space-between'}>

                        <Box w='15%' justifyContent={"right"}>


                            <Image
                        h={'100%'}
                        ml="8"
                        w='fit-content'
                        boxSize={'20px'}
                        objectFit='contain'
                        src='/image/badge-check.png'
                        alt='Dan Abramov'
                        />
                        </Box>
                        <Box w={"80%"}><Text>Target particular employees with <br/> 
                             relevant information</Text> </Box>
                     </Box><br/>


                     <Box display={'flex'} alignItems='center' justifyContent={'space-between'}>
                        <Box w='15%' justifyContent={"right"}>



                            <Image
                        h={'100%'}
                        ml="8"
                        w='fit-content'
                        boxSize={'20px'}
                        objectFit='contain'
                        src='/image/badge-check.png'
                        alt='Dan Abramov'
                        />
                        </Box>
                        <Box w={"80%"}><Text>Avoid information overload and cut <br/>
                             through the noise</Text> </Box>
                     </Box><br/>



                    
                     <Box display={'flex'} alignItems='center' justifyContent={'space-between'}>
                        <Box w='15%' justifyContent={"right"}>



                            <Image
                        h={'100%'}
                        ml="8"
                        w='fit-content'
                        boxSize={'20px'}
                        objectFit='contain'
                        src='/image/badge-check.png'
                        alt='Dan Abramov'
                        />
                        </Box>
                        <Box w={"80%"}><Text>Focus on the message and <br/>
                             drive engagement</Text> </Box>
                     </Box><br/>


                </Box>
            </Box>


            <Box minH='50vh' w={{'base': "100%",'lg': "50%",'xl': "26%"}} bgColor='white' mb={'5'} boxShadow='dark-lg'  rounded='md' bg={'white'} mt='7'>
                <Box alignItems={'center'} flex='start'>

                    <Box margin={'auto'} h={'40px'} mt="-8" alignItems={'center'} justifyContent='center' display={'flex'}> 


                     <Image
                        h={'100%'}
                        w='fit-content'
                        boxSize={'80px'}
                        objectFit='contain'
                        src='/image/speaker-icon.png'
                        alt='Dan Abramov'
                        />
                     
                     </Box>
                     <Box >

                        <Box textAlign={'center'} fontSize={'2xl'}  textColor={'#0354C2'} mt='5' fontWeight={'bold'} mb='4'>Employee voice</Box>
                     </Box>


                     <Box display={'flex'} alignItems='center' justifyContent={'space-between'}>
                        <Box w='15%' justifyContent={"right"}>


                     <Image
                        h={'100%'}
                        ml="8"
                        w='fit-content'
                        boxSize={'20px'}
                        objectFit='contain'
                        src='/image/badge-check.png'
                        alt='Dan Abramov'
                        />
                        </Box>
                        <Box w={"80%"}><Text>Allow your people to opt out of<br/>
                             communications that aren’t relevant</Text> </Box>
                     </Box><br/>


                     <Box display={'flex'} alignItems='center' justifyContent={'space-between'}>
                        <Box w='15%' justifyContent={"right"}>


                            <Image
                        h={'100%'}
                        ml="8"
                        w='fit-content'
                        boxSize={'20px'}
                        objectFit='contain'
                        src='/image/badge-check.png'
                        alt='Dan Abramov'
                        />
                        </Box>
                        <Box w={"80%"}><Text>Give your employees a safe space to <br/>
                             express their views</Text> </Box>
                     </Box><br/>



                    
                     <Box display={'flex'} alignItems='center' justifyContent={'space-between'}>
                        <Box w='15%' justifyContent={"right"}>


                            <Image
                        h={'100%'}
                        ml="8"
                        w='fit-content'
                        boxSize={'20px'}
                        objectFit='contain'
                        src='/image/badge-check.png'
                        alt='Dan Abramov'
                        />
                        </Box>
                        <Box w={"80%"}><Text>Gather real, actionable feedback and <br/>
                             insight</Text> </Box>
                     </Box><br/>


                </Box>
            </Box>


            <Box minH='50vh' w={{'base': "100%",'lg': "50%",'xl': "26%"}} bgColor='white' mb={'5'} boxShadow='dark-lg'  rounded='md' bg={'white'} mt='7'>
                <Box alignItems={'center'} flex='start'>

                    <Box margin={'auto'} h={'40px'} mt="-8" alignItems={'center'} justifyContent='center' display={'flex'}> 

                     

                     <Image
                        h={'100%'}
                        w='fit-content'
                        boxSize={'80px'}
                        objectFit='contain'
                        src='/image/key-icon.png'
                        alt='Dan Abramov'
                        />
                     
                      </Box>
                     <Box >
                        <Box textAlign={'center'} fontSize={'2xl'}  textColor={'#0354C2'} mt='5' fontWeight={'bold'} mb='4'>Accessible anywhere</Box>
                     </Box>


                     <Box display={'flex'} alignItems='center' justifyContent={'space-between'}>
                        <Box w='15%' justifyContent={"right"}>

                            <Image
                        h={'100%'}
                        ml="8"
                        w='fit-content'
                        boxSize={'20px'}
                        objectFit='contain'
                        src='/image/badge-check.png'
                        alt='Dan Abramov'
                        />
                        </Box>
                        <Box w={"80%"}><Text>Reach every employee with a <br/>
                            convenient mobile app</Text> </Box>
                     </Box><br/>


                     <Box display={'flex'} alignItems='center' justifyContent={'space-between'}>
                        <Box w='15%' justifyContent={"right"}>


                            <Image
                        h={'100%'}
                        ml="8"
                        w='fit-content'
                        boxSize={'20px'}
                        objectFit='contain'
                        src='/image/badge-check.png'
                        alt='Dan Abramov'
                        />
                        </Box>
                        <Box w={"80%"}><Text>Immersive employee experience,<br/>
                             wherever they are</Text> </Box>
                     </Box><br/>



                    
                     <Box display={'flex'} alignItems='center' justifyContent={'space-between'}>
                        <Box w='15%' justifyContent={"right"}>


                            <Image
                        h={'100%'}
                        ml="8"
                        w='fit-content'
                        boxSize={'20px'}
                        objectFit='contain'
                        src='/image/badge-check.png'
                        alt='Dan Abramov'
                        />
                        </Box>
                        <Box w={"80%"}><Text>Easy access to key documents and <br/>
                            systems</Text> </Box>
                     </Box><br/>


                </Box>
            </Box>


            <Box minH='50vh' w={{'base': "100%",'lg': "50%",'xl': "26%"}}  bgColor='white' mb={'5'} mt='10' boxShadow='dark-lg'  rounded='md' bg={'white'} >
                <Box alignItems={'center'} flex='start'>

                    <Box margin={'auto'} h={'40px'} mt="-8" alignItems={'center'} justifyContent='center' display={'flex'}> 

                     

                     <Image
                        h={'100%'}
                        w='fit-content'
                        boxSize={'80px'}
                        objectFit='contain'
                        src='/image/smile-icon.png'
                        alt='Dan Abramov'
                        />
                     
                      </Box>
                     <Box >
                        <Box textAlign={'center'} fontSize={'2xl'}  textColor={'#0354C2'} mt='5' fontWeight={'bold'} mb='4'>Employee experience</Box>
                     </Box>


                     <Box display={'flex'} alignItems='center' justifyContent={'space-between'}>
                        <Box w='15%' justifyContent={"right"}>


                            <Image
                        h={'100%'}
                        ml="8"
                        w='fit-content'
                        boxSize={'20px'}
                        objectFit='contain'
                        src='/image/badge-check.png'
                        alt='Dan Abramov'
                        />
                        </Box>
                        <Box w={"80%"}><Text>Engage employees with curated <br/>
                            content</Text> </Box>
                     </Box><br/>


                     <Box display={'flex'} alignItems='center' justifyContent={'space-between'}>
                        <Box w='15%' justifyContent={"right"}>


                            <Image
                        h={'100%'}
                        ml="8"
                        w='fit-content'
                        boxSize={'20px'}
                        objectFit='contain'
                        src='/image/badge-check.png'
                        alt='Dan Abramov'
                        />
                        </Box>
                        <Box w={"80%"}><Text>Single source of truth for everything <brr/>
                            your employees need</Text> </Box>
                     </Box><br/>



                    
                     <Box display={'flex'} alignItems='center' justifyContent={'space-between'}>
                        <Box w='15%' justifyContent={"right"}>


                            <Image
                        h={'100%'}
                        ml="8"
                        w='fit-content'
                        boxSize={'20px'}
                        objectFit='contain'
                        src='/image/badge-check.png'
                        alt='Dan Abramov'
                        />
                        </Box>
                        <Box w={"80%"}><Text>Intuitive and easy to use</Text> </Box>
                     </Box><br/>


                </Box>
            </Box>


            <Box minH='50vh' w={{'base': "100%",'lg': "50%",'xl': "26%"}}  bgColor='white' mb={'5'} mt='10' boxShadow='dark-lg'  rounded='md' bg={'white'}>
                <Box alignItems={'center'} flex='start'>

                    <Box margin={'auto'} h={'40px'} mt="-8" alignItems={'center'} justifyContent='center' display={'flex'}> 


                     
                     <Image
                        h={'100%'}
                        w='fit-content'
                        boxSize={'80px'}
                        objectFit='contain'
                        src='/image/heart-icon.png'
                        alt='Dan Abramov'
                        />
                     
                     </Box>
                     <Box >
                        <Box textAlign={'center'} fontSize={'2xl'}  textColor={'#0354C2'} mt='5' fontWeight={'bold'} mb='4'>Culture and recognition</Box>
                     </Box>


                     <Box display={'flex'} alignItems='center' justifyContent={'space-between'}>
                        <Box w='15%' justifyContent={"right"}>


                            <Image
                        h={'100%'}
                        ml="8"
                        w='fit-content'
                        boxSize={'20px'}
                        objectFit='contain'
                        src='/image/badge-check.png'
                        alt='Dan Abramov'
                        />
                        </Box>
                        <Box w={"80%"}><Text>Foster a sense of belonging</Text> </Box>
                     </Box><br/>


                     <Box display={'flex'} alignItems='center' justifyContent={'space-between'}>
                        <Box w='15%' justifyContent={"right"}>


                            <Image
                        h={'100%'}
                        ml="8"
                        w='fit-content'
                        boxSize={'20px'}
                        objectFit='contain'
                        src='/image/badge-check.png'
                        alt='Dan Abramov'
                        />
                        </Box>
                        <Box w={"80%"}><Text>Make your employees feel valued <br/>
                            and appreciated</Text> </Box>
                     </Box><br/>



                    
                     <Box display={'flex'} alignItems='center' justifyContent={'space-between'}>
                        <Box w='15%' justifyContent={"right"}>


                            <Image
                        h={'100%'}
                        ml="8"
                        w='fit-content'
                        boxSize={'20px'}
                        objectFit='contain'
                        src='/image/badge-check.png'
                        alt='Dan Abramov'
                        />
                        </Box>
                        <Box w={"80%"}><Text>A social and collaborative <br/>
                             environment</Text> </Box>
                     </Box><br/>


                </Box>
            </Box>


            <Box minH='50vh' w={{'base': "100%",'lg': "50%",'xl': "26%"}}  bgColor='white' mb={'5'} mt='10' boxShadow='dark-lg'  rounded='md' bg={'white'}>
                <Box alignItems={'center'} flex='start'>

                    <Box margin={'auto'} h={'40px'} mt="-8" alignItems={'center'} justifyContent='center' display={'flex'}> 

                     

                     <Image
                        h={'100%'}
                        w='fit-content'
                        boxSize={'80px'}
                        objectFit='contain'
                        src='/image/chart-icon.png'
                        alt='Dan Abramov'
                        />
                     
                     </Box>
                     <Box >
                        <Box textAlign={'center'} fontSize={'2xl'}  textColor={'#0354C2'} mt='5' fontWeight={'bold'} mb='4'>Demonstrate value</Box>
                     </Box>


                     <Box display={'flex'} alignItems='center' justifyContent={'space-between'}>
                        <Box w='15%' justifyContent={"right"}>


                            <Image
                        h={'100%'}
                        ml="8"
                        w='fit-content'
                        boxSize={'20px'}
                        objectFit='contain'
                        src='/image/badge-check.png'
                        alt='Dan Abramov'
                        />
                        </Box>
                        <Box w={"80%"}><Text>Measure the success and reach of <br/>
                            campaigns</Text> </Box>
                     </Box><br/>


                     <Box display={'flex'} alignItems='center' justifyContent={'space-between'}>
                        <Box w='15%' justifyContent={"right"}>


                            <Image
                        h={'100%'}
                        ml="8"
                        w='fit-content'
                        boxSize={'20px'}
                        objectFit='contain'
                        src='/image/badge-check.png'
                        alt='Dan Abramov'
                        />
                        </Box>
                        <Box w={"80%"}><Text>Highlight ROI to key stakeholders</Text> </Box>
                     </Box><br/>



                    
                     <Box display={'flex'} alignItems='center' justifyContent={'space-between'}>
                        <Box w='15%' justifyContent={"right"}>

                            <Image boxSize='20px' ml="8" src='/image/badge-check.png'/>

                            <Image
                        h={'100%'}
                        ml="8"
                        w='fit-content'
                        boxSize={'20px'}
                        objectFit='contain'
                        src='/image/badge-check.png'
                        alt='Dan Abramov'
                        />
                        </Box>
                        <Box w={"80%"}><Text>Drive your decisions with data</Text> </Box>
                     </Box><br/>


                </Box>
            </Box>        

            </Box>

            <Box margin={'20px auto'} display={'flex'} h='12' w={{'base': "90%",'lg': "86%",'xl': "30%"}} bgColor='#219387' borderRadius={'3xl'} alignItems='center' justifyContent={'center'} textColor='white'>
                See how we help our customers
            </Box>
        </Box>
    </Flex>
  )
}

export default Section9
