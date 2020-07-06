import styled from 'styled-components';
import tw from 'twin.macro';

export const MobileMenuWrapper = styled.div`
  ${tw`fixed block lg:hidden transition-colors duration-300 ease-in-out`}
  background-color: rgba(0,0,0,0.2);

  &.open {
    ${tw`top-0 right-0 bottom-0 left-0 z-20`}

    .menu-wrapper {
      ${tw`translate-x-0 transition-transform duration-300`}
    }
  }

  .menu-wrapper {
    max-width: 270px;
    background-color: ${({ theme }) => theme.secondaryDark};
    ${tw`w-full h-full transform -translate-x-full  ease-in fixed top-0 right-0 bottom-0 left-0 z-20 overflow-y-auto`}
  }

  .menu-inner-wrapper {
    background-color: ${({ theme }) => theme.secondaryLight};

    li {
      ${tw`border-b`}
      border-color: ${({ theme }) => theme.secondaryDark};

      a {
        color: ${({ theme }) => theme.backgroundLight};
        ${tw`opacity-75 px-4 py-3 inline-block w-full capitalize`}
      }
    }
  }
`;
