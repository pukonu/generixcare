import styled from 'styled-components';
import tw from 'twin.macro';

export const DesktopMenuWrapper = styled.div`
  ${tw`hidden lg:block border-t`}
  background-color: ${({ theme }) => theme.backgroundDark};
  box-shadow: 0 -10px 15px rgba(0, 0, 0, 0.035) inset, 0 1px 0 rgba(255, 255, 255, 0.075) inset, 0 10px 50px rgba(255, 255, 255, 0.1) inset;

  .nav-parent {
    ${tw`inline-block relative`}

    &:hover {
      .nav-submenu {
        top: 100%;
        transition-property: all;
        transition-timing-function: ease;
        ${tw`z-20 duration-200 opacity-100 max-h-screen`}
      }
    }

    a {
      &:hover {
        color: ${({ theme }) => theme.backgroundLight};
        background-color: ${({ theme }) => theme.primary};
      }
    }

    .nav-submenu {
      max-height: 0;
      min-width: 250px;
      transition-property: all;
      transition-timing-function: ease;
      box-shadow: ${({ theme }) => `0 2px 0 ${theme.primary}`};
      background-color: ${({ theme }) => theme.backgroundLight};
      ${tw`absolute z-0 top-0 duration-200 opacity-0`}
    }
  }
`;
