import React from 'react'
import { graphql } from 'gatsby'
import PageWrapper from "../components/pagewrapper";
import Stage from "../components/Stage";

const TestNode = ({ data: { testNode } }) => (
    <PageWrapper>
        <Stage />
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
