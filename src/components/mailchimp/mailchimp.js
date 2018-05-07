import React, { Component } from 'react'
import styled from 'styled-components'

import Modal from 'react-responsive-modal'
import MailchimpSubscribe from 'react-mailchimp-subscribe'
import Button from '../button/button'

import { Logo, Brand } from '../nav/nav'

import logo from '../../../images/logo.svg'
import './modal-styles.css'

import { colors } from '../../colors'

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
    <FormContainer>
      <LogoContainer>
        <Logo src={logo} alt="" />
        <Brand>Decoupled Drupal - Newsletter</Brand>
      </LogoContainer>
      {status === 'sending' && <Sending>Sending...</Sending>}
      {status === 'error' && <Error>{message}</Error>}
      {status === 'success' && <Success>{message}</Success>}
      <InputsContainer>
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
      </InputsContainer>

      <SubmitButtonContainer>
        <SubmitButton onClick={submit}>Submit</SubmitButton>
      </SubmitButtonContainer>
    </FormContainer>
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

const FormContainer = styled.div`
  border-radius: 2px;
  padding: 10px;
  padding-bottom: 0;
`

const Status = styled.div`
  padding: 5px;
  border-radius: 5px;
  margin-bottom: 10px;
  border: 2px solid;
`

const Sending = Status.extend`
  color: ${colors.veniceBlue};
  background-color: ${colors.onahau};
`

const Error = Status.extend`
  border-color: ${colors.fire};
  color: ${colors.fire};
  background-color: ${colors.romantic};
`

const Success = Status.extend`
  color: ${colors.jewel};
  background-color: ${colors.aeroBlue};
`

const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const SubmitButton = Button.extend`
  margin: 0;
  margin-top: 0.5rem;
`

const SubmitButtonContainer = styled.div`
  text-align: right;
`

const LogoContainer = styled.div`
  text-align: center;
  padding-bottom: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`
