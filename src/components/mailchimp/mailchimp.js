import React, { Component } from 'react'

import Modal from 'react-responsive-modal'
import MailchimpSubscribe from 'react-mailchimp-subscribe'
import Button from '../button/button'

import './modal-styles.css'

const url =
  '//mc.us16.list-manage.com/subscribe/post?u=8f86f6d23b5155add11d536e5&id=58abd481c4'

// // use the render prop and your custom form
const CustomForm = ({ status, message, onValidated }) => {
  let email
  const submit = () => {
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
    <div
      style={{
        borderRadius: 2,
        padding: 10,
        display: 'inline-block',
      }}
    >
      {status === 'sending' && <div style={{ color: 'blue' }}>sending...</div>}
      {status === 'error' && <div style={{ color: 'red' }}>{message}</div>}
      {status === 'success' && <div style={{ color: 'green' }}>{message}</div>}
      <input
        style={{ fontSize: '2em', padding: 5 }}
        ref={node => (email = node)}
        type="email"
        placeholder="Your email"
      />
      <br />
      <Button onClick={submit}>Submit</Button>
    </div>
  )
}

const MailChimpSubscribeModal = props => (
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

export default MailChimpSubscribeModal
