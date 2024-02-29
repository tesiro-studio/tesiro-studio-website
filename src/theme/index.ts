import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        fontSize: '16px',
        fontFamily: 'Poppins',
        background: '#000',
        color: '#fff',
        overflow: 'hidden',
      },
    },
  },
  colors: {
    primary: {
      1: '#00F19B',
    },
    font: {
      1: '#EED1CD',
      2: '#EED1CD32',
      3: '#87796F',
      4: '#BDA281',
      5: '#441F04',
      6: '#BDAF8D',
      7: '#FFB800',
    },
  },
});
