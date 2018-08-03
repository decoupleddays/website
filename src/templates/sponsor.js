import React from "react"
import styled from 'styled-components'

const SponsorContainer = styled.div`
  display: flex
  align-items: center
`
const SponsorLogo = styled.div`
  margin-right: 30px
  text-align: center
  p {
    font-size: 1.1rem
  }
`

const SponsorTemplate = ({data}) => {
  const node = data.nodeSponsors
  return (
    <SponsorContainer>
      <SponsorLogo>
        <img src={node.r.logo.localFile.childImageSharp.sizes.src} alt={node.title} />
        <p>is a proud {node.level} sponsor!</p>
      </SponsorLogo>
      <div className="sponsor-content">
        <h1>{node.title}</h1>
        <div
          dangerouslySetInnerHTML={{ __html:node.body.processed}}
        />
        <div className="sponsor-link">
          For more information go to <a href={node.link.uri}>{node.link.uri}</a>
        </div>
      </div>
    </SponsorContainer>
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
      link:field_sponsor_link {uri}
      level:field_sponsor_level
      r:relationships {
        logo:field_sponsor_logo {
          localFile{childImageSharp{sizes(maxWidth: 250){src}}}
        }
      }
    }
  }
`
