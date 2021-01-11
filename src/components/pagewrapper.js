/* eslint-disable jsx-a11y/anchor-has-content, jsx-a11y/anchor-is-valid*/

import React from "react";
import * as PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import { HelmetDatoCms } from "gatsby-source-datocms";

import "../styles/index.sass";
import Header from "./header";

const PageWrapper = ({ children }) => {
    return (
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
            render={data => (
                <div className='page-wrapper'>
                    <HelmetDatoCms
                        favicon={data.datoCmsSite.faviconMetaTags}
                        seo={data.datoCmsHome.seoMetaTags}
                    />
                    <Header/>
                    <div className="page-wrapper__body">
                        {children}
                    </div>
                </div>
            )}
        />
    );
};

PageWrapper.propTypes = {
    children: PropTypes.object
};

export default PageWrapper;
/* eslint-enable jsx-a11y/anchor-has-content, jsx-a11y/anchor-is-valid*/
