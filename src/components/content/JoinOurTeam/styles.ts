import styled from 'styled-components';
import tw from 'twin.macro';

export const JoinOurTeamWrapper = styled.div`
  .link {
    ${tw`inline-block text-white px-4 py-2 rounded-sm`}
    background-color: ${({ theme }) => theme.primary}
  }
`;
