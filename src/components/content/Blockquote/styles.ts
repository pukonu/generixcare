import styled from 'styled-components';
import tw from 'twin.macro';

export const BlockquoteWrapper = styled.blockquote`
  ${tw`py-10`}
  > * {
    ${tw`leading-tight`}
  }
`;
