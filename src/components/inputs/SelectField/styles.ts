import styled from 'styled-components';
import tw from 'twin.macro';

export const SelectFieldWrapper = styled.div`
  label {
    left: 0.75rem;
    ${tw`absolute top-0 text-xs p-1 pr-2 -mt-3 z-10`}
    color: ${({ theme }) => theme.secondaryDark};
    background-color: ${({ theme }) => theme.backgroundLight};
  }

  .error {
    ${tw`inline-block`}
    color: ${({ theme }) => theme.primary};

    &::first-letter {
      ${tw`uppercase`}
    }
  }
`;
