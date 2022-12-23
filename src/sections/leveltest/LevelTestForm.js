import { m } from 'framer-motion';
// @mui
import { Button, Typography, TextField, Stack, Container, Box, Grid, Alert, } from '@mui/material';
// components
import { MotionViewport, varFade } from '../../components/animate';
// firebase
import { requestTest } from '../../apis/firebase'
import { useEffect, useRef, useState } from 'react';

import emailjs from '@emailjs/browser';
import { LoadingButton } from '@mui/lab';

// ----------------------------------------------------------------------

export default function LevelTestForm() {
  // const [request, setRequest] = useState({})
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault()
    setLoading(true)
    // console.log(form.current)
    const data = new FormData(e.currentTarget)
    const email = data.get('user_email')
    const name = data.get('user_name')
    const phone = data.get('user_phone')
    const message = data.get('message')
    if(!email || !name || !phone) {
        setError('모든 항목을 입력해 주세요!')
        setLoading(false)
        return 
    }
    const request = {
      email,
      name,
      phone,
      message
    }
    requestTest(request)
    emailjs.sendForm(
      process.env.REACT_APP_SERVICE_ID, 
      process.env.REACT_APP_TEMPLATE_ID, 
      form.current, 
      process.env.REACT_APP_PUBLIC_KEY
      )
      .then((result) => {
          console.log(result.text);
          setLoading(false)
          alert('신청이 완료 되었습니다. 담당자가 연락 드리도록 하겠습니다. 감사합니다.')
          e.target.reset()
      }, (error) => {
          console.log(error.text);
          setLoading(false)
      });
  };

  useEffect(() => {
    if(!error) return
    setTimeout(() => {
        setError('')
    }, 3000)
  }, [error])


  const form = useRef();
  return (
    <Stack component={MotionViewport} spacing={5} 
      sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center'
      }}
    >
      <m.div variants={varFade().inUp}>
        <Typography variant="h3">
          10분간 일본어와 한국어로 대화합니다. <br />
          한국어 학습기간, 배우는 동기에 대해 대화합니다.
        </Typography>
      </m.div>
      <Box ref={form} component='form' noValidate onSubmit={sendEmail} >
        <TextField margin='normal' fullWidth label='email' name='user_email' type='email' autoComplete='off' autoFocus/>
        <TextField margin='normal' fullWidth label='name' name='user_name' type='name' autoComplete='off' />
        <TextField margin='normal' fullWidth label='phone' name='user_phone' type='phone' autoComplete='off' />
        <TextField margin='normal' multiline rows={4} fullWidth label='message' name='message' type='message' />
        {error && <Alert sx={{ mt:3}} severity='error'>{error}</Alert>}
        <LoadingButton loading={loading} type='submit' fullWidth variant='contained' color='secondary' sx={{ mt:3, mb:2 }}>신청하기</LoadingButton>
      </Box>

    </Stack>
    
  );
}
