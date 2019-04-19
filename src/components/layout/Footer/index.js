import React from 'react'

import logo from '../../../../images/logo.svg'
import MailChimpSubscribeModal from '../../fields/Mailchimp'

import { FaTwitter, FaEnvelope, FaBullhorn } from 'react-icons/fa'

import './style.scss';

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
    const { icons } = this.props

    return (
      <footer id="footer">
        <div class="container">
          <div class="brand">
            <a class="logo-wrap" href="#top">
              <h1 class="logo dd2019">Decoupled Days 2019</h1>
            </a>
          </div>
          <div class="info-block">
            <div class="bottom--date">
                <p><strong>July 17th-18 / New York City</strong>
                <br/>John Jay College of Criminal Justice<br/>
                524 W 59th St, New York, NY 10019</p>
            </div>
          </div>
          <ul class="social">
            <li>
              <a class="twitter" href="https://twitter.com/decoupleddays">
                <FaTwitter />
              </a>
            </li>
            <li>
              <a class="email" href="mailto:decoupleddays@gmail.com">
                <FaEnvelope />
              </a>
            </li>
            <li>
              <a class="newsletter" href="#">
                <FaBullhorn />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    )
  }
}

export default Footer
