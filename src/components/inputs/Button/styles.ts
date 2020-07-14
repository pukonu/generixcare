import styled from 'styled-components';
import tw from 'twin.macro';

export const ButtonWrapper = styled.button`
  color: white;
  background-color: ${({ theme }) => theme.primary};
  ${tw`text-center focus:outline-none focus:shadow-outline font-medium p-2 text-sm rounded-md`}
`;
