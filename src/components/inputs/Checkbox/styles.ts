import styled from 'styled-components';
import tw from 'twin.macro';

export const CheckboxWrapper = styled.div`
  .input-wrapper {
    ${tw`flex items-center`}

    @media (min-width: 640px) {
      height: 2.6rem;
    }
  }

  .error {
    ${tw`inline-block`}
    color: ${({ theme }) => theme.primary};

    &::first-letter {
      ${tw`uppercase`}
    }
  }
`;
