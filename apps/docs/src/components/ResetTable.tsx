import styled from 'styled-components'

export const ResetTableStyles = styled.div`
  table tr {
    background-color: transparent;
    border-top: none;
  }
  table tr:nth-child(2n) {
    background-color: transparent;
  }
  table th,
  table td {
    border: none;
  }
  table th {
    background-color: transparent;
    color: initial;
    font-weight: initial;
  }
  table td {
    color: initial;
  }
`
