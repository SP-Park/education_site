// @mui
import { styled } from '@mui/material/styles';
import { Grid, Container } from '@mui/material';
// components
import Page from '../components/Page';
import { LevelTestHero, LevelTestForm } from '../sections/leveltest';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(8),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(11),
  },
}));

// ----------------------------------------------------------------------

export default function LevelTest() {
  return (
    <Page title="Level Test">
      <RootStyle>
        <LevelTestHero />
        <Container sx={{ my: 10 }}>
            <LevelTestForm />
        </Container>
      </RootStyle>
    </Page>
  );
}
