import { Box, Center, Flex, Image } from '@chakra-ui/react';
import React from 'react'

import EmailImg from '@/assets/email.svg';
import Tags from './Tags';

const Footer: React.FC = () => {
  return (
    <Flex position={'relative'} overflowX={'hidden'} justifyContent={'flex-end'} pb={'1.5rem'} w={'100%'}>
      <Tags />
      <Center pr={{ base: '2rem', lg: '4rem'}}>
        <Box
          as='a'
          href={'mailto:hello@tesiro.xyz'}
        >
          <Image src={EmailImg} w={'4rem'} />
        </Box>
      </Center>
    </Flex>
  )
};

export default Footer;
