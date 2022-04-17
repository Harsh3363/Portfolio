import React from 'react'
import styled, { keyframes, ThemeProvider } from 'styled-components'
import {DarkTheme} from './Themes';


import LogoComponent from '../subComponent/LogoComponents';
import SocialIcons from '../subComponent/SocialIcons';
import PowerButton from '../subComponent/PowerButton';
import ParticleComponent from '../subComponent/ParticleComponent';
import BigTitle from '../subComponent/BigTitle'
import astronaut from '../assets/Images/spaceman.png'

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height:100vh;
position: relative;
overflow: hidden;
`
const float = keyframes`
0% { transform: translateY(-10px) }
50% { transform: translateY(15px) translateX(15px) }
100% { transform: translateY(-10px) }

`
const Spaceman = styled.div`
position: absolute;
top: 10%;
right: 5%;
width: 20vw;
animation: ${float} 4s ease infinite;
img{
    width: 100%;
    height: auto;
}
`
const Main =  styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 50vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
 backdrop-filter: blur(4px);
  
  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;
  font-family: 'Ubuntu Mono', monospace;
  font-style: italic;
`




const AboutPage = () => {
    return (
        <ThemeProvider theme={DarkTheme}>
<Box>

<LogoComponent theme='dark'/>
<SocialIcons theme='dark'/>
<PowerButton />
<ParticleComponent theme='dark' />

        <Spaceman>
            <img src={astronaut} alt="spaceman" />
        </Spaceman>    
        <Main>
        <p>
        <li>
        Undergraduate from NMIT, Batch of '24.
        </li>
        <ul>
        <li>
        Self taught developer who build Websites and DApp, engage with the community and create content.
        </li>
        <li>
        Facts about me: Living one day at a time, with my lappy. Okay. And with a coffee.
        </li>
        <li>
        Time Zone: Indian Standard Time (GMT+5:30)
        </li>
        </ul>
        </p>
        {/* I'm a front-end developer from India. I love to create websites.
<br /> <br/>
I'm interested in Web3 trying new things and building great projects. I love to write blogs and watch anime.
<br/> <br/> */}
        </Main>

        <BigTitle text="ABOUT" top="10%" left="5%" />


        </Box>

        </ThemeProvider>
        
    )
}

export default AboutPage