import { m } from 'framer-motion';
// @mui
import { Box, Container, Typography, Grid } from '@mui/material';
// components
import Image from '../../components/Image';
import { MotionViewport, varFade } from '../../components/animate';

// ----------------------------------------------------------------------

export default function HomeTeacher() {
  return (
    <Container component={MotionViewport} sx={{ mt: 10 }}>
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={8}>
          <m.div variants={varFade().inDown}>
            <Typography variant="h2" sx={{ textAlign: 'center', mb: 1, color: '#353535' }}>
              재밌는 강사님과
            </Typography>
            <Typography variant="h1" sx={{ textAlign: 'center', mb: 2 }}>
              대화하니 실력도 쑥~
            </Typography>
            <Typography variant="h4" sx={{ textAlign: 'center', mb: 5, color: '#999999' }}>
              한국인 선생님과 재미있게 마음편히 공부하세요.
            </Typography>
          </m.div>
        </Grid>
      </Grid>

      <Box
        sx={{
          mb: 10,
          position: 'relative',
          display: 'flex',
          borderRadius: 2,
          overflow: 'hidden',
          justifyContent: 'center'
        }}
      >
        <Image
          src="/images/teacher.jpg"
          alt="teacher"
          effect="black-and-white"
          sx={{ width: 600, height: 600, borderRadius: 20 }}
        />

      </Box>


    </Container>
  );
}
