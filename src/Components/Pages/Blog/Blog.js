import React from 'react';
import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
// import Grid from '@mui/material/Grid';
// import niyet_mektubu from './niyet_mektubu.jpg';
// import motivasyon from './motivasyo.jpg';
// import niyet from './niyet.jpg';
// import is from './is.jpg';
// import cv from './cv.png';
// import Style from './BlogStyle.css';

// import { LinkBox, LinkOverlay } from '@chakra-ui/react';
// import { Heading } from '@chakra-ui/react';
// import { Text } from '@chakra-ui/react';


import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

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
              <>              
      <Box sx={{ width: '100%', maxWidth: 1250, bgcolor:"background.paper"}}>
      <Box sx={{ mx:2 }}>
        <Grid container alignItems="center">
          <Grid item xs>
            <Typography gutterBottom variant="h5" component="div">
              Doktora Başvuruları: Kapsamlı Rehber
            </Typography>
          </Grid>
          <Grid item>
            <Typography gutterBottom variant="h6" component="div">
             16 Nisan 2021
            </Typography>
          </Grid>
        </Grid>
        <Typography color="text.secondary" variant="body2">
        Daha önceki yazılarımda da kısaca bahsettiğim gibi, geçtiğimiz dönem içerisinde 7
        doktora başvurusu yaptım, bunlardan 2 tanesinden ise kabul aldım...
        </Typography>
      </Box>      
      <Box sx={{ m: 2 }}>      
      <Button>Devamını OKu</Button>
      </Box>      
      <Divider variant="middle" />


      <Box sx={{ mx:2,mt:4 }}>
        <Grid container alignItems="center">
          <Grid item xs>
            <Typography gutterBottom variant="h5" component="div">
            Staj Rehberi#2- Niyet Mektubu
            </Typography>
          </Grid>
          <Grid item>
            <Typography gutterBottom variant="h6" component="div">
            2 Haziran 2021
            </Typography>
          </Grid>
        </Grid>
        <Typography color="text.secondary" variant="body2">
        Niyet mektubu, başvurunuz esnasında kendinizi insanlaştırmanızı, başvurudaki ve özgeçmişinizdeki
        bilgileri belli bir bağlam içerisine yerleştirmenizi...
        </Typography>
      </Box>      
      <Box sx={{ m: 2 }}>      
      <Button>Devamını OKu</Button>
      </Box>      
      <Divider variant="middle" />

      <Box sx={{ mx:2,mt:4 }}>
        <Grid container alignItems="center">
          <Grid item xs>
            <Typography gutterBottom variant="h5" component="div">
            Staj Rehberi#1- Özgeçmiş Hazırlama
            </Typography>
          </Grid>
          <Grid item>
            <Typography gutterBottom variant="h6" component="div">
            26 Mayıs 2021
            </Typography>
          </Grid>
        </Grid>
        <Typography color="text.secondary" variant="body2">
        Hayal edin, hedefiniz olan şirkette bir insan kaynakları çalışanı olarak yer alıyorsunuz. Staj başvuru döneminin sonlarına doğru, her gün
         önünüzden onlarca, belki de yüzlerce başvurunun geçtiği haftalar...
        </Typography>
      </Box>      
      <Box sx={{ m: 2 }}>      
      <Button>Devamını OKu</Button>
      </Box>      
      <Divider variant="middle" />

      <Box sx={{ mx:2,mt:4 }}>
        <Grid container alignItems="center">
          <Grid item xs>
            <Typography gutterBottom variant="h5" component="div">
            Lisans Araştırmaları- Giriş Rehberi
            </Typography>
          </Grid>
          <Grid item>
            <Typography gutterBottom variant="h6" component="div">
            26 Mayıs 2021
            </Typography>
          </Grid>
        </Grid>
        <Typography color="text.secondary" variant="body2">
        Bu yazıya küçük bir dipnotla başlamak iyi olacaktır diye düşünüyorum. Elbette
        ki kendime bir araştırmacı diyecek niteliklere sahip değilim...
        </Typography>
      </Box>      
      <Box sx={{ m: 2 }}>      
      <Button>Devamını OKu</Button>
      </Box>      
      <Divider variant="middle" />

      <Box sx={{ mx:2,mt:4 }}>
        <Grid container alignItems="center">
          <Grid item xs>
            <Typography gutterBottom variant="h5" component="div">
              Doktora Başvuruları: Kapsamlı Rehber
            </Typography>
          </Grid>
          <Grid item>
            <Typography gutterBottom variant="h6" component="div">
             16 Nisan 2021
            </Typography>
          </Grid>
        </Grid>
        <Typography color="text.secondary" variant="body2">
        Daha önceki yazılarımda da kısaca bahsettiğim gibi, geçtiğimiz dönem içerisinde 7
        doktora başvurusu yaptım, bunlardan 2 tanesinden ise kabul aldım...
        </Typography>
      </Box>      
      <Box sx={{ m: 2 }}>      
      <Button>Devamını OKu</Button>
      </Box>      
      <Divider variant="middle" />
    </Box>
    </>
            
            
       )
}

export default Blog; 