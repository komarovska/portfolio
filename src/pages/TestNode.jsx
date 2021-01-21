import React from 'react';
import { graphql } from 'gatsby';
import PageWrapper from '../components/PageWrapper';
import Stage from '../components/Stage';
import TechnologiesSection from "../components/TechnologiesSection";

const TestNode = ({ data: { testNode } }) => (
// const TestNode = () => (
  <PageWrapper>
    <Stage />
    <TechnologiesSection />
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
