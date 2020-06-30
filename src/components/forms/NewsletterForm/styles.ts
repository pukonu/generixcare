import styled from 'styled-components';
import tw from 'twin.macro';

export const NewsletterFormWrapper = styled.div`
  ${tw`flex flex-wrap lg:items-center`}

  .email-input {
    border-color: rgba(0, 0, 0, 0.1);
    background-color: ${({ theme }) => theme.backgroundDark};
    box-shadow: 1px 1px 0 rgba(255, 255, 255, 0.1), 0 1px 3px 1px rgba(0, 0, 0, 0.05) inset;
    ${tw`focus:outline-none rounded-sm border inline-block px-3 py-2 w-48 md:w-56`}

    &::placeholder {
      color: ${({ theme }) => theme.secondaryDark};
    }
  }

  .submit-input {
    color: ${({ theme }) => theme.backgroundLight};
    background-color: ${({ theme }) => theme.primary};
    ${tw`ml-1 md:ml-2 focus:outline-none rounded-sm inline-block px-4 py-2`}
  }
`;
