import { m } from 'framer-motion';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Button, Container, Typography, Grid } from '@mui/material';
// components
import Image from '../../components/Image';
import Iconify from '../../components/Iconify';
import { MotionViewport, varFade } from '../../components/animate';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(10, 0),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(15, 0),
  },
}));

// ----------------------------------------------------------------------

export default function CultureGuide() {
  return (
    <RootStyle>
      <Container component={MotionViewport}>
        <Grid container alignItems="center" justifyContent="space-between" spacing={{ xs: 8, md: 3 }}>
          <Grid item xs={12} md={4} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <m.div variants={varFade().inDown}>
              <Typography variant="h3" component="div" sx={{ color: 'text.disabled' }}>
                외지에선 누군가 낯설죠
              </Typography>
            </m.div>

            <m.div variants={varFade().inDown}>
              <Typography variant="h2" sx={{ mt: 2, mb: 5 }}>
                현지 강사님에게 도움을 받으세요.
              </Typography>
            </m.div>

            <m.div variants={varFade().inDown}>
              <Typography variant="h4" sx={{ textAlign: 'center', mb: 5, color: '#999999' }}>
                위급시 도움도 받거나 만나서 친분을 쌓아보세요.
              </Typography>
            </m.div>
          </Grid>

          <Grid item xs={12} md={7}>
            <Box
              component={m.div}
              variants={varFade().inUp}
              sx={{
                mb: { xs: 3, md: 0 },
              }}
            >
              <Image
                disabledEffect
                alt="rocket"
                src="/images/culture1.png"
                sx={{ borderRadius: 20 }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
