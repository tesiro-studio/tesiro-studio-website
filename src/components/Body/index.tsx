import { Flex, Img, Text, VStack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion';

import ArrowBtn from '@/assets/arrow-btn.svg';
// import ScrollBtn from '@/assets/scroll.png';
import Content from './Content';

const Body: React.FC = () => {
  const [content, setContent] = useState(1);

  const handleContent = () => {
    setContent(num => {
      const newVal = num + 1;
      if (num >= 3) {
        return 1;
      }
      return newVal;
    })
  }
  const render = () => {
    if (content === 1) {
      return (
        <Content
          key={'1'}
          num={1}
          total={3}
          content={[
            'Tesiro Studio is a game development studio specializing in the combination of decentralization, privacy, and Web3 technologies.',
            'The studio is dedicated to creating games based on blockchain technology, aiming to provide players with a more secure, privacy-focused, and decentralized gaming experience.',
          ]}
        />
      );
    }
    if (content === 2) {
      return (
        <Content
          key={'2'}
          num={2}
          total={3}
          content={[
            'In the games developed by Tesiro Studio, players can ensure the security and transparency of game data through blockchain technology, while enjoying the true ownership of game assets and transaction freedom brought by decentralized platforms',
            'Additionally, Tesiro Studio emphasizes privacy protection, employing advanced encryption techniques and privacy protocols to ensure that players\' personal information and game data are fully protected.',
          ]}
        />
      );
    }
    return (
      <Content
        key={'3'}
        num={3}
        total={3}
        content={['By integrating with Web3 technology, Tesiro Studio strives to create innovative and forward-thinking gaming experiences, offering players more diverse and enjoyable gameplay, and actively promoting the development and innovation of the blockchain gaming industry.']}
      />
    )
  }

  useEffect(() => {
    const timer = setInterval(() => {
      handleContent();
    }, 5000);
    return () => {
      clearInterval(timer);
    }
  }, []);

  return (
    <VStack w={'100%'} flex={1} py={'5rem'} alignItems={'flex-start'}>
      <Flex fontSize={{ base: '1.5rem', lg: '4.25rem' }} lineHeight={1.5} fontWeight={600} alignItems={'center'} gap={'1.75rem'}>
        <Text>TESIRO STUDIO</Text>
        <Img src={ArrowBtn} w={{ base: '3.25rem', lg: '5.75rem' }} h={'auto'} />
      </Flex>
      <Flex flex={1} pt={'3rem'} justifyContent={'flex-end'} w={'100%'}>
        <VStack w={'100%'} maxW={'50rem'} gap={0} h={'100%'} pos={'relative'}>
          <AnimatePresence mode={'wait'}>
            {render()}
          </AnimatePresence>
          {/* <Center pos={'absolute'} bottom={0} left={0} right={0}>
            <Box
              bgColor={'primary.1'}
              borderRadius={'2rem'}
              cursor={'pointer'}
              bgImage={ScrollBtn}
              w={'2.5rem'}
              h={'3rem'}
              bgSize={'contain'}
              bgPos={'center'}
              bgRepeat={'no-repeat'}
              onClick={handleContent}
            />
          </Center> */}
        </VStack>
      </Flex>
    </VStack>
  )
};

export default Body;
