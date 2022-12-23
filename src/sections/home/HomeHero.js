import { m } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { styled } from '@mui/material/styles';
import { Button, Box, Link, Container, Typography, Stack } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
// routes
import { PATH_DASHBOARD } from '../../routes/paths';
// components
import Image from '../../components/Image';
import Iconify from '../../components/Iconify';
import TextIconLabel from '../../components/TextIconLabel';
import { MotionContainer, varFade } from '../../components/animate';

// ----------------------------------------------------------------------

const RootStyle = styled(m.div)(({ theme }) => ({
  position: 'relative',
  backgroundColor: theme.palette.grey[400],
  [theme.breakpoints.up('md')]: {
    top: 0,
    left: 0,
    width: '100%',
    height: '100vh',
    display: 'flex',
    position: 'fixed',
    alignItems: 'center',
  },
}));

const ContentStyle = styled((props) => <Stack spacing={5} {...props} />)(({ theme }) => ({
  zIndex: 10,
  maxWidth: 520,
  margin: 'auto',
  textAlign: 'center',
  position: 'relative',
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(15),
  [theme.breakpoints.up('md')]: {
    margin: 'unset',
    textAlign: 'left',
  },
}));

const HeroOverlayStyle = styled(m.img)({
  zIndex: 9,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute'
});

const HeroImgStyle = styled(m.img)(({ theme }) => ({
  top: 0,
  right: 0,
  bottom: 0,
  zIndex: 0,
  width: '100%',
  height: '100%',  // lg 이하 크기 조절함 추가
  margin: 'auto',
  position: 'absolute',
  [theme.breakpoints.up('lg')]: {
    right: 0,          // '8%'
    width: 'auto',
    height: '100vh',     // 원래 수치 '48vh'
  },
}));

// ----------------------------------------------------------------------

export default function HomeHero() {
  return (
    <MotionContainer>
      <RootStyle>
        <HeroImgStyle
          alt="hero"
          src="images/background.png"
          variants={varFade().inUp}
        />
        {/* <Box sx={{ position: 'absolute', bottom: 0 }}>
          <m.div variants={varFade().inDown}>
            <m.div animate={{ y: [-10, -15, 0] }} transition={{ duration: 8, repeat: Infinity }}>
              <Image
                disabledEffect
                alt="sidebar"
                src={'images/people.png'}
              />
            </m.div>
          </m.div>
        </Box> */}
        <Box sx={{ position: 'absolute', bottom: 0 }}>
          <m.div variants={varFade().inDown}>
            <m.div animate={{ y: [-10, -15, 0] }} transition={{ duration: 8, repeat: Infinity }}>
              <Image
                disabledEffect
                alt="sidebar"
                src={'images/woman.png'}
              />
            </m.div>
          </m.div>
        </Box>
        <Container>
          <ContentStyle>
            <m.div variants={varFade().inRight}>
              <Typography variant="h1" sx={{ color: 'common.white' }}>
                <Typography component="span" variant="h1" sx={{ color: 'primary.main' }}>
                  &nbsp;한국어와 영어 <br />
                </Typography>
                  가성비 있는 가격으로 배워보세요.
              </Typography>
            </m.div>

            <m.div variants={varFade().inRight}>
              <Typography sx={{ color: 'common.white' }}>
                미국인, 한국인 선생님들이 친절하고 자세하게 가르쳐 드립니다.
              </Typography>
            </m.div>

            <Stack spacing={2.5} alignItems="center" direction={{ xs: 'column', md: 'row' }}>
              <m.div variants={varFade().inRight}>
                <TextIconLabel
                  icon={
                    // <Image
                    //   alt="sketch icon"
                    //   src="https://minimal-assets-api.vercel.app/assets/images/home/ic_sketch_small.svg"
                    //   sx={{ width: 20, height: 20, mr: 1 }}
                    // />
                    <LinkedInIcon  sx={{ color: 'white', mr: 1 }}/>
                  }
                  value={
                    <Link
                      href="https://www.linkedin.com/in/tony-shin-336845205/"
                      target="_blank"
                      rel="noopener"
                      color="common.white"
                      sx={{ typography: 'body2' }}
                    >
                      LinkedIn
                    </Link>
                  }
                />
              </m.div>

              <m.div variants={varFade().inRight}>
                <TextIconLabel
                  icon={
                    <TwitterIcon sx={{ color: 'white', mr: 1 }} />
                  }
                  value={
                    <Link
                      href="https://www.linkedin.com/in/tony-shin-336845205/"
                      target="_blank"
                      rel="noopener"
                      color="common.white"
                      sx={{ typography: 'body2' }}
                    >
                      Twitter
                    </Link>
                  }
                />
              </m.div>
            </Stack>

            {/* <m.div variants={varFade().inRight}>
              <Button
                size="large"
                variant="contained"
                component={RouterLink}
                to={PATH_DASHBOARD.root}
                startIcon={<Iconify icon={'eva:flash-fill'} width={20} height={20} />}
              >
                Live Preview
              </Button>
            </m.div> */}

            <Stack spacing={2.5}>
              <m.div variants={varFade().inRight}>
                <Typography variant="overline" sx={{ color: 'primary.light' }}>
                  Available For
                </Typography>
              </m.div>

              <Stack direction="row" spacing={1.5} justifyContent={{ xs: 'center', md: 'flex-start' }}
                sx={{ width: 35, height: 35 }}
              >
                {['ic_korea', 'ic_america', 'ic_england'].map((resource) => (
                  <m.img
                    key={resource}
                    variants={varFade().inRight}
                    src={`icons/${resource}.ico`}
                  />
                ))}
              </Stack>
            </Stack>
          </ContentStyle>
        </Container>
      </RootStyle>
      <Box sx={{ height: { md: '100vh' } }} />
    </MotionContainer>
  );
}
