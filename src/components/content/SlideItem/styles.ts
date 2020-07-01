import styled from 'styled-components';
import tw from 'twin.macro';

export const SlideItemWrapper = styled.div`
  ${tw`relative`}

  .title-wrapper {
    ${tw`p-5 hidden md:flex flex-col justify-center`}
    width: 18rem;
    background: rgba(255, 255, 255, 0.7) none repeat scroll 0 0;

    .slide-link {
      ${tw`px-4 py-2 rounded-md inline-block`}
      color: ${({ theme }) => theme.backgroundLight};
      background-color: ${({ theme }) => theme.primary};
      box-shadow: 0 -1px 0 rgba(255, 255, 255, 0.15) inset, 0 -5px 10px rgba(255, 255, 255, 0.1) inset, 0 1px 0 rgba(0, 0, 0, 0.1);
    }
  }

  .controls-wrapper {
    .controls-btn {
      ${tw`h-12 w-12 hidden sm:flex items-center justify-center opacity-50 hover:opacity-75 focus:outline-none focus:shadow-outline rounded-full`}
      background: rgba(255, 255, 255, 0.7) none repeat scroll 0 0;
    }

    .dots {
      ${tw`inline-block ml-2`}

      button {
        ${tw`h-4 w-4 border-2 rounded-full flex items-center justify-center focus:outline-none focus:shadow-outline`}
        border-color: ${({ theme }) => theme.backgroundLight};
        }

        span {
          ${tw`inline-block h-2 w-2 rounded-full`}

            &.dot {
              background-color: ${({ theme }) => theme.backgroundLight};
            }
        }
      }
    }
  }
`;
