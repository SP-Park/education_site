import { m } from 'framer-motion';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Button, Container, Typography, Grid, Link, Stack } from '@mui/material';
// components
import Image from '../../components/Image';
import Iconify from '../../components/Iconify';
import TextIconLabel from '../../components/TextIconLabel';
import { MotionViewport, varFade } from '../../components/animate';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(10, 0),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(15, 0),
  },
}));

// ----------------------------------------------------------------------

export default function HomeTalk() {
  return (
    <RootStyle>
      <Container component={MotionViewport}>
        <Grid container alignItems="center" justifyContent="space-between" spacing={{ xs: 8, md: 3 }}>
          <Grid item xs={12} md={5} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <m.div variants={varFade().inDown}>
              <Typography variant="h3" sx={{ mb: 2, color: '#353535' }}>
                온라인과 오프라인
              </Typography>  
              <Typography variant="h2" sx={{ mt: 2, mb: 5 }}>
                커뮤니티를 통해 <br />
                친구를 사귀어 <br /> 보세요.
              </Typography>
            </m.div>

            <m.div variants={varFade().inDown}>
              <Button
                color="inherit"
                size="large"
                variant="outlined"
                target="_blank"
                rel="noopener"
                href="https://happycloude-react-slack-43056.web.app/"
                endIcon={<Iconify icon={'ic:round-arrow-right-alt'} />}
              >
                커뮤니티 방문
              </Button>
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
                src="/images/hometalk.jpg"
                sx={{ borderRadius: '20px' }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
