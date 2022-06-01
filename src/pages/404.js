import React from 'react';
import Link from '../components/fields/Link';
import SiteLayout from '../components/siteLayout';
import MetaTitle from '../components/meta/title';
import SEO from '../components/meta/seo';

const NotFoundPage = () => (
  <SiteLayout>
    <SEO title="Page not found" />
    <article className="text-neutral-900 prose lg:prose-xl prose-h1:font-parityDisplay prose-headings:font-parityDisplay prose-headings:text-blue-700 marker:text-neutral-400">
      <h1>
        Oops,
        <br />
        maybe a little <i>too</i> decoupled...
      </h1>
      <p>
        Head back <Link to="/">home</Link> and try again.
      </p>
    </article>
  </SiteLayout>
);

export default NotFoundPage;
