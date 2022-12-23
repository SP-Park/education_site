// @mui
import { styled } from '@mui/material/styles';
import { Box, Grid, Switch, Container, Typography, Stack } from '@mui/material';
// _mock_
// import { _pricingPlans } from '../_mock';
import { PlanFreeIcon, PlanStarterIcon, PlanPremiumIcon } from '../assets';
// components
import Page from '../components/Page';
// sections
import { PricingPlanCard } from '../sections/pricing';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  minHeight: '100%',
  backgroundColor: theme.palette.grey[400],
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(10),
}));


const pricingPlans = [
  {
    subscription: '주 5일 10분',
    icon: <PlanFreeIcon />,
    price: 11000,
    caption: 'Basic',
    lists: [
      { text: '3 개월 수강 할인: 5%', isAvailable: true },
      { text: '6 개월 수강 할인: 15%', isAvailable: true },
      { text: '수업 연장, 보충 가능', isAvailable: true },
      { text: '수업 시간: AM 06 ~ PM 11', isAvailable: true },
      { text: '수강증', isAvailable: true },
    ],
    labelAction: 'choose basic',
  },
  {
    subscription: '주 5일 20분',
    icon: <PlanStarterIcon />,
    price: 16000,
    caption: '2분 추가 제공',
    lists: [
      { text: '3 개월 수강 할인: 5%', isAvailable: true },
      { text: '6 개월 수강 할인: 15%', isAvailable: true },
      { text: '수업 연장, 보충 가능', isAvailable: true },
      { text: '수업 시간: AM 06 ~ PM 11', isAvailable: true },
      { text: '수강증', isAvailable: true },
    ],
    labelAction: 'choose starter',
  },
  {
    subscription: '주 5일 30분',
    icon: <PlanPremiumIcon />,
    price: 21000,
    caption: 'saving 30% a year',
    lists: [
      { text: '3 개월 수강 할인: 5%', isAvailable: true },
      { text: '6 개월 수강 할인: 15%', isAvailable: true },
      { text: '수업 연장, 보충 가능', isAvailable: true },
      { text: '수업 시간: AM 06 ~ PM 11', isAvailable: true },
      { text: '수강증', isAvailable: true },
    ],
    labelAction: 'choose premium',
  },
];

// ----------------------------------------------------------------------

export default function Pricing() {
  return (
    <Page title="Pricing">
      <RootStyle>
        <Container>
          <Typography variant="h3" align="center" paragraph>
            합리적이고 유연한 가격
            {/* <br /> community&apos;s size and needs */}
          </Typography>
          <Typography align="center" sx={{ color: 'text.secondary', mb: 2 }} >
            Choose your plan and speak Korean
          </Typography>

          <Box sx={{ my: 5 }}>
            {/* <Stack direction="row" alignItems="center" justifyContent="flex-end">
              <Typography variant="overline" sx={{ mr: 1.5 }}>
                MONTHLY
              </Typography>
              <Switch />
              <Typography variant="overline" sx={{ ml: 1.5 }}>
                YEARLY (save 10%)
              </Typography>
            </Stack> */}
            <Typography variant="caption" align="right" sx={{ color: 'text.secondary', display: 'block' }}>
              * 부가세 별도
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {pricingPlans.map((card, index) => (
              <Grid item xs={12} md={4} key={card.subscription}>
                <PricingPlanCard card={card} index={index} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </RootStyle>
    </Page>
  );
}
