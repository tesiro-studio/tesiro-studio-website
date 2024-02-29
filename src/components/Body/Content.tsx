import { Center, Flex, VStack, Text } from '@chakra-ui/react';
import React, { forwardRef } from 'react'
import { ChakraBox } from '../Chakra';

interface IContent {
  num: number;
  total: number;
  content: string[],
}

const Content = ({ num, total, content }: IContent, ref: any) => {
  return (
    <ChakraBox
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      // @ts-ignore no problem in operation, although type error appears.
      transition={{
        duration: 0.5,
        ease: "easeInOut",
        delay: 0.3,
      }}
    >
      <VStack alignItems={'flex-start'} gap={{ base: '1rem', lg: '3rem' }} minH={'100%'} w={'100%'}>
        <Flex>
          <Center p={'0.25rem 1.5rem'} border={'0.0625rem solid'} borderColor={'primary.1'} borderRadius={'2rem'}>
            <Text fontSize={{ base: '1rem', lg: '1.5rem' }} lineHeight={1.75} fontWeight={600}>
              <Text color={'primary.1'} as={'span'}>{num}</Text> / {total}
            </Text>
          </Center>
        </Flex>
        <VStack gap={'2rem'} fontSize={{ base: '1rem', lg: '1.5rem' }} lineHeight={1.75} w={'100%'}>
          {content.map(tx => (
            <Text key={tx}>
              {tx}
            </Text>
          ))}
        </VStack>
      </VStack>
    </ChakraBox>
  )
};

export default forwardRef<any, IContent>(Content);
