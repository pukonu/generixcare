import styled from 'styled-components';
import tw from 'twin.macro';

export const ContentBoxWrapper = styled.div`
  ${tw`mb-8`}

  .title {
    ${tw`font-light pb-3 mb-3 border-b`}
    color: ${({ theme }) => theme.primary};
    border-bottom-color: rgba(0, 0, 0, 0.075);
  }

  ul {
    ${tw`leading-7 list-disc pl-4`}
  }
`;
