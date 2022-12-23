// @mui
import { styled } from '@mui/material/styles';
import { Divider } from '@mui/material';
// components
import Page from '../components/Page';
import { CultureGuide, CultureHero } from '../sections/culture';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(8),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(11),
  },
}));

// ----------------------------------------------------------------------

export default function Culture() {
  return (
    <Page title="Culture">
      <RootStyle>
        <CultureHero />
        <Divider orientation="vertical" sx={{ my: 7, mx: 'auto', width: 2, height: 20 }} />
        <CultureGuide />
        <Divider orientation="vertical" sx={{ my: 7, mx: 'auto', width: 2, height: 20 }} />

      </RootStyle>
    </Page>
  );
}
