import { Flex, Text } from '@chakra-ui/react';
import React from 'react'
import { ChakraBox } from '@/components/Chakra';

const Header: React.FC = () => {
  return (
    <ChakraBox
      w={'100%'}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      // @ts-ignore no problem in operation, although type error appears.
      transition={{
        duration: 1,
        delay: 0.5,
        ease: "easeInOut",
      }}
    >
      <Flex py={{ base: '1rem', lg: '1.5rem' }} borderBottom={'0.0625rem solid'} borderColor={'#ffffff27'}>
        <Text fontSize={{ base: '1rem', lg: '1.5rem' }} lineHeight={1.5} fontWeight={600}>TesXro STUDIO</Text>
      </Flex>
    </ChakraBox>
  )
};

export default Header;
