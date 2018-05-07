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
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
        <InfoContainer>
          <Copywrite>
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
`
const Logo = styled.img`
  width: 70px;
  margin-bottom: 10px;
`

const Title = styled.p`
  text-transform: uppercase;
  font-size: 1.25rem;
  font-weight: bold;
`

const SubTitle = styled.p`
  font-size: 1.1rem;
  letter-spacing: 0.75px;
`

const Map = styled.div``

const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
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

const Copywrite = styled.div``

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
