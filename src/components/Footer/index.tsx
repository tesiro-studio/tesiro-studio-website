import { Box, Center, Flex, LinkBox } from '@chakra-ui/react';
import React from 'react'

import EmailImg from '@/assets/email.svg';

const Footer: React.FC = () => {
  return (
    <Flex justifyContent={'flex-end'} pb={'1.5rem'} w={'100%'}>
      <Center>
        <Box
          as='a'
          boxSize={'4rem'}
          bgImage={EmailImg}
          bgPos={'center'}
          bgSize={'contain'}
          bgRepeat={'no-repeat'}
          href={'mailto:hello@tesiro.xyz'}
        />
      </Center>
    </Flex>
  )
};

export default Footer;
