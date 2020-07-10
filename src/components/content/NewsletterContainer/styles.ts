import styled from 'styled-components';
import tw from 'twin.macro';

export const NewsletterWrapper = styled.div`
  ${tw`-mx-4 px-4 py-6`}
  background-color: ${({ theme }) => theme.backgroundDark};
`;
