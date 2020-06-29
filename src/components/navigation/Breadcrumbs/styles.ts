import styled from 'styled-components';
import tw from 'twin.macro';

export const BreadcrumbsWrapper = styled.div`
  ${tw`py-3 border-b mb-5`}
  border-color: ${({ theme }) => theme.backgroundDark};
  background-color: ${({ theme }) => theme.backgroundDark};
  box-shadow: 0 -1px 0 rgba(255, 255, 255, 0.075) inset, 0 5px 15px rgba(0, 0, 0, 0.1) inset;

  .breadcrumb {
    ${tw`inline-block`}

    a {
     color: ${({ theme }) => theme.primary};
    }
  }
`;
