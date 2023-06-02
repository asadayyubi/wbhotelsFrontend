import { Button, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Container, LoginBottom, LoginBox, LoginInner, LoginInput, LoginMid, LoginTop, MenuBox } from './index.sty';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css'
import MobileScreenShareOutlinedIcon from '@mui/icons-material/MobileScreenShareOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import TranslateOutlinedIcon from '@mui/icons-material/TranslateOutlined';
import PlagiarismOutlinedIcon from '@mui/icons-material/PlagiarismOutlined';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import { useNavigate } from 'react-router-dom';

const MyAccountPage = () => {

  const [ value, setValue ] = useState();

  const navigate = useNavigate();

  const pages = [ "Download Android App", "Log in or create an account", "Play & win", "Invite & Earn", "Switch language", "Guest policy", "Partner with WB", "Call us"]

  const icons = [<MobileScreenShareOutlinedIcon/>, <ExitToAppOutlinedIcon/>, <SportsEsportsOutlinedIcon/>, <PersonAddAltOutlinedIcon/>, <TranslateOutlinedIcon/>, <PlagiarismOutlinedIcon/>, <AddBoxOutlinedIcon/>, <CallOutlinedIcon/>]

  return (
    <Container>
      <LoginBox>
        <Typography variant='h1' style={{ padding: '1rem', fontWeight: 'bold', margin: '5rem auto'}}>My Account</Typography>
        {pages.map((page, ind) => {
          return (<MenuBox key={ind}>
                  <Typography variant='h1' style={{ alignItems: 'center', display: 'flex'}} onClick={() => navigate('/login')} >{icons[ind]}<span style={{width: '2rem'}} />{page}</Typography>
                </MenuBox>)
        }
        )}
        {/* <LoginMid>
          <LoginInner>
            <Typography style={{fontWeight: 'bold', fontSize: '2.8rem'}}>Log in or create an account</Typography>
            <LoginInput>
              <PhoneInput
                placeholder="Enter phone number"
                value={value}
                onChange={setValue}
              />
            </LoginInput>
            <Button variant='contained' disabled style={{ margin: '2rem 0 0.5rem 0'}}>Continue</Button>
            <Typography style={{color: '#a3a3a3'}} >We will send you a 4-digit code via SMS to verify your mobile number.</Typography>
          </LoginInner>
        </LoginMid>
        <Typography variant='h2' textAlign={'center'} style={{margin: "0 auto 2rem auto"}} >or</Typography>
        <LoginBottom>
          <Button variant='outlined' fullWidth style={{color: "#000000", fontSize: '1.5rem', fontWeight: 'bold', padding: '1.5rem'}} color='info' >One tap login with Truecaller</Button>
          <Typography style={{margin: "0.8rem auto", color: '#a3a3a3'}} >You should have the truecaller app installed on this phone</Typography>
        </LoginBottom> */}
      </LoginBox>
    </Container>
  )
}

export default MyAccountPage