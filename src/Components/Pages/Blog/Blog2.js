// import React from "react";
// import Style from './BlogStyle.css';

// // import { useToast } from '@chakra-ui/react'
// // import { EmailIcon } from '@chakra-ui/icons'
// // import {
// //   FormControl,
// //   FormLabel,
// //    FormHelperText,
// //    Button,
// //    Input,
// //    InputGroup,
// //    InputLeftElement,
// // } from '@chakra-ui/react'
// // import { Grid, GridItem } from '@chakra-ui/react'
// // import { Box } from '@chakra-ui/react'


// import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
// import Grid from '@mui/material/Grid';

// const Item = styled(Paper)(({ theme }) => ({
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

// function Blog2(){
//     return(
//         <>        
//        {/* <Grid
//   h='200px'
//   templateRows='repeat(2, 1fr)'
//   templateColumns='repeat(5, 1fr)'
//   gap={4}
//   className='containerBlog'
// >
//   <GridItem rowSpan={2} colSpan={1} bg='tomato'> <Box bg='tomato' height='80px'>HELLO</Box>
//   </GridItem>
//   <GridItem colSpan={2} bg='papayawhip' />
//   <GridItem colSpan={2} bg='papayawhip' />
//   <GridItem colSpan={4} bg='tomato' />
//   </Grid> */}
//         /** */
//         <Box sx={{ flexGrow: 1 }}>
//         <Grid container spacing={3}>
//           <Grid item xs>
//             <Item>xs</Item>
//           </Grid>
//           <Grid item xs={6}>
//             <Item>xs=6</Item>
//           </Grid>
//           <Grid item xs>
//             <Item>xs</Item>
//           </Grid>
//         </Grid>
//       </Box>
//       </>
//     )

// }
// export default Blog2;

<Item>
                     <Img alt="complex" src={niyet}  />
                     <a href='#' id='hov' className="effect-shine">Doktora Başvuruları: Kapsamlı Rehber</a>
                     <p>Daha önceki yazılarımda da kısaca bahsettiğim gibi, geçtiğimiz dönem içerisinde 7 doktora başvurusu yaptım, bunlardan 2 tanesinden ise kabul aldım...</p>
                     <p>Yazar:  <strong>Alperen Keleş</strong>  16 Nisan 2021</p></Item>


//* ******* */

import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import niyet_mektubu from './niyet_mektubu.jpg';
import motivasyon from './motivasyo.jpg';
import niyet from './niyet.jpg';
import is from './is.jpg';
import cv from './cv.png';
import Style from './BlogStyle.css';

import { Text } from '@chakra-ui/react';
import { Link } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Image } from '@chakra-ui/react';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const Img = styled('img')({
       margin: 'auto',
       display: 'block',
       width:"500px",
       maxWidth: '100%',
       maxHeight: '100%',
       paddingBottom:'5%',
     });
const Blog = () => {
       return (
              <div className='contain'>
              <Box sx={{ flexGrow: 1 }}>
              <Grid  container spacing={2}>
              <Grid item xs={12}>
                  <Item>
                     <Img alt="complex" src={is}  />
                     <a href='#' id='hov' className="effect-shine" >Doktora Başvuruları: Kapsamlı Rehber</a>
                     <p>Daha önceki yazılarımda da kısaca bahsettiğim gibi, geçtiğimiz dönem içerisinde 7 doktora başvurusu yaptım, bunlardan 2 tanesinden ise kabul aldım...</p>
                     <p>Yazar:  <strong>Alperen Keleş</strong>  16 Nisan 2021</p></Item>
                </Grid>
                <Grid item xs={12}>
                  <Item>
                  <Img alt="complex" src={niyet_mektubu}  />
                     <a href='#' id='hov' className="effect-shine">Staj Rehberi#2- Niyet Mektubu</a>
                     <p>Niyet mektubu, başvurunuz esnasında kendinizi insanlaştırmanızı, başvurudaki ve özgeçmişinizdeki bilgileri belli bir bağlam içerisine yerleştirmenizi...</p>
                     <p>Yazar:  <strong>Alperen Keleş</strong>  2 Haziran 2021</p>

                  </Item>
                </Grid>
                <Grid item xs={12}>
                  <Item>
                     <Img alt="complex" src={motivasyon}  />
                     <a href='#' id='hov' className="effect-shine">Lisans Araştırmaları- Giriş Rehberi</a>
                     <p>Bu yazıya küçük bir dipnotla başlamak iyi olacaktır diye düşünüyorum. Elbette ki kendime bir araştırmacı diyecek niteliklere sahip değilim...</p>
                     <p>Yazar:  <strong>Alperen Keleş</strong>  26 Mayıs 2021</p>
                     </Item>
                </Grid>
                <Grid item xs={12}>
                  <Item>
                     <Img alt="complex" src={cv}  />
                     <a href='#' id='hov' className="effect-shine">Staj Rehberi#1- Özgeçmiş Hazırlama</a>
                     <p>Hayal edin, hedefiniz olan şirkette bir insan kaynakları çalışanı olarak yer alıyorsunuz. Staj başvuru döneminin sonlarına doğru, her gün önünüzden onlarca, belki de yüzlerce başvurunun geçtiği haftalar...</p>
                     <p>Yazar:  <strong>Alperen Keleş</strong>  26 Mayıs 2021</p>
                  </Item>
                </Grid>
                <Grid item xs={8}>                 
                  <Box p={4} display={{ md: 'flex' }}>
                    <Box flexShrink={0}>
                      <Image
                        borderRadius='lg'
                        width={{ md: 40 }}
                        src='https://bit.ly/2jYM25F'
                        alt='Woman paying for a purchase'
                      />
                    </Box>
                    <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
                      <Text
                        fontWeight='bold'
                        textTransform='uppercase'
                        fontSize='sm'
                        letterSpacing='wide'
                        color='teal.600'
                      >
                        Marketing
                      </Text>
                      <Link
                        mt={1}
                        display='block'
                        fontSize='lg'
                        lineHeight='normal'
                        fontWeight='semibold'
                        href='#'
                      >
                        Finding customers for your new business
                      </Link>
                      <Text mt={2} color='gray.500'>
                        Getting a new business off the ground is a lot of hard work. Here are five
                        ideas you can use to find your first customers.
                      </Text>
                    </Box>
                  </Box>
                </Grid>
                
              </Grid>
            </Box>
            </div>
       )
}

export default Blog; 