import styled from 'styled-components';
import tw from 'twin.macro';

export const HighlightTextWrapper = styled.div`
  ${tw`px-2 py-4 rounded-md mb-12`}
  color: ${({ theme }) => theme.tertiaryDark};
  background-color: ${({ theme }) => theme.tertiaryLight};

  ul {
    ${tw`list-disc pl-4`}

    li:not(:last-child) {
      ${tw`mb-2`}
    }
  }
`;
