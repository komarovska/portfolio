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
        <Header />

        {/* <div className="container__sidebar"> */}
        {/*    <div className="sidebar"> */}
        {/*        <h6 className="sidebar__title"> */}
        {/*            <Link to="/">{data.datoCmsSite.globalSeo.siteName}</Link> */}
        {/*        </h6> */}
        {/*        <div */}
        {/*            className="sidebar__intro" */}
        {/*            dangerouslySetInnerHTML={{ */}
        {/*                __html: */}
        {/*                data.datoCmsHome.introTextNode.childMarkdownRemark.html */}
        {/*            }} */}
        {/*        /> */}
        {/*        <ul className="sidebar__menu"> */}
        {/*            <li> */}
        {/*                <Link to="/">Home</Link> */}
        {/*            </li> */}
        {/*            <li> */}
        {/*                <Link to="/about">About</Link> */}
        {/*            </li> */}
        {/*        </ul> */}
        {/*        <p className="sidebar__social"> */}
        {/* {data.allDatoCmsSocialProfile.edges.map(({ node: profile }) => ( */}
        {/*                <a */}
        {/*                    key={profile.profileType} */}
        {/*                    href={profile.url} */}
        {/*                    target="blank" */}
        {/*                    className={`social social--${profile.profileType.toLowerCase()}`} */}
        {/*                > */}
        {/*                    {" "} */}
        {/*                </a> */}
        {/*            ))} */}
        {/*        </p> */}
        {/*        <div className="sidebar__copyright"> */}
        {/*            {data.datoCmsHome.copyright} */}
        {/*        </div> */}
        {/*    </div> */}
        {/* </div> */}
        <div className="page-wrapper__body">{children}</div>
      </div>
    )}
  />
);

export default PageWrapper;
