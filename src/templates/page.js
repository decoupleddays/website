import React from "react"

const PageTemplate = ({data}) => {
  const node = data.nodePage
  return (
    <div>
      <h1>{node.title}</h1>
      <div
        dangerouslySetInnerHTML={{ __html:node.body.processed}}
      />
    </div>
  );
}

export default PageTemplate

export const query = graphql`
  query PageTemplate($slug: Int!) {
    nodePage(nid: {eq: $slug}) {
      title
      body {
        processed
      }
    }
  }
`