import { VStack } from '@chakra-ui/react';
import React from 'react'

import BgImg from '@/assets/studio-bg.webp';
import Header from '@/components/Header';
import Body from '@/components/Body';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <VStack
      w={'100vw'}
      h={'100vh'}
      bgImg={BgImg}
      bgRepeat={'no-repeat'}
      bgPos={'center'}
      bgSize={'cover'}
      px={{ base: '2rem', lg: '4rem' }}
    >
      <Header />
      <Body />
      <Footer />
    </VStack>
  )
};

export default App;
