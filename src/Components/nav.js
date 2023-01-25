import {
  Flex,
  IconButton,
  Image,
  Menu,
  MenuButton,
  useColorModeValue,
  useColorMode,
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";

import { useState, } from "react";

const Nav = () => {
  const { colorMode } = useColorMode();
  const [display, changeDisplay] = useState("none");
  const bg = useColorModeValue("#FFFFFF", "#141416");
  const TextColor = useColorModeValue( "#141416","#FFFFFF");

  return (
    
    <Flex w={'100%'} h='65px' 
          color={TextColor}
          position={"fixed"}
          zIndex={'5'}
          top='0'
          bg={bg}
        
          
          >

      <Flex
          justify="space-between"
          // bgColor={"green"}
        margin={'auto'}
      >
        <Flex
          // px="10px"
          w={{ base: "none", lg: "80%", xl: "1300px" }}
          h="63px"
          align={"center"}
          // bgColor="yellow"
          m={"auto"}
          justify={{ base: "none", lg: "space-around", xl: "space-between" }}
        >
          <Link to='/'>
          <Flex w={'30%'} h="50px" pt="0px" align="center" >
            {colorMode === "light" ? (
              <Image
                objectFit="cover"
                src="/image/1-oak-engage-logo-blue.png"
                alt="logo"
                mb={'3'}
                width={"440px"}

              
              />
            ) : (
              <Image
                objectFit="cover"
                src="/image/1-oak-engage-logo-blue.png"
                alt="logo"
                width={"440px"}
                mb={"3"}
              />
            )}
          </Flex>

          </Link>
          <Flex
            fontWeight="extrabold"
            fontSize="17px"
            w="100%"
            display={{ base: "none", lg: "flex", xl: "flex" }}
            align="center"
            justify="space-between"
          >
           <Menu >
                  
                                 <MenuButton bg="transparent" textColor={'#0354C2'}>
                                     <Link to="/WhyOak">Why Oak</Link>
                                    
                                   </MenuButton>
                                     <MenuButton as={Button} bg="transparent" textColor={'#0354C2'}>
                                     Solutions  
                                  </MenuButton>
                  
                                   <MenuButton as={Button} bg="transparent" textColor={'#0354C2'}>
                                   Product
                                </MenuButton>
                  
                                 <MenuButton as={Button} bg="transparent" textColor={'#0354C2'}>
                                 Services
                                
                                 </MenuButton>
                  
                                  <MenuButton as={Button} bg="transparent" textColor={'#0354C2'}>
                                  <Link color='teal.500' href='https://cdnjs.com/libraries/font-awesome'>
                                  Pricing
                                </Link> 
                                </MenuButton>
                  
                                <MenuButton bg="transparent" textColor={'#0354C2'}>
                                  <Link to="/customer">Customers</Link>
                                    
                                </MenuButton>
                  
                                <MenuButton as={Button} bg="transparent" textColor={'#0354C2'}>
                                Resources
                              </MenuButton>
                                <MenuButton as={Button} bg="transparent" textColor={'#0354C2'} bgColor='#ADD9F0' borderRadius={'3xl'} >
                                Get a Demo
                             </MenuButton>
                  </Menu>
           
          </Flex>
          <Flex
          align="center"
          justify="space-between"
          // w={{ base: "none", lg: "10%", xl: "32%" }}s
        >
        

          <IconButton
            size="sm"
            display={{ base: "flex", lg: "none", xl: "none" }}
            as={GiHamburgerMenu}
            onClick={() => changeDisplay("flex")}
          />
            </Flex>

        </Flex>

        
 
      </Flex>

      <Flex
        width={"100vw"}
        h="100vh"
        position="fixed"
        bgColor={"white"}
        zIndex="500"
        top={"0"}
        left={"0"}
        display={display}
        overflowY="auto"
        direction={"column"}
      >
        <Flex justify={"flex-end"}>
          <IconButton
            mt={2}
            mr={10}
            size="sm"
            as={GrClose}
            onClick={() => changeDisplay("none")}
          />
        </Flex>
        <Flex
          direction={"column"}
          // bgColor="black"
          // zIndex="300"
          justify="space-around"
          width={"100%"}
          align={"center"}
        >
            <Menu>
            <MenuButton fontWeight="700" textColor={'#0354C2'}>WhyOak</MenuButton>
                <Link to="/WhyOak"></Link>
          </Menu>

          <Menu>
            <MenuButton fontWeight="700" textColor={'#0354C2'}>Solutions</MenuButton>
           
          </Menu>
          <Menu>
            <MenuButton fontWeight="700" textColor={'#0354C2'}>Features & Integrations</MenuButton>
            
          </Menu>
          <Menu>
            <MenuButton fontWeight="700" textColor={'#0354C2'}>Customers</MenuButton>
            <Link to="/customer" ></Link>

          </Menu>
          <Menu>
            <MenuButton fontWeight="700" textColor={'#0354C2'}>Resources</MenuButton>
          
          </Menu>
          <Menu>
            <MenuButton fontWeight="700" textColor={'#0354C2'}>About</MenuButton>
            
          </Menu>
         
     
          
          
         
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Nav;








// import { Flex,Box,Menu,MenuButton,Button,Text} from '@chakra-ui/react'
// import React from 'react'
// import { Link } from 'react-router-dom'

// function Nav() {
//   return (
//       <Flex bg={'#FEFEFE'} h='70px' w={'100%'} px="5" justify={"space-around"} pos='fixed' zIndex={'5'} top='0'>
        
//             <Box h={'50px'} w='12%'>
//               <Link to="/"><img src='/image/1-oak-engage-logo-blue.png'/> </Link>
//             </Box>
            
//            <Box   display={'flex'}  alignItems={"center"} w={"76%"} justifyContent='space-around'> 
//               <Menu >
                  
//               <Text bg="transparent" textColor={'#0354C2'}>
//                   <Link to="/WhyOak">Why Oak</Link>
                  
//                 </Text>
//                   <MenuButton as={Button} bg="transparent" textColor={'#0354C2'}>
//                   Solutions  
//                 </MenuButton>

//                 <MenuButton as={Button} bg="transparent" textColor={'#0354C2'}>
//                 Product
//               </MenuButton>

//               <MenuButton as={Button} bg="transparent" textColor={'#0354C2'}>
//               Services
              
//                 </MenuButton>

//                 <Text as={Button} bg="transparent" textColor={'#0354C2'}>
//                 <Link color='teal.500' href='https://cdnjs.com/libraries/font-awesome'>
//                 Pricing
//               </Link> 
//                 </Text>

//                 <Text bg="transparent" textColor={'#0354C2'}>
//                   <Link to="/customer">Customers</Link>
                  
//                 </Text>

//                 <MenuButton as={Button} bg="transparent" textColor={'#0354C2'}>
//                 Resources
//               </MenuButton>
//                 <MenuButton as={Button} bg="transparent" textColor={'#0354C2'} bgColor='#ADD9F0' borderRadius={'3xl'} >
//                 Get a Demo
//                 </MenuButton>

//                   </Menu>
//               </Box>
        
//       </Flex>
//   )
// }

// export default Nav
