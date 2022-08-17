import React from 'react';
import { Html, useProgress } from "@react-three/drei";
// import { CircularProgress } from '@mui/material';
// import { createTheme, ThemeProvider } from '@mui/material/styles';

function Loader3D() {
  const { progress } = useProgress();
  // const theme = createTheme({
  //   palette: {
  //     primary: {
  //       main: '#BB6F9C',
  //       darker: '#BB6F9C',
  //     },
  //   },
  // });
    
  return (
    <>
        <Html style={{width: '100%', height: '100%'}} position={[-0.7,0,0]}>
            <section className='section_loader'>
              {
                `${Math.round(progress)}%`
              }!
              {/* <ThemeProvider theme={theme}>
                  <CircularProgress variant={'determinate'} value={progress} color='primary' size={50}/>
              </ThemeProvider> */}
            </section>
        </Html>
    </>
  )
}

export default Loader3D