import { Flex,Box,Link,Image} from '@chakra-ui/react'
import React from 'react'
import {FaFacebookF,FaTwitter,FaInstagram} from 'react-icons/fa'
import {GrLinkedinOption} from 'react-icons/gr'

function Footer() {
  return (
   
    <Flex mt={'5%'} bgColor="#FFFFFF" minH={'70vh'} >
        <Box justifyContent={{'xl':'space-between',}} flexDirection={{'base': "column",'lg': "column",'xl': "row"}}
            w={{'base': "90%",'lg': "86%",'xl': "90%"}} margin={'auto'} >

            <Flex margin={'auto'} wrap="wrap" minH='30px' w={'100%'} justifyContent='space-between' mt={'3'} >

                <Box h='27vh' w={{"base":"50%","lg":"11%","xl":"11%"}} >
                    <Box   fontSize={'18px'} textColor='#0354C2' fontWeight={'bold'}>Product</Box> <br/>
                    <Link>Core Features</Link> <br/>
                    <Link>Covid 19 Features</Link> <br/>
                </Box>

                <Box  h='27vh' w={{"base":"50%","lg":"15%","xl":"15%"}}>
                <Box  fontSize={'18px'} textColor='#0354C2' fontWeight={'bold'}>Services</Box> <br/>
                    <Link>Intranet Design</Link> <br/>
                    <Link>Employee Onboarding & Support</Link> <br/>
                </Box>


                <Box  h='27vh' w={{"base":"50%","lg":"15%","xl":"15%"}} >

                <Box fontSize={'18px'} textColor='#0354C2' fontWeight={'bold'}>Customert</Box> <br/>
                    <Link>Customer Stories</Link> <br/>
                    <Link>Resources</Link> <br/>
                    <Link>Pricing</Link>
                </Box>


                <Box  h='27vh' w={{"base":"50%","lg":"15%","xl":"15%"}} >
                <Box fontSize={'18PX'} textColor='#0354C2' fontWeight={'bold'}>Oak Engage</Box> <br/>
                    <Link>About Us</Link> <br/>
                    <Link>FAQs</Link>  <br/>  
                    <Link>Contact</Link>    
                </Box>


                <Box   h='27vh' w={{"base":"50%","lg":"15%","xl":"15%"}} >
                <Box fontSize={'15PX'} textColor='#0354C2' fontWeight={'bold'}>Existing Customers</Box> <br/>
                    <Link>Oak Support</Link> <br/>
                    <Link>Oak Status Update</Link>
                </Box>


                <Box   minH={{"base":"10vh","lg":"27vh","xl":"27vh"}} w={{"base":"100%","lg":"20%","xl":"20%"}}>
                <Box mt={{"base":"5%","lg":"5%","xl":"20%"}} display={'flex'}  h='10vh' w={'100%'} justifyContent='space-around' alignItems={'center'}>
                <Link bgColor={'#F7F7F8'} borderRadius='50%'  h='8vh' w={'18%'} display='flex' justifyContent={'center'} alignItems='center'><FaFacebookF/></Link>
                    <Link bgColor={'#F7F7F8'} borderRadius='50%'  h='8vh' w={'18%'}  display='flex' justifyContent={'center'} alignItems='center'><FaTwitter/></Link>
                    <Link bgColor={'#F7F7F8'} borderRadius='50%' h='8vh' w={'18%'}  display='flex' justifyContent={'center'} alignItems='center'><FaInstagram/></Link>
                    <Link bgColor={'#F7F7F8'} borderRadius='50%' h='8vh' w={'18%'}  display='flex' justifyContent={'center'} alignItems='center'><GrLinkedinOption/></Link>
                </Box>
                   

                </Box>

            </Flex>

            <Box mt={'7%'}>
            <Box  w='100%' border={'.1px solid #F7F7F8'}></Box>

            </Box>

            {/* <Box  mt='10' h={'10vh'} w='100%' bgColor={"yellow"}>
            <Box h={'5%'} w='12%'>
                <img src='/image/1-oak-engage-logo-blue.png'/>
            </Box>

            </Box> */}

            <Flex minH={'50vh'} justifyContent={{'xl':'space-between',}} flexDirection={{'base': "column",'lg': "flex",'xl': "column"}}
            w={{'base': "100%",'lg': "90%",'xl': "90%"}}  alignItems= {{"base":"center","lg":"center","xl":"flex"}}  >
               <Box alignItems={{"base":"center","lg":"flex","xl":"flex-start"}} >
               <Image 
                src='/image/1-oak-engage-logo-blue.png'
                h={"50px"}
                w="100px"
                />
               </Box>
           <Flex justifyContent={{'xl':'space-between',}} flexDirection={{'base': "column",'lg': "column",'xl': "row"}}
            w={{'base': "90%",'lg': "70jn%",'xl': "90%"}}>

           <Box m={"auto"} w={{"base":"90%","lg":"100%","xl":"43%"}} textAlign={{"base":"center","lg":"center","xl":"flex-start"}}
            fontSize={{"base":"14px","lg":"20%px","xl":"13px"}}  >© Oak Engage 2022. All rights reserved. <br/>
                View our website privacy policy here and our application privacy policy here.
            </Box>
            <Box minH={'13vh'} w={{"base":"100%","lg":"30%","xl":"30%"}}  alignItems={{"base":"center","lg":"flex","xl":"flex-end"}} >



                <Image 
                src='/image/certification-logos.png'
                h={"50px"}
                w="100px"
                />
            </Box>
           </Flex>

            </Flex>


        </Box>

    </Flex>
  )
}

export default Footer
