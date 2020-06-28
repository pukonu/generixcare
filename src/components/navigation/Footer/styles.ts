import styled from 'styled-components';
import tw from 'twin.macro';

export const FooterWrapper = styled.footer`
  ${tw`relative`}
  color: ${({ theme }) => theme.primary};

  .container {
    ${tw`border-b-2`}
    border-color: ${({ theme }) => theme.primary};
    background-color: ${({ theme }) => theme.backgroundLight};
    box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.05), 0 1px 0 rgba(255, 255, 255, 0.07) inset;
  }

  .backTop {
    top: 50%;
    transform: translateY(-50%);
    ${tw`absolute hidden md:block right-0 mr-6 h-8 w-8 rounded-full focus:outline-none focus:shadow-outline`}
  }
`;
