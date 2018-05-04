import React, { Component } from 'react'

import Modal from 'react-responsive-modal'
import MailchimpSubscribe from 'react-mailchimp-subscribe'

const url =
  '//mc.us16.list-manage.com/subscribe/post?u=8f86f6d23b5155add11d536e5&id=58abd481c4'

// // use the render prop and your custom form
// const CustomForm = () => (
//   <MailchimpSubscribe
//     url={url}
//     render={({ subscribe, status, message }) => (
//       <div>
//         <MyForm onSubmitted={formData => subscribe(formData)} />
//         {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
//         {status === "error" && <div style={{ color: "red" }}>{message}</div>}
//         {status === "success" && <div style={{ color: "green" }}>Subscribed !</div>}
//       </div>
//     )}
//   />
// )

const MailChimpSubscribeModal = props => (
  <Modal {...props} center>
    <MailchimpSubscribe url={url} />
  </Modal>
)

export default MailChimpSubscribeModal
