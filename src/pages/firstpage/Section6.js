import { Box, Flex,Image } from '@chakra-ui/react'
import React from 'react'

function Section6() {
  return (
    <Flex  mt={'20'}>
        <Flex justifyContent={{'xl':'space-between',}} flexDirection={{'base': "column",'lg': "row",'xl': "row"}}
     w={{'base': "90%",'lg': "86%",'xl': "86%"}} margin={'auto'}>

            <Box  minH='50vh' w={{'base': "100%",'lg': "50%",'xl': "45%"}} >

                <Box>
                
                
                <Image
           h={'100%'}
           w='fit-content'
          objectFit='contain'
          src='/image/Screenshot (4).png'
          alt='Dan Abramov'
        />
                </Box>

                
            </Box>



            <Box minH='50vh' w={{'base': "100%",'lg': "50%",'xl': "45%"}} >
                <Box fontSize={'17px'} fontWeight='bold' textColor={'#0354C2'}>Connect colleagues. Create communities. <br/>
                        Champion change.
                </Box> <br/>

                <Box>Oak allows you to form two-way communication with your employees. <br/>
                        This ensures your people have the information they need, when <br/>
                        they need it, driving productivity and performance. Empowered employees <br/>
                        are engaged employees.
                </Box> <br/>

                <Box textColor={'#219387'} fontWeight='bold'>Find out more ›</Box>
            </Box>
        </Flex>
    </Flex>
  )
}

export default Section6
