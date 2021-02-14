import React, { useState } from 'react'

import MailChimpSubscribeModal from '../../fields/Mailchimp'

import { FaTwitter, FaEnvelope, FaBullhorn } from 'react-icons/fa'
import './style.scss'
const Footer = () => {
  const [open, setOpen] = useState(false)

  const clickIcon = e => {
    e.preventDefault()
    setOpen(true)
  }

  const onCloseModal = () => {
    setOpen(false)
  }

  return (
    <footer id="footer">
      <div className="container">
        <div className="brand-and-info">
          <a className="brand logo-bg" href="#top">
            <span className="logo-alt-text">Decoupled Days 2021</span>
          </a>
          <div className="info-block">
            <div className="bottom--date">
              <strong>July 14th - 15th</strong><br/>
              Virtual Event!
            </div>
          </div>
        </div>
        <ul className="social">
          <li>
            <a
              className="twitter"
              href="https://twitter.com/decoupleddays"
              title="Twitter"
            >
              <FaTwitter />
            </a>
          </li>
          <li>
            <a
              className="email"
              href="mailto:decoupleddays@gmail.com"
              title="Email"
            >
              <FaEnvelope />
            </a>
          </li>
          <li>
            <button
              onClick={clickIcon}
              className="newsletter"
              title="Subscribe to Newsletter"
            >
              <FaBullhorn />
            </button>
          </li>
        </ul>
      </div>
      <MailChimpSubscribeModal open={open} onClose={onCloseModal} />
    </footer>
  )
}

export default Footer
