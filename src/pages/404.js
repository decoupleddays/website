import React from 'react';
import Link from '../components/fields/Link';
import Layout from '../components/layout/Layout';

const NotFoundPage = () => (
  <Layout>
    <h1>
      Oops, maybe a little <i>too</i> decoupled...
    </h1>
    <p>
      Head back <Link to="/">home</Link> and try again.
    </p>
  </Layout>
);

export default NotFoundPage;
