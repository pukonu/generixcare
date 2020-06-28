import styled from 'styled-components';
import tw from 'twin.macro';

export const HeaderWrapper = styled.header`
  .container {
    ${tw`border-t-2 py-6`}
    border-color: ${({ theme }) => theme.primary};
    background-color: ${({ theme }) => theme.backgroundLight};
  }
`;
