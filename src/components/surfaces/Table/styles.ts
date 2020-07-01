import styled from 'styled-components';
import tw from 'twin.macro';

export const TableWrapper = styled.table`
  ${tw`table-auto w-full max-w-full`}

  tr {
    &:nth-of-type(odd) {
      background-color: ${({ theme }) => theme.backgroundDark};
    }

    td {
      ${tw`w-1/3 p-2 align-top border-t`}
    }
  }
`;
