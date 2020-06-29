import styled from 'styled-components';
import tw from 'twin.macro';

export const HeaderWrapper = styled.header`
  .container {
    ${tw`border-t-2 py-6`}
    border-color: ${({ theme }) => theme.primary};
    background-color: ${({ theme }) => theme.backgroundLight};
  }

  .menu-toggle {
    ${tw`h-10 w-10 ml-auto flex items-center justify-center rounded leading-none focus:outline-none focus:shadow-outline lg:hidden`}
    background-color: ${({ theme }) => theme.backgroundDark};
    box-shadow: 0 1px 0 rgba(255, 255, 255, 0.08), 0 1px 1px rgba(0, 0, 0, 0.1) inset;
  }

  .link-wrapper {
    transition-property: background-color;
    color: ${({ theme }) => theme.secondaryLight};
    border-color: ${({ theme }) => theme.backgroundDark};
    box-shadow: 1px 1px 0 rgba(255, 255, 255, 0.1) inset;
    ${tw`border h-10 w-10 flex items-center justify-center rounded`}

    &:hover {
      color: ${({ theme }) => theme.backgroundLight};
      background-color: ${({ theme }) => theme.primary};
    }
  }
`;
