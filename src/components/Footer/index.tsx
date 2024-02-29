import { Box, Center, Flex, Image } from '@chakra-ui/react';
import React from 'react'

import EmailImg from '@/assets/email.svg';

const Footer: React.FC = () => {
  return (
    <Flex justifyContent={'flex-end'} pb={'1.5rem'} w={'100%'}>
      <Center>
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
