import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { HelmetDatoCms } from 'gatsby-source-datocms';

import '../styles/index.sass';
import Header from './Header';

const PageWrapper = ({ children }) => (
  <StaticQuery
    query={graphql`
        query PageWrapperQuery {
          datoCmsSite {
            globalSeo {
              siteName
            }
            faviconMetaTags {
              ...GatsbyDatoCmsFaviconMetaTags
            }
          }
          datoCmsHome {
            seoMetaTags {
              ...GatsbyDatoCmsSeoMetaTags
            }
            introTextNode {
              childMarkdownRemark {
                html
              }
            }
            copyright
          }
          allDatoCmsSocialProfile(sort: { fields: [position], order: ASC }) {
            edges {
              node {
                profileType
                url
              }
            }
          }
        }
      `}
    render={(data) => (
      <div className="page-wrapper">
        <HelmetDatoCms
          favicon={data.datoCmsSite.faviconMetaTags}
          seo={data.datoCmsHome.seoMetaTags}
        />
        <div className="header-container">
          <Header />
        <div className="page-wrapper__body">{children}</div>
        </div>
      </div>
    )}
  />
);

export default PageWrapper;
