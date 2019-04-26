import React from 'react'

import Modal from 'react-responsive-modal'
import MailchimpSubscribe from 'react-mailchimp-subscribe'
import Button from '../../fields/Button'

import { Logo, Brand } from '../../layout/Nav'

import logo from '../../../../images/logo.svg'
import './style.scss'

// // use the render prop and your custom form
const CustomForm = ({ status, message, onValidated }) => {
  let email, name
  name = null
  const submit = () => {
    if (name) {
      return true
    }
    if (
      email &&
      email.value.indexOf('@') > -1 &&
      onValidated({
        EMAIL: email.value,
      })
    ) {
      return true
    } else {
      return onValidated({
        EMAIL: email.value,
      })
    }
  }

  return (
    <div className="mailchimp--form-container">
      <div className="mailchimp--logo-container">
        <Logo src={logo} alt="" />
        <Brand>Decoupled Drupal - Newsletter</Brand>
      </div>
      <div>Subscribe to our Newsletter</div>
      {status === 'sending' && (
        <div className="status status--sending">Sending...</div>
      )}
      {status === 'error' && (
        <div className="status status--error">{message}</div>
      )}
      {status === 'success' && (
        <div className="status status--success">{message}</div>
      )}
      <div className="input--container">
        <input
          style={{
            fontSize: '2rem',
            padding: '5px',
            borderRadius: '5px',
            marginBottom: '0.5rem',
          }}
          ref={node => (name = node)}
          type="text"
          placeholder="Name"
        />
        <input
          ref={node => (email = node)}
          style={{
            fontSize: '2rem',
            padding: '5px',
            borderRadius: '5px',
          }}
          type="email"
          placeholder="Email"
        />
      </div>

      <div className="submit-button--container">
        <Button onClick={submit}>Submit</Button>
      </div>
    </div>
  )
}

const MailChimpSubscribeModal = props => {
  const url =
    '//mc.us16.list-manage.com/subscribe/post?u=8f86f6d23b5155add11d536e5&id=58abd481c4'
  return (
    <Modal {...props} classNames={{ modal: 'custom-modal' }} center>
      <MailchimpSubscribe
        url={url}
        render={({ subscribe, status, message }) => (
          <CustomForm
            status={status}
            message={message}
            onValidated={formData => subscribe(formData)}
          />
        )}
      />
    </Modal>
  )
}

export default MailChimpSubscribeModal
