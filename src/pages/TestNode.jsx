import React from 'react';
import { graphql } from 'gatsby';
import PageWrapper from '../components/PageWrapper';
import Stage from '../components/Stage';
import TechnologiesSection from "../components/TechnologiesSection";
import Projects from "../components/Projects";

const TestNode = ({ data: { testNode } }) => (
// const TestNode = () => (
  <PageWrapper>
    <Stage />
    <TechnologiesSection />
    <Projects />
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
