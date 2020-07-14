import styled from 'styled-components';
import tw from 'twin.macro';

export const TextFieldWrapper = styled.div`
  label {
    left: 0.75rem;
    ${tw`absolute top-0 text-xs p-1 pr-2 -mt-3`}
    color: ${({ theme }) => theme.secondaryDark};
    background-color: ${({ theme }) => theme.backgroundLight};
  }

  .field {
    border-color: ${({ theme }) => theme.secondaryDark};
    ${tw`w-full border rounded-md p-2 focus:outline-none focus:shadow-outline transition ease-in duration-300`}
  }

  .error {
    ${tw`inline-block`}
    color: ${({ theme }) => theme.primary};

    &::first-letter {
      ${tw`uppercase`}
    }
  }
`;
