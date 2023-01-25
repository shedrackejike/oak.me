import { Box, Flex,Image } from '@chakra-ui/react'
import React from 'react'

function Section5() {
  return (
 
    <Flex mt={'20'}>
       <Flex  justifyContent={{'xl':'space-between',}} flexDirection={{'base': "column",'lg': "row",'xl': "row"}}
            w={{'base': "90%",'lg': "86%",'xl': "90%"}} margin={'auto'} >

          
        <Box minH='50vh' w={{'base': "100%",'lg': "50%",'xl': "45%"}} >
        <Box fontSize={'2xl'} fontWeight='bold' textColor={'#0354C2'}>Right message. Right people. Right time.</Box>  <br/>
        <Box>Oak cuts through the noise and stops your employees being overloaded with <br/>
            irrelevant information. You can spend less time worrying about how <br/>
            employees are receiving your messages and more time making the content<br/>
             compelling and engaging.
            </Box> <br/>
            <Box textColor={'#219387'} fontWeight='bold'>Find out more ›</Box>
   
        </Box >
        <Box minH='50vh' w={{'base': "100%",'lg': "50%",'xl': "45%"}} >


             <Image
           h={'100%'}
           w='fit-content'
          objectFit='contain'
          src='/image/nw-quote-c1.png'
          alt='Dan Abramov'
        />
         </Box>
  
        </Flex>
    </Flex>
  )
}

export default Section5
