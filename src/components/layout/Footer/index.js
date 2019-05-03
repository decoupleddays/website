import React, { useState } from 'react'

import MailChimpSubscribeModal from '../../fields/Mailchimp'

import { FaTwitter, FaEnvelope, FaBullhorn } from 'react-icons/fa'

import './style.scss'

const Footer = () => {
  const [open, setOpen] = useState(false)

  const clickIcon = e => {
    e.preventDefault()
    setOpen(true)
    console.log(open)
  }

  const onCloseModal = () => {
    setOpen(false)
  }

  return (
    <footer id="footer">
      <div className="container">
        <div className="brand">
          <a className="logo-wrap" href="#top">
            <h1 className="logo dd2019">Decoupled Days 2019</h1>
          </a>
        </div>
        <div className="info-block">
          <div className="bottom--date">
            <p>
              <strong>July 17-18th / New York City</strong>
              <br />
              John Jay College of Criminal Justice
              <br />
              524 W 59th St, New York, NY 10019
            </p>
          </div>
        </div>
        <ul className="social">
          <li>
            <a className="twitter" href="https://twitter.com/decoupleddays">
              <FaTwitter />
            </a>
          </li>
          <li>
            <a className="email" href="mailto:decoupleddays@gmail.com">
              <FaEnvelope />
            </a>
          </li>
          <li>
            <button onClick={clickIcon} className="newsletter">
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
