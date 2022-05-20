import { graphql } from 'gatsby';

export const sponsorFragment = graphql`fragment sponsorFragment on node__sponsors {
  title
  body {
    processed
  }
  path {
    alias
  }
  field_sponsor_level
  link: field_sponsor_link {
    uri
  }
  r: relationships {
    logo: field_sponsor_logo {
      url
      gatsbyImage(width: 10)
    }
  }
}
`;
