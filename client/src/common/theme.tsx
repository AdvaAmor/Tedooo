import { ThemeProvider } from 'styled-components';


type ThemeProps = {
  children: React.ReactElement;
};

export const themeColors = {
  colors:{
    blue:{
      light: '#0A66C2'
  },
  grey: {
    light: '#949796',
    hover: '#f4f6f5',
  },
  background: {
    page: '#f6f8f7',
    img: '#B8C248',
  },
  green: '#2DB8A1',
  white: '#fff',
  black: '#1a1a1a',
  disable:'#F4F5F5',
  }
};

export default function Theme({children}:ThemeProps){
  return <ThemeProvider theme={themeColors}>{children}</ThemeProvider>
};
