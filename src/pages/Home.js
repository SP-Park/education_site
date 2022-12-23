// @mui
import { Divider } from '@mui/material';
import { styled } from '@mui/material/styles';
import HomeGood from 'src/sections/home/HomeGood';
import HomeMerit from 'src/sections/home/HomeMerit';
// components
import Page from '../components/Page';
// sections
import {
  HomeHero,
  HomeBook,
  HomeTalk,
  HomeMinimal,
  HomeDarkMode,
  HomeLookingFor,
  HomeTestimonials,
  HomeColorPresets,
  HomePricingPlans,
  HomeAdvertisement,
  HomeCleanInterfaces,
  HomeHugePackElements,
  HomeTeacher,
} from '../sections/home';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(() => ({
  height: '100%',
}));

const ContentStyle = styled('div')(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative',
  backgroundColor: theme.palette.background.default,
}));

// ----------------------------------------------------------------------

export default function HomePage() {
  return (
    <Page title="Learning Korean">
      <RootStyle>
        <HomeHero />
        <ContentStyle>
          <HomeMinimal />
          <Divider orientation="vertical" sx={{ my: 7, mx: 'auto', width: 2, height: 20 }} />
          <HomeMerit />
          <HomeTeacher />
          <Divider orientation="vertical" sx={{ my: 7, mx: 'auto', width: 2, height: 20 }} />
          <HomeGood />
          <Divider orientation="vertical" sx={{ my: 13, mx: 'auto', width: 2, height: 20 }} />
          <HomeBook />
          <Divider orientation="vertical" sx={{ my: 7, mx: 'auto', width: 2, height: 20 }} />
          <HomeTestimonials />
          <Divider orientation="vertical" sx={{ my: 7, mx: 'auto', width: 2, height: 20 }} />
          <HomeTalk />
          <br />
          <HomeAdvertisement />
        </ContentStyle>
      </RootStyle>
    </Page>
  );
}
