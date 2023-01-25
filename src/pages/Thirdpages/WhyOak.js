import { Box, Flex ,Image,Text,AspectRatio} from '@chakra-ui/react'
import React from 'react'

function WhyOak() {
  return (
    <Flex mt={'70px'}>
        <Box minH={"100vh"} w={'100%'} >
            <Flex justifyContent={{'xl':'space-between',}} flexDirection={{'base': "column",'lg': "row",'xl': "row"}}
              w={{'base': "90%",'lg': "86%",'xl': "90%"}} margin={'auto'}>
                <Box  minH='50vh' w={{'base': "100%",'lg': "50%",'xl': "45%"}}>
                        <Text fontSize={'40px'} fontWeight='bold' textColor={'#0354C2'}>How Oak Engage is modernising the workplace</Text>
                        <Text>We work with some of the largest companies worldwide and
                             help them overcome their biggest challenges through 
                             adaptive technology and innovative solutions.</Text>

                             <Text bgColor={'#039581'} textColor='white' ml={'5'} mt='5' h={'12'} w='45%' borderRadius={'3xl'} alignItems='center' display={'flex'} justifyContent='center'>Book a Demo ›</Text>
                </Box>

                <Flex  minH='50vh' w={{'base': "100%",'lg': "50%",'xl': "45%"}}>
                <Image
                        h='100%'
                        w={'100%'}
                        objectFit='contain'
                        src='/image/why-oak-header.png'
                        alt='Dan Abramov'
                    />
                </Flex>

                   
            </Flex>
            <Box bg={'white'}  minH='50vh' w={{'base': "100%",'lg': "50%",'xl': "45%"}} alignItems='center' justifyContent={'center'} display='flex' >
            <Image
                    w={'90%'}
                    objectFit='cover'
                    src='/image/logos-main-1-2.png'
                    alt='Dan Abramov'
                />

            </Box>

            <Flex bgColor={'#F2F7FB'} h='70vh' minH='50vh' w={{'base': "100%",'lg': "50%",'xl': "100%"}} pt='5'>
             <Box mt={'3%'}>
             <Box alignItems={'center'} justifyContent='center' display={'flex'} >
                <Image
                    h={'20%'}
                    w={'6%'}
                    objectFit='cover'
                    src='/image/brand-icons-2.png'
                    alt='Dan Abramov'
                />
                </Box>

                <Box textAlign={'center'}>
                <Text fontSize={'37px'} fontWeight='bold' textColor={'#0354C2'}>Results you can measure</Text> <br/>
                <Text>Invest in a platform that puts your people first. Our intranet solution is proven to dramatically increase <br/>
                     engagement, connect businesses and drive ROI. </Text> <br/>
                <Text>Don’t just take our word for it. Take a look at our customers' results.</Text>

                </Box>
             </Box>
            </Flex>

            <Flex minH={'120vh'} w='100%' bgColor={'#F4FFFD'}>

                <Flex  justifyContent={{'xl':'space-between',}} flexDirection={{'base': "column",'lg': "row",'xl': "row"}}
              w={{'base': "90%",'lg': "86%",'xl': "90%"}} margin={'auto'}>

                <Box   minH='50vh' w={{'base': "100%",'lg': "50%",'xl': "45%"}}>
                    <Text fontSize={'35px'} fontWeight='bold' textColor={'#0354C2'}>90% Engagement Rates</Text> <br/>
                    <Text>We revolutionise the way our customers communicate. Innovation is at the
                         heart of every project - we deliver intranets that stick.</Text>
                </Box>

                <Box minH='50vh' w={{'base': "100%",'lg': "50%",'xl': "45%"}}>
                <Image
                    h={'100%'}
                    w={'100%'}
                    objectFit='contain'
                    src='/image/engagement-rate-image.png'
                    alt='Dan Abramov'
                />

                </Box>

                </Flex>

            </Flex>


            <Flex h={'120vh'} w='100%' bgColor={'#F4FFFD'}>

                <Flex justifyContent={{'xl':'space-between',}} flexDirection={{'base': "column",'lg': "row",'xl': "row"}}
              w={{'base': "90%",'lg': "86%",'xl': "90%"}} margin={'auto'}>

                <Box  minH='50vh' w={{'base': "100%",'lg': "50%",'xl': "45%"}}>
                <Image
                    h={'100%'}
                    w={'100%'}
                    objectFit='contain'
                    src='/image/mobile-adoption-image.png'
                    alt='Dan Abramov'
                />
                
                </Box>

                <Box minH='50vh' w={{'base': "100%",'lg': "50%",'xl': "45%"}}>
               
                      <Text fontSize={'35px' } fontWeight='bold'  textColor={'#0354C2'}>99% Mobile Adoption Rates</Text> <br/>
                      <Text>Our mobile-first solution helps companies worldwide connect their deskless 
                        workforce. We work closely with all clients to make sure employees are on 
                        boarded seamlessly and know how to get the best out of their intranet.</Text>      
      
                </Box>

                </Flex>

                </Flex>

                <Flex minH={'120vh'} w='100%' bgColor={'#F4FFFD'}>

                            <Flex  justifyContent={{'xl':'space-between',}} flexDirection={{'base': "column",'lg': "row",'xl': "row"}}
              w={{'base': "90%",'lg': "86%",'xl': "90%"}} margin={'auto'}>

                            <Box   minH='50vh' w={{'base': "100%",'lg': "50%",'xl': "45%"}}>
                                <Text fontSize={'35px'} fontWeight='bold' textColor={'#0354C2'}>Accessed Daily by over 70% of Employees</Text> <br/>
                                <Text>Thanks to Oak Engage’s intelligent technology, your employees benefit from a
                                    totally immersive and engaging employee experience.</Text>
                                    <Text textColor={'#0354C2'} mt={'6'} borderRadius={'3xl'} h={'12'} w={{'base': "50%",'lg': "50%",'xl': "45%"}}  border={'1px solid #0354C2'}
                                     display='flex' alignItems={'center'} justifyContent='center' fontWeight={'bold'}>Learn more ›</Text>
                            </Box>

                            <Box  minH='50vh' w={{'base': "100%",'lg': "50%",'xl': "45%"}}>
                            <Image
                                h={'100%'}
                                w={'100%'}
                                objectFit='contain'
                                src='/image/intranet-access-image.png'
                                alt='Dan Abramov'
                            />

                            </Box>

                            </Flex>

                    </Flex>


            <Box minH={'70vh'} bg={'#F2F7FB'} pt='10' justifyContent={{'xl':'space-between',}} flexDirection={{'base': "column",'lg': "column",'xl': "row"}}
                    w={{'base': "90%",'lg': "86%",'xl': "90%"}} margin={'auto'}>

             <Box minH={'70vh'}  justifyContent={{'xl':'space-between',}} flexDirection={{'base': "column",'lg': "column",'xl': "column"}}
              w={{'base': "90%",'lg': "86%",'xl': "90%"}} margin={'auto'}>

             <Box minH={'50vh'} textAlign={'center'} w={{'base': "100%",'lg': "50%",'xl': "100%"}}>
                    <Text fontSize={'35px'} fontWeight='bold' textColor={'#0354C2'}>Why choose us?</Text> <br/>
                    <Text>Unlike traditional intranets that fail due to complexity and poor user experience, Oak Engage makes it<br/>
                         easy for your business to communicate. </Text> <br/>
                    <Text>With an average rating of 4.3 stars on G2, industry professionals around the world are reaching their<br/>
                         goals with Oak Engage.</Text>   <br/>    
                    <Box justifyContent={'center'} alignItems='center' display={'flex'} w={{'base': "100%",'lg': "50%",'xl': "100%"}}>

                    <Image
                    h={'20%'}
                    w={'25%'}
                    objectFit='contain'
                    src='/image/4-and-half-stars-01.png'
                    alt='Dan Abramov'
                />
                    </Box>    
       
                </Box>

             </Box>

            </Box>

            <Flex minH={'100vh'}  bgColor={'white'} justifyContent={{'xl':'space-between',}} flexDirection={{'base': "column",'lg': "colum",'xl': "colum"}}
                    w={{'base': "90%",'lg': "86%",'xl': "90%"}} margin={'auto'}>

                <Box textAlign={'center'} mt='7' >
                <Text fontSize={'36px'} fontWeight='bold' textColor={'#0354C2'} >3 reasons why leading enterprises partner with Oak Engage</Text>

                </Box>

                <Flex justifyContent={{'xl':'space-between',}} flexDirection={{'base': "column",'lg': "row",'xl': "row"}}
                    w={{'base': "90%",'lg': "86%",'xl': "90%"}} margin={'auto'} mt='7'>
                    <Box  minH='50vh' w={{'base': "100%",'lg': "50%",'xl': "45%"}}>
                        <Text fontSize={'18px'} textColor='#FE9C39'>Retain Your Workforce</Text>   

                        <Text fontSize={'30px'} fontWeight='bold' textColor={'#0354C2'}>We make your people our priority</Text> <br/>

                        <Text>People are paramount. That’s why we’ve made our product
                             easy to maintain, fully personalised and intuitive. You can 
                             spend less time worrying about employee needs and focus 
                             more on your wider business goals. </Text><br/>

                        <Text>Say goodbye to outdated and complicated systems. With Oak, 
                            you will always have everything you need at your fingertips.</Text>


                        
                    </Box>

                    <Box  minH='50vh' w={{'base': "100%",'lg': "50%",'xl': "45%"}}>
                    <Image
                    h={'100%'}
                    w={'100%'}
                    objectFit='contain'
                    src='/image/branding-image.png'
                    alt='Dan Abramov'
                />
                    </Box>

                </Flex>
            </Flex>



            <Box  minH={'120vh'} w='100%' bgColor={'white'} pt='6'>

                <Flex justifyContent={{'xl':'space-between',}} flexDirection={{'base': "column",'lg': "row",'xl': "row"}}
              w={{'base': "90%",'lg': "86%",'xl': "90%"}} margin={'auto'}>

                    <Box  minH='50vh' w={{'base': "100%",'lg': "50%",'xl': "45%"}}>
                    <Image
                    h={'100%'}
                    w={'100%'}
                    objectFit='contain'
                    src='/image/engagement-image.png'
                    alt='Dan Abramov'
                    />
                    </Box>



                    <Box  minH='50vh' w={{'base': "100%",'lg': "50%",'xl': "45%"}} >
                        <Text fontSize={'18px'} textColor='#039783'>Engage Your Staff</Text>   

                        <Text fontSize={'30px'} fontWeight='bold' textColor={'#0354C2'}>See your engagement rates skyrocket</Text> <br/>

                        <Text>Happy employees are engaged employees. That's why we’ve 
                            designed a platform that can be accessed from a click of a
                             button. </Text><br/>

                        <Text>If you want a simple solution that can be used by, and
                             empowers, your whole workforce then Oak is the perfect
                              solution.</Text>


                        
                    </Box>

               

                </Flex>
            </Box>

            <Box minH={'120vh'} w='100%' bgColor={'white'}>
            <Flex justifyContent={{'xl':'space-between',}} flexDirection={{'base': "column",'lg': "row",'xl': "row"}}
              w={{'base': "90%",'lg': "86%",'xl': "90%"}} margin={'auto'}>
                    <Box  w={{'base': "100%",'lg': "50%",'xl': "45%"}}>
                        <Text fontSize={'18px'} textColor='#17A3E0'>Communicate From Anywhere</Text>   

                        <Text fontSize={'30px'} fontWeight='bold' textColor={'#0354C2'}>Giving you a mobile-first solution</Text> <br/>

                        <Text>Say goodbye to endless email threads and say hello to an 
                            accessible mobile application.  </Text><br/>

                        <Text>Improve communication by giving your deskless workforce a
                             platform they can access from anywhere.</Text>

                             <Text textColor={'#0354C2'} mt={'6'} borderRadius={'3xl'} h={'12'} w={{'base': "70%",'lg': "50%",'xl': "45%"}}  border={'1px solid #0354C2'}
                              display='flex' alignItems={'center'} justifyContent='center' fontWeight={'bold'}>Book a Demo ›</Text>

                        
                    </Box>

                    <Box  w={{'base': "100%",'lg': "50%",'xl': "45%"}}>
                    <Image
                    h={'100%'}
                    w={'100%'}
                    objectFit='contain'
                    src='/image/mobile-app-hub.png'
                    alt='Dan Abramov'
                      />
                    </Box>

                </Flex>

            </Box>

            <Flex minH={'70vh'}  bgColor={'#f8f7f7'} flexDirection={{'base': "column",'lg': "column",'xl': "colum"}}
              w={{'base': "100%",'lg': "86%",'xl': "90%"}} margin={'auto'} wrap="wrap">
                <Box textAlign={'center'} pt='7'>
                    <Text fontSize={'35px'} fontWeight='bold' textColor={'#0354C2'}>Oak features that transform your workplace</Text>
                </Box>

                <Flex minH={{'base': "950px",'lg': "50px",'xl': "50px"}}  flexDirection={{'base': "column",'lg': "column",'xl': "row"}}
                 w={{'base': "100%",'lg': "100%",'xl': "100%"}} margin={'auto'} justify="space-evenly" align={"center"}>
                    <Box h='80%' w={{'base': "90%",'lg': "86%",'xl': "20%"}}  pt='5'bgColor={'white'} boxShadow='dark-lg'  rounded='md' bg={'white'} >
                        <Box  h='30%' w={'25%'} margin='auto' >
                                <Image
                            h={'100%'}
                            w={'100%'}
                            objectFit='contain'
                            src='/image/unnamed-1.png'
                            alt='Dan Abramov'
                            />
                        </Box>
                        <Box h='25%' w={'60%'} margin='auto' textAlign={'center'}>
                            <Text fontSize={'20px'} fontWeight='bold' textColor={'#0354C2'}>Adaptive 
                                Intelligence</Text>
                        </Box>
                        <Box h='37%' w={'95%'} margin='auto' textAlign={'center'}>
                            <Text>Create an immersive and
                                 customisable experience for your 
                                 employees.</Text>
                        </Box>
                    </Box>


                    <Box  h='70%' w={{'base': "90%",'lg': "86%",'xl': "20%"}} pt='7' bgColor={'white'} boxShadow='dark-lg'  rounded='md' bg={'white'} >
                    <Box h='30%' w={'25%'} margin='auto'>
                                <Image
                            h={'100%'}
                            w={'100%'}
                            objectFit='contain'
                            src='/image/chart.png'
                            alt='Dan Abramov'
                            />
                        </Box>
                        <Box  h='25%' w={'60%'} margin='auto' textAlign={'center'}>
                            <Text  fontSize={'21px'} fontWeight='bold' textColor={'#0354C2'}>Measurement</Text>
                        </Box>
                        <Box  h='37%' w={'95%'} margin='auto' textAlign={'center'}>
                            <Text>Gather actionable insights and understand what makes your employees tick.</Text>
                        </Box>
                    </Box>




                    <Box h='80%' w={{'base': "90%",'lg': "86%",'xl': "20%"}} pt='7' bgColor={'white'} boxShadow='dark-lg'  rounded='md' bg={'white'} >
                         <Box h='30%' w={'25%'} margin='auto'>
                                <Image
                            h={'100%'}
                            w={'100%'}
                            objectFit='contain'
                            src='/image/social.png'
                            alt='Dan Abramov'
                            />
                        </Box>
                        <Box  h='25%' w={'60%'} margin='auto' textAlign={'center'}>
                            <Text  fontSize={'18px'} fontWeight='bold' textColor={'#0354C2'}>Enterprise Social Network</Text>
                        </Box>
                        <Box  h='37%' w={'95%'} margin='auto' textAlign={'center'}>
                            <Text>Deliver the information that matters the most to your people, wherever they are.</Text>
                        </Box>
                    </Box>



                    <Box  h='70%' w={{'base': "90%",'lg': "86%",'xl': "20%"}} pt='7' bgColor={'white'} boxShadow='dark-lg'  rounded='md' bg={'white'} >

                    <Box  h='30%' w={'25%'} margin='auto'>
                                <Image
                            h={'100%'}
                            w={'100%'}
                            objectFit='contain'
                            src='/image/modern.png'
                            alt='Dan Abramov'
                            />
                        </Box>
                        <Box  h='25%' w={'60%'} margin='auto' textAlign={'center'}>
                            <Text  fontSize={'17px'} fontWeight='bold' textColor={'#0354C2'}>The Modern Intranet</Text>
                        </Box>
                        <Box  h='37%' w={'95%'} margin='auto' textAlign={'center'}>
                            <Text>Allow your people to access everything they need from one single platform.</Text>
                        </Box>
                    </Box>
                </Flex>
            </Flex>

            <Flex bgColor={'white'} minH='100vh' w={'100%'} pt='9'>

                <Flex justifyContent={{'xl':'space-between'}}  minH='100%' flexDirection={{'base': "column",'lg': "row",'xl': "row"}}
                     w={{'base': "90%",'lg': "86%",'xl': "90%"}} margin={'auto'} >

                    <Box  h='65%'  w={{'base': "90%",'lg': "86%",'xl': "45%"}} boxShadow='dark-lg'  rounded='md' bg={'white'} >
                    <AspectRatio maxW='contain' ratio={1} h='409px'>
                    <iframe
                        title='naruto'
                        src='https://www.youtube.com/embed/QhBnZ6NPOY0'
                        allowFullScreen
                    /> 
                    </AspectRatio>
                    </Box>
                    
                    <Box  minH='80%'   w={{'base': "90%",'lg': "86%",'xl': "45%"}} >

                        <Box h='20%'  >
                        <Image
                            h={'100%'}
                            w={'100%'}
                            objectFit='contain'
                            src='/image/fiveguys (1).png'
                            alt='Dan Abramov'
                            />
                        </Box>     

                        <Box  minH='46%'  w={{'base': "100%",'lg': "86%",'xl': "100%"}} fontWeight='bold' textColor={'#0354C2'}>
                            <Text fontSize={'19'}>“Without Oak & Chatty Patty, I don't know how we would've engaged with our
                                 people, I don't know how we would've reopened our stores and I don't know 
                                 how we'd have retained all those staff members. For us, this has been a huge
                                  success in terms of engagement & communication and continues to be.”</Text>
                        </Box>

                        <Box minH='40%'  w={{'base': "100%",'lg': "86%",'xl': "100%"}}>
                        <Image
                            h={'100%'}
                            w={'100%'}
                            objectFit='cover'
                            src='/image/Screenshot (9).png'
                            alt='Dan Abramov'
                            />
                        </Box>

                    </Box>
                </Flex>

            </Flex>



            <Box bg={'white'} minH='50vh' w={'100%'} pt='9'>

                <Box  h='80%' w={{'base': "100%",'lg': "86%",'xl': "90%"}} margin='auto' textAlign={'center'}>

                    <Text fontSize={'34px'} fontWeight='bold' textColor={'#0354C2'}>See how Oak Engage can work for you</Text> <br/>
                    <Text>Our modern intranet software provides some of the world’s best brands the tools they need to <br/>
                         overcome their biggest challenges. Talk to an expert today and see how Oak Engage can work for you.</Text> <br/>

                         <Text bgColor={'#039684'} h={'12'} w={{'base': "70%",'lg': "86%",'xl': "15%"}} display={'flex'} justifyContent='center' alignItems={'center'} 

                         margin='auto' borderRadius={'3xl'} textColor='white'> Get Started</Text><br/>

                         <i>Get Started With a 30 Minute No Obligation Call.</i>
                </Box>
            </Box>


        </Box>
    </Flex>
  )
}

export default WhyOak
