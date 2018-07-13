import React from "react"

const SponsorTemplate = ({data}) => {
  const node = data.nodeSponsors
  return (
    <div>
      <h1>{node.title}</h1>
      <div
        dangerouslySetInnerHTML={{ __html:node.body.processed}}
      />
    </div>
  );
}

export default SponsorTemplate

export const query = graphql`
  query SponsorTemplate($slug: Int!) {
    nodeSponsors(nid: {eq: $slug}) {
      title
      body {
        processed
      }
    }
  }
`