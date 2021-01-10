import styled from 'styled-components';
import tw from 'twin.macro';

export const PageTitleWrapper = styled.div<{ bckImg: string }>`
  ${tw`relative`}
  box-shadow: 0 -20px 40px rgba(255, 255, 255, 0.15) inset;

  &::before {
      content: "";
    ${tw`w-full absolute left-0 bottom-0 h-1`}
    box-shadow: 0 -6px 0 0 rgba(255, 255, 255, 0.12) inset;
  }

  > .container {
    background-position-x: 650px;
    ${tw`py-6 bg-no-repeat bg-scroll`}
    background-image: ${({ bckImg }) => `url(${bckImg})`};
    background-color: ${({ theme }) => theme.primary};
  }

  .title {
    ${tw`font-light`}
    text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.2);
    color: ${({ theme }) => theme.backgroundLight};
  }
`;
