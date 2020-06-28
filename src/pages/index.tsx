import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro'; // eslint-disable-line import/no-extraneous-dependencies

import Theme from '../components/theme';

const Wrapper = styled.div`
  ${tw`flex flex-col items-center justify-center h-screen`}
`;

const Main = tw.div`
  p-6 bg-gray-100 rounded-lg shadow-2xl
`;

const Heading = tw.h1`
  text-2xl text-gray-500 uppercase mt-5
`;

const Text = tw.p`
  text-xl text-gray-700 my-4
`;

const Index = () => (
  <Theme>
    <div>
      <Wrapper>
        <Main>
          <Heading>Hello, world!</Heading>
          <Text>
            Welcome to the Gatsby + Tailwind CSS + Styled-Components + Typescript Starter.
          </Text>
        </Main>
      </Wrapper>
    </div>
  </Theme>
);

export default Index;
