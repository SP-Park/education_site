// @mui
import { styled } from '@mui/material/styles';
import { Divider } from '@mui/material';
// components
import Page from '../components/Page';
import { BusinessHero, BusinessMinimal } from '../sections/business';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(8),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(11),
  },
}));

// ----------------------------------------------------------------------

export default function Business() {
  return (
    <Page title="Business">
      <RootStyle>
        <BusinessHero />
        <BusinessMinimal />
        <Divider orientation="vertical" sx={{ my: 7, mx: 'auto', width: 2, height: 20 }} />

      </RootStyle>
    </Page>
  );
}
