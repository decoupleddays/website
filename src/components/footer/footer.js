import React from 'react'
import styled from 'styled-components'
import GoogleMapWrapper from '../google-map/google-map'

import { colors } from '../../colors'

import logo from '../../../images/logo.svg'
import MailChimpSubscribeModal from '../mailchimp/mailchimp'

class Footer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      modalOpen: false,
    }

    this.clickIcon = this.clickIcon.bind(this)
    this.onCloseModal = this.onCloseModal.bind(this)
  }

  clickIcon(e) {
    if (e.currentTarget.dataset.socialType !== 'subscribe') return
    e.preventDefault()
    this.openModal()
  }

  openModal() {
    this.setState({
      modalOpen: true,
    })
  }

  onCloseModal() {
    this.setState({ modalOpen: false })
  }

  render() {
    const { siteTitle, icons } = this.props

    return (
      <FooterContainer>
        <Masthead>
          <Logo src={logo} />
          <Title>Decoupled Drupal Days</Title>
          <SubTitle>Aug. 17-19, 2018</SubTitle>
          <SubTitle>John Jay College of Criminal Justice</SubTitle>
          <SubTitle>524 W 59th St, New York, NY 10019</SubTitle>
        </Masthead>
        <GoogleMapWrapper
          isMarkerShown
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDonIHksW-ojse_U1MgieeLIpkbIbm_MGs&v=3.exp"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
        <InfoContainer>
          <Copywrite>
          <svg height="20" width="30" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36.79 15.98"><title>Mediacurrent-logo-small</title><path d="M26.73,7.41c-3.37,0-4.6,2.46-5.34,3.77h-.07c-.15-1.9-.59-3.77-4.07-3.77-3.2,0-4.47,2.54-5.08,3.66H12.1V7.41l-6,.81V9c1.34,0,2.53.3,2.53,2.73v3.24c1.2-.33,2.36-.63,3.55-.9.3-2,1.49-4.55,3.91-4.55,1.3,0,1.67,1,1.78,3.74a26.88,26.88,0,0,1,3.59,0,.56.56,0,0,1,.22,0c.57-1.82,1.84-3.77,3.67-3.77s1.83,1.09,1.83,4.6c1.15.26,2.31.52,3.43.82V13.34C30.61,9.53,30.34,7.41,26.73,7.41Z" transform="translate(-0.37 -7.41)" fill="#02263" />
          <path d="M30.61,16.55a46.64,46.64,0,0,0-9.15-1.67l-1.89,0a54.43,54.43,0,0,0-19.2,4,76,76,0,0,1,8.29-1.68v2.5c0,2.35-.59,2.95-2.53,2.95v.75h8.24v-.75c-1.71,0-2.24-.6-2.24-2.95V16.77c2-.18,3.91-.29,5.81-.29v3.2c0,2.35-.52,2.95-2.24,2.95v.75h7.91v-.75c-1.75,0-2.24-.6-2.24-2.95V16.55a32.73,32.73,0,0,1,5.81.94v2.2c0,2.36-.48,2.95-2.24,2.95v.75h8.24v-.75c-2,0-2.54-.59-2.54-2.95V18.3c1.42.33,2.87.72,4.44,1.05s2.2-.52,2.06-1.12C35.71,17.93,30.61,16.55,30.61,16.55Z" transform="translate(-0.37 -7.41)"  fill="#02263"/>
          <path d="M33.93,23.31v-.55h-.21v-.07h.5v.07H34v.55Z" transform="translate(-0.37 -7.41)"  fill="#02263" />
          <path d="M34.3,23.31v-.62h.13l.14.44a.23.23,0,0,1,0,.09l0-.1.15-.43h.11v.62h-.08v-.52l-.18.52h-.08l-.18-.53v.53Z" transform="translate(-0.37 -7.41)"  fill="#02263" />
          </svg>
          This site was designed and built by Mediacurrent<br/>
            © 2018 DECOUPLED DRUPAL DAYS ALL RIGHTS RESERVED
          </Copywrite>
          <SocialIconsList>
            {icons.map(({ node }, i) => (
              <SocialIcon key={i}>
                <a
                  href={node.url}
                  data-social-type={node.id}
                  dangerouslySetInnerHTML={{ __html: node.icon }}
                  target="_blank"
                  onClick={this.clickIcon}
                />
              </SocialIcon>
            ))}
          </SocialIconsList>
        </InfoContainer>
        <MailChimpSubscribeModal
          open={this.state.modalOpen}
          onClose={this.onCloseModal}
        />
      </FooterContainer>
    )
  }
}

export default Footer

const FooterContainer = styled.footer`
  box-shadow: 0px -1px 5px 0px rgba(0, 0, 0, 0.5);
  padding-top: 15px;
  color: ${colors.veniceBlue};
`

const Masthead = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'League Spartan';
  margin-bottom: 1.5rem;
`
const Logo = styled.img`
  width: 70px;
  margin-bottom: 10px;
`

const Title = styled.p`
  text-transform: uppercase;
  font-size: 1.25rem;
`

const SubTitle = styled.p`
  font-size: 1rem;
  letter-spacing: 0.75px;
  margin-bottom: 0;
`

const Map = styled.div``

const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  max-width: 960px;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    height: auto;
    padding: 0.75rem;
    justify-content: center;
    text-align: center;
  }
`

const Copywrite = styled.div`
  font-size: .8em;
`

const SocialIconsList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`

const SocialIcon = styled.li`
  padding: 0 10px;
  margin: 0;
`
