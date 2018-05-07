import React from 'react'
import { Logo } from '../components/nav/nav'
import Link from '../components/link/link'

import logo from '../../images/logo.svg'

const NotFoundPage = () => (
  <div>
    <Logo src={logo} />
    <h1>
      Oops, maybe a little <i>too</i> decoupled...
    </h1>
    <p>
      Head back <Link to="/">home</Link> and try again.
    </p>
  </div>
)

export default NotFoundPage
