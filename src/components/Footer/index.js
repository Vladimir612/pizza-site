import React from 'react'
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa'
import {
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcons,
  SocialIconLink,
} from './FooterElements'

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/'>Pizza</SocialLogo>
            <SocialIcons>
              <SocialIconLink
                to='/'
                target='_blank'
                aria-label='Facebook'
                rel='noopener norefferer'
              >
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink
                to='/'
                target='_blank'
                aria-label='Instagram'
                rel='noopener norefferer'
              >
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink
                to='/'
                target='_blank'
                aria-label='Youtube'
                rel='noopener norefferer'
              >
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink
                to='/'
                target='_blank'
                aria-label='Twitter'
                rel='noopener norefferer'
              >
                <FaTwitter />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer
