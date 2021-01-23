/* eslint-disable jsx-a11y/anchor-has-content, jsx-a11y/anchor-is-valid */

import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import { HelmetDatoCms } from 'gatsby-source-datocms';

import '../styles/index.sass';

const TemplateWrapper = ({ children }) =>
  (
    <StaticQuery
      query={graphql`
        query LayoutQuery {
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
        <div className="container">
          <HelmetDatoCms
            favicon={data?.datoCmsSite.faviconMetaTags}
            seo={data?.datoCmsHome.seoMetaTags}
          />
          {children}
        </div>
      )}
    />
  );
export default TemplateWrapper;
/* eslint-enable jsx-a11y/anchor-has-content, jsx-a11y/anchor-is-valid */
