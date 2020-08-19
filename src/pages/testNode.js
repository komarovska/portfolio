import React from 'react'
import { graphql } from 'gatsby'
import PageWrapper from "../components/pagewrapper";

const TestNode = ({ data: { testNode } }) => (
    <PageWrapper>
      {/*<article className="sheet">*/}
      {/*  <div className="sheet__inner">*/}
      {/*    <h1 className="sheet__test__title">{testNode.label}</h1>*/}
      {/*  </div>*/}
      {/*</article>*/}
    </PageWrapper>
);

export default TestNode;

export const query = graphql`
  query TestNodeQuery {
    testNode: datoCmsTestNode {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      label
    }
  }
`;
